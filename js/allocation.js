const tabs = Array.from(document.querySelectorAll(".alloc-tab"));
const views = Array.from(document.querySelectorAll(".alloc-view"));
const surface = document.querySelector(".alloc-surface");

const setActive = (name) => {
  const hasView = Boolean(name);
  tabs.forEach((t) => {
    const isActive = t.dataset.tab === name;
    t.classList.toggle("active", isActive);
    t.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  views.forEach((v) => v.classList.toggle("active", v.dataset.view === name));
  if (surface) {
    surface.classList.toggle("has-view", hasView);
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const name = tab.dataset.tab || "purchased";
    const isAlreadyActive = tab.classList.contains("active");
    setActive(isAlreadyActive ? "" : name);
  });
});

setActive("");

const purchasedForm = document.getElementById("purchasedForm");
if (purchasedForm) {
  purchasedForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const year = document.getElementById("pYear")?.value?.trim();
    const type = document.getElementById("pType")?.value?.trim();
    const amount = document.getElementById("pAmount")?.value?.trim();
    if (!year || !type || !amount) {
      alert("Please fill year, fertilizer type, and amount.");
      return;
    }
    alert("Submitted (mock).");
  });
}

const seasonForm = document.getElementById("seasonForm");
if (seasonForm) {
  seasonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const yearA = document.getElementById("sYearA")?.value?.trim();
    const yearB = document.getElementById("sYearB")?.value?.trim();
    const meher = document.getElementById("meher")?.value?.trim();
    const belg = document.getElementById("belg")?.value?.trim();
    const irrigation = document.getElementById("irrigation")?.value?.trim();
    if (!yearA || !yearB || !meher || !belg || !irrigation) {
      alert("Please fill all seasonal proportion fields.");
      return;
    }
    alert("Submitted (mock).");
  });
}
