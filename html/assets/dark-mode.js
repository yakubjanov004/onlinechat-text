(function () {
  "use strict";
  const KEY = "qc_theme";

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  function getTheme() {
    return localStorage.getItem(KEY) || "auto";
  }

  function apply(theme) {
    const effective = theme === "auto" ? systemTheme() : theme;
    document.body.setAttribute("data-theme", effective);
    document.documentElement.setAttribute("data-theme", effective);
    const sel = document.querySelector("[data-theme-select]");
    if (sel) sel.value = theme;
  }

  function save(theme) {
    localStorage.setItem(KEY, theme);
    apply(theme);
  }

  document.addEventListener("change", (e) => {
    if (e.target.matches("[data-theme-select]")) save(e.target.value);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (getTheme() === "auto") apply("auto");
    });

  document.addEventListener("DOMContentLoaded", () => apply(getTheme()));
})();
