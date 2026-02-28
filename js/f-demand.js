const searchInput = document.getElementById("fdSearch");
const table = document.getElementById("fdTable");

const normalize = (value) => String(value || "").toLowerCase().trim();

const applySearch = () => {
  if (!table) return;
  const q = normalize(searchInput?.value);
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  if (!q) {
    rows.forEach((r) => {
      r.style.display = "";
    });
    return;
  }
  rows.forEach((r) => {
    const txt = normalize(r.textContent);
    r.style.display = txt.includes(q) ? "" : "none";
  });
};

if (searchInput) {
  searchInput.addEventListener("input", applySearch);
}

applySearch();
