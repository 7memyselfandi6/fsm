const searchInput = document.querySelector(".search-box input");
const actionButton = document.querySelector(".search-action");

if (searchInput && window.AppState) {
  searchInput.addEventListener("input", (event) => {
    window.AppState.setState({ search: event.target.value });
  });
  window.AppState.subscribe((state) => {
    if (searchInput.value !== state.search) {
      searchInput.value = state.search;
    }
  });
}

if (actionButton && window.AppState) {
  actionButton.addEventListener("click", () => {
    const value = window.AppState.state.search || "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
  });
}
