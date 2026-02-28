const searchInput = document.getElementById("reqSearch");
const tbody = document.getElementById("reqTbody");

const rows = tbody ? Array.from(tbody.querySelectorAll("tr")) : [];

const normalize = (value) => String(value || "").toLowerCase().trim();

const applyFilter = () => {
  const query = normalize(searchInput?.value);
  if (!query) {
    rows.forEach((row) => {
      row.style.display = "";
    });
    return;
  }

  rows.forEach((row) => {
    const text = normalize(row.textContent);
    row.style.display = text.includes(query) ? "" : "none";
  });
};

if (searchInput) {
  searchInput.addEventListener("input", applyFilter);
}

applyFilter();
