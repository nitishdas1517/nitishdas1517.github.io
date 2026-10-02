// dark-mode.js
// The initial theme is set by an inline script in <head> to avoid a flash;
// this file wires up the toggle button.

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
});
