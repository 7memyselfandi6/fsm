const form = document.getElementById("loginForm");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const btn = document.getElementById("loginBtn");

const setError = (el, errorEl, message) => {
  const hasError = Boolean(message);
  el.setAttribute("aria-invalid", hasError ? "true" : "false");
  errorEl.textContent = message || "";
};

const validate = () => {
  let ok = true;
  if (!userInput.value.trim()) {
    setError(userInput, userError, "Please enter your username.");
    ok = false;
  } else {
    setError(userInput, userError, "");
  }
  if (!passInput.value.trim()) {
    setError(passInput, passError, "Please enter your password.");
    ok = false;
  } else {
    setError(passInput, passError, "");
  }
  return ok;
};

const mockLogin = async (username) => {
  btn.disabled = true;
  btn.textContent = "LOGGING IN...";
  await new Promise((r) => setTimeout(r, 900));
  // Replace with real navigation once integrated
  window.location.href = "./index.html";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    mockLogin(userInput.value.trim());
  }
});

userInput.addEventListener("input", () => setError(userInput, userError, ""));
passInput.addEventListener("input", () => setError(passInput, passError, ""));
