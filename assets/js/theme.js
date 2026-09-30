(function () {
  try {
    document.documentElement.dataset.theme = localStorage.getItem("portfolio-theme") || "light";
  } catch (_) {
    document.documentElement.dataset.theme = "light";
  }
})();
