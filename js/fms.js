const pageSizeSelect = document.getElementById("fmsPageSize");
const searchInput = document.getElementById("fmsSearch");
const tbody = document.getElementById("fmsTbody");
const info = document.getElementById("fmsInfo");
const totalAmt = document.getElementById("fmsTotalAmt");
const prevBtn = document.getElementById("fmsPrev");
const nextBtn = document.getElementById("fmsNext");
const headers = Array.from(document.querySelectorAll(".fms-table thead th.sortable"));

const state = {
  query: "",
  pageSize: Number(pageSizeSelect?.value || 10),
  page: 1,
  sortKey: "sn",
  sortDir: "asc"
};

const rowsData = [];

const normalize = (value) => String(value ?? "").toLowerCase().trim();

const getFiltered = () => {
  const q = normalize(state.query);
  if (!q) return rowsData.slice();
  return rowsData.filter((row) => {
    const hay = normalize(
      [row.sn, row.name, row.woreda, row.kebele, row.type, row.amt, row.reqid].join(" ")
    );
    return hay.includes(q);
  });
};

const compare = (a, b) => {
  const key = state.sortKey;
  const dir = state.sortDir === "asc" ? 1 : -1;
  const av = a[key];
  const bv = b[key];

  if (key === "sn" || key === "amt") {
    return (Number(av) - Number(bv)) * dir;
  }

  return String(av).localeCompare(String(bv)) * dir;
};

const setHeaderState = () => {
  headers.forEach((th) => {
    th.classList.remove("sorted-asc", "sorted-desc");
    if (th.dataset.key === state.sortKey) {
      th.classList.add(state.sortDir === "asc" ? "sorted-asc" : "sorted-desc");
    }
  });
};

const setPager = (total) => {
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  prevBtn.disabled = state.page <= 1;
  nextBtn.disabled = state.page >= totalPages;
};

const render = () => {
  if (!tbody || !info || !totalAmt) return;

  const filtered = getFiltered().sort(compare);
  setHeaderState();
  setPager(filtered.length);

  const total = filtered.length;
  const startIndex = total === 0 ? 0 : (state.page - 1) * state.pageSize;
  const endIndex = Math.min(startIndex + state.pageSize, total);
  const pageRows = filtered.slice(startIndex, endIndex);

  tbody.innerHTML = "";

  if (pageRows.length === 0) {
    const tr = document.createElement("tr");
    tr.className = "empty-row";
    const td = document.createElement("td");
    td.colSpan = 7;
    td.textContent = "No data available in table";
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    pageRows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.sn}</td>
        <td>${row.name}</td>
        <td>${row.woreda}</td>
        <td>${row.kebele}</td>
        <td>${row.type}</td>
        <td>${row.amt}</td>
        <td>${row.reqid}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  const showingFrom = total === 0 ? 0 : startIndex + 1;
  const showingTo = total === 0 ? 0 : endIndex;
  info.textContent = `Showing ${showingFrom} to ${showingTo} of ${total} entries`;

  const sum = filtered.reduce((acc, r) => acc + (Number(r.amt) || 0), 0);
  totalAmt.textContent = sum.toFixed(1);
};

headers.forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;
    if (!key) return;
    if (state.sortKey === key) {
      state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
    } else {
      state.sortKey = key;
      state.sortDir = "asc";
    }
    state.page = 1;
    render();
  });
});

if (pageSizeSelect) {
  pageSizeSelect.addEventListener("change", () => {
    state.pageSize = Number(pageSizeSelect.value || 10);
    state.page = 1;
    render();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value || "";
    state.page = 1;
    render();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    state.page = Math.max(1, state.page - 1);
    render();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    state.page = state.page + 1;
    render();
  });
}

render();
