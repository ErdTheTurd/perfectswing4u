(function () {
  var dict = window.PS4U_I18N || { en: {}, es: {} };
  var storageKey = "ps4u-lang";

  function applyLang(lang) {
    if (!dict[lang]) lang = "en";
    var pack = dict[lang];
    document.documentElement.lang = lang === "es" ? "es" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (pack[key] != null) el.innerHTML = pack[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (pack[key] != null) el.setAttribute("aria-label", pack[key]);
    });

    var title = lang === "es"
      ? "Perfect Swing 4U Golf Academy | Clases bajo techo en El Paso, TX"
      : "Perfect Swing 4U Golf Academy | Indoor Coaching in El Paso, TX";
    document.title = title;

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(storageKey, lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      var pack = dict[document.documentElement.lang === "es" ? "es" : "en"];
      var labelKey = open ? "nav.menuClose" : "nav.menu";
      if (pack[labelKey]) toggle.setAttribute("aria-label", pack[labelKey]);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        var pack = dict[document.documentElement.lang === "es" ? "es" : "en"];
        if (pack["nav.menu"]) toggle.setAttribute("aria-label", pack["nav.menu"]);
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var initial = "en";
  try {
    var saved = localStorage.getItem(storageKey);
    if (saved === "en" || saved === "es") initial = saved;
  } catch (e) {}
  applyLang(initial);
})();
