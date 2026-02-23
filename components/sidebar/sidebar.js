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
    themeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.theme === state.theme);
    });
  });
}
