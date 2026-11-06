/* Reading size: A- / A / A+ in the header, remembered between visits.
   The page is sized from html { font-size: var(--reading-size) }, so one
   number moves the headings, the verse and the pager together. */
(function () {
  "use strict";

  var KEY = "cap-reading-size";
  var MIN = 14, MAX = 22, STEP = 1, DEFAULT = 17;
  var root = document.documentElement;

  function apply(px) {
    root.style.setProperty("--reading-size", px + "px");
    try { localStorage.setItem(KEY, String(px)); } catch (e) {}
  }

  function current() {
    var saved = parseInt(localStorage.getItem(KEY) || "", 10);
    return isNaN(saved) ? DEFAULT : saved;
  }

  apply(current());

  document.querySelectorAll("[data-size]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var mode = btn.getAttribute("data-size");
      var next = current();
      if (mode === "up") next = Math.min(MAX, next + STEP);
      else if (mode === "down") next = Math.max(MIN, next - STEP);
      else next = DEFAULT;
      apply(next);
    });
  });
})();
