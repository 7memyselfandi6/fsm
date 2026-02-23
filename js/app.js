const path = window.location.pathname.toLowerCase();
const isLoginPage = path.endsWith("/login.html");
const isUnionPage = path.endsWith("/union.html");
const isAllocationPage = path.endsWith("/allocation.html");

const state = {
  theme: "light",
  activeNav: isLoginPage
    ? "moa-member"
    : isUnionPage
      ? "union"
      : isAllocationPage
        ? "allocation"
        : "dashboard",
  search: ""
};

const bus = new EventTarget();

const setState = (patch) => {
  Object.assign(state, patch);
  bus.dispatchEvent(new CustomEvent("statechange", { detail: { ...state } }));
};

const subscribe = (handler) => {
  const listener = (event) => handler(event.detail);
  bus.addEventListener("statechange", listener);
  handler({ ...state });
  return () => bus.removeEventListener("statechange", listener);
};

window.AppState = {
  state,
  setState,
  subscribe
};

window.ComponentLoader = {
  load: async (rootId, htmlPath, jsPath) => {
    const root = document.getElementById(rootId);
    if (!root) {
      return;
    }
    const resolveUrl = (p) => new URL(p, document.baseURI).href;
    const response = await fetch(resolveUrl(htmlPath));
    root.innerHTML = await response.text();
    if (jsPath) {
      await import(resolveUrl(jsPath));
    }
  }
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

subscribe((nextState) => {
  applyTheme(nextState.theme);
});

const loadInitial = async () => {
  await window.ComponentLoader.load(
    "sidebar-root",
    "./components/sidebar/sidebar.html",
    "./components/sidebar/sidebar.js"
  );
  await window.ComponentLoader.load(
    "header-root",
    "./components/header/header.html",
    "./components/header/header.js"
  );
  await window.ComponentLoader.load(
    "dashboard-root",
    "./components/dashboard/dashboard.html",
    "./components/dashboard/dashboard.js"
  );
};

loadInitial();
