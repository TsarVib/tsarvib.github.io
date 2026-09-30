jQuery(function ($) {
  "use strict";

  function syncTheme() {
    const dark = document.documentElement.dataset.theme === "dark";
    $("#theme-toggle").attr("aria-pressed", String(dark));
    $("[data-theme-icon='light']").prop("hidden", dark);
    $("[data-theme-icon='dark']").prop("hidden", !dark);
  }

  syncTheme();
  $("#theme-toggle").prop("hidden", false).on("click", function () {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch (_) {}
    syncTheme();
  });
});
