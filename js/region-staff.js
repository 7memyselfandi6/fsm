const searchInput = document.getElementById("unionSearch");
const table = document.getElementById("unionTable");

const normalize = (value) => String(value || "").toLowerCase().trim();

const applySearch = () => {
  if (!table) return;
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const q = normalize(searchInput?.value);
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
