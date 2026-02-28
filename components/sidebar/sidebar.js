const navItems = Array.from(document.querySelectorAll(".nav-item"));
const themeButtons = Array.from(document.querySelectorAll(".theme-btn"));

navItems.forEach((item) => {
  if (item.disabled) {
    return;
  }
  item.addEventListener("click", (e) => {
    if (item.tagName === "A" && item.getAttribute("href")) {
      e.preventDefault();
    }
    const route = item.dataset.route || "";
    if (route === "moa-member") {
      window.location.href = "./login.html";
      return;
    }
    if (route === "union") {
      window.location.href = "./union.html";
      return;
    }
    if (route === "allocation") {
      window.location.href = "./allocation.html";
      return;
    }
    if (route === "re-allocation") {
      window.location.href = "./re-allocation.html";
      return;
    }
    if (route === "request-detail") {
      window.location.href = "./request-detail.html";
      return;
    }
    if (route === "graphs") {
      window.location.href = "./graphs.html";
      return;
    }
    if (route === "intelligence") {
      window.location.href = "./intelligence.html";
      return;
    }
    if (route === "fms") {
      window.location.href = "./fms.html";
      return;
    }
    if (route === "region-staff") {
      window.location.href = "./region-staff.html";
      return;
    }
    if (route === "f-demand") {
      window.location.href = "./f-demand.html";
      return;
    }
    if (route === "woreda-staff") {
      window.location.href = "./woreda-staff.html";
      return;
    }
    if (route === "detailed-demand") {
      window.location.href = "./detailed-demand.html";
      return;
    }
    if (route === "approval") {
      window.location.href = "./approval.html";
      return;
    }
    if (route === "demand-summary") {
      window.location.href = "./demand-summary.html";
      return;
    }
    if (route === "dashboard") {
      window.location.href = "./index.html";
      return;
    }
    if (window.AppState) {
      window.AppState.setState({ activeNav: route });
    }
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme || "light";
    if (window.AppState) {
      window.AppState.setState({ theme });
    }
  });
});

if (window.AppState) {
  window.AppState.subscribe((state) => {
    navItems.forEach((item) => {
      const route = item.dataset.route || "";
      item.classList.toggle("active", route === state.activeNav);
    });

    const fDemandItem = navItems.find((i) => i.dataset.route === "f-demand");
    if (fDemandItem) {
      const show = state.activeNav === "region-staff" || state.activeNav === "f-demand";
      fDemandItem.hidden = !show;
    }

    themeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.theme === state.theme);
    });
  });
}
