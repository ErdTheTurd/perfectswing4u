(function () {
  "use strict";

  var STORAGE_KEY = "ps4u-lang";

  var dict = {
    en: {
      skip: "Skip to content",
      menu: "Menu",
      navAbout: "About",
      navPricing: "Lessons",
      navCoaches: "Coaches",
      navReviews: "Reviews",
      navVisit: "Visit",
      ctaBook: "Book a lesson",
      ctaMap: "Directions",
      heroTitle: "Full‑hour indoor lessons on N\u00A0Mesa.",
      heroLead:
        "Climate-controlled bay at Crown Point. FlightScope numbers on every shot, multi-angle video, Capto putting, and fittings with Yaser Garcia and Memo Vega.",
      heroMetaAddr: "5864 N Mesa St, Suite A",
      heroMetaHours: "Mon‑Fri 10am‑7pm",
      heroMetaClosed: "Closed weekends",
      aboutTitle: "Heat stays outside. Your hour stays on the mat.",
      aboutCopy:
        "Indoor academy on N Mesa at Crown Point, next to Another Broken Egg Cafe. Full‑hour lessons, fittings, and a pro shop — no tee times, no weather delays. Walk in when a coach is free. Clubs here if you need a set.",
      processTitle: "Book. Hit. Leave with one clear fix.",
      processSub: "Book on Square. One hour. A fix you can practice tomorrow.",
      step1t: "Book on Square",
      step1d:
        "Book online, call (915) 449-3613, or walk in if a coach is free. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      step2t: "Read the numbers",
      step2d:
        "FlightScope tracks ball speed, launch, spin, and carry on every shot. Face-on and down-the-line video. Capto on the putter for path, face, and tempo.",
      step3t: "Leave with one fix",
      step3d:
        "One or two adjustments that matter for your swing, not a long list. Drills you can repeat at the range or on the course.",
      priceTitle: "Clear prices. Full sessions.",
      priceSub: "One coach. FlightScope and video in the lesson hour. Book on Square.",
      pPrivate: "Private Lesson",
      pPrivateDesc: "60 min · FlightScope & video",
      pJunior: "Junior Lesson",
      pJuniorDesc: "60 min · young golfers",
      pHS: "High School Lesson",
      pHSDesc: "60 min · competitive prep",
      pPut: "Putting Analysis",
      pPutDesc: "30 min · Capto sensor",
      pDriver: "Driver Fitting",
      pDriverDesc: "Head, shaft, loft to your numbers",
      pIron: "Iron Fitting",
      pIronDesc: "Flex, length, lie, grip",
      pBag: "Full Bag Fitting",
      pBagDesc: "Driver through wedges",
      pBundle: "Swing + Putting Bundle",
      pBundleDesc:
        "Three 60-minute swing lessons plus two 30-minute Capto putting sessions — five visits, one plan.",
      policy:
        "Reschedule with 24 hours’ notice. No-shows forfeit 50% of the lesson fee. Booking through Square only.",
      techTitle: "What’s on the bay",
      techSub: "FlightScope, video, Capto, fittings — what each one is for.",
      tech1t: "FlightScope",
      tech1m: "Launch monitor · every full swing",
      tech1d:
        "Ball speed, launch, spin, and carry on each shot. Your coach points to the numbers that explain a slice, a thin strike, or lost distance — then you hit again and check the change.",
      tech2t: "Multi-angle video",
      tech2m: "Face-on · down-the-line",
      tech2d:
        "Two camera views of the same swing. Pause the frame, name the move, compare the next take — so you see what the coach sees.",
      tech3t: "Capto putting",
      tech3m: "Sensor on the putter · 30-min analysis",
      tech3d:
        "Path, face angle, and tempo through the stroke. Yaser is Capto Putting certified; the $75 putting analysis is built around this sensor.",
      tech4t: "Club fitting",
      tech4m: "Driver · irons · full bag",
      tech4d:
        "Head, shaft, loft, flex, length, lie, and grip matched to your FlightScope numbers. Driver $60, irons $80, full bag $160 — Memo specializes in fittings.",
      coachTitle: "Your coaches",
      coachSub:
        "PGA, TPI, Capto, ADM. Beginners through high school. Women, military, and veterans welcome.",
      yaserRole: "Head coach & founder",
      yaserTour: "U.S. Kids Golf tour director, El Paso chapter.",
      memoRole: "Instructor & club fitting specialist",
      memoCred: "Club fitting specialist",
      brandsTitle: "Pro shop brands",
      reviewsTitle: "From golfers who booked here",
      reviewsSub: "As posted on perfectswing4u.org — unedited.",
      visitTitle: "Find us on N Mesa",
      visitSub: "Crown Point, next to Another Broken Egg Cafe.",
      addrLabel: "Address",
      directions: "Open in Google Maps",
      hoursLabel: "Hours",
      monFri: "Mon‑Fri",
      hoursRange: "10am‑7pm",
      weekend: "Sat–Sun",
      closed: "Closed",
      contactLabel: "Contact",
      bookLabel: "Booking",
      bookBody:
        "Square only. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      ctaTitle: "Book on Square. Open Mon‑Fri 10am‑7pm.",
      ctaCopy:
        "Call (915) 449-3613, or walk in if a coach is free. Bring your clubs, or use ours.",
      footerTag: "Indoor golf academy · El Paso, TX",
      follow: "Follow",
      rights: "© Perfect Swing 4U Golf Academy",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Menú",
      navAbout: "Acerca",
      navPricing: "Clases",
      navCoaches: "Entrenadores",
      navReviews: "Reseñas",
      navVisit: "Visita",
      ctaBook: "Reservar clase",
      ctaMap: "Cómo llegar",
      heroTitle: "Clases de una hora bajo techo en N\u00A0Mesa.",
      heroLead:
        "Bahía con clima controlado en Crown Point. Números FlightScope en cada golpe, video multiángulo, putting Capto y ajuste de palos con Yaser Garcia y Memo Vega.",
      heroMetaAddr: "5864 N Mesa St, Suite A",
      heroMetaHours: "Lun‑Vie 10am‑7pm",
      heroMetaClosed: "Cerrado fines de semana",
      aboutTitle: "El calor se queda fuera. Tu hora, en el tapete.",
      aboutCopy:
        "Academia bajo techo en N Mesa en Crown Point, junto a Another Broken Egg Cafe. Lecciones de una hora completa, ajuste de palos y tienda de golf — sin horarios de salida ni demoras por clima. Entra si hay entrenador libre. Hay palos si necesitas un juego.",
      processTitle: "Reserva. Golpea. Sal con un ajuste claro.",
      processSub: "Reserva en Square. Una hora. Un ajuste que puedes practicar mañana.",
      step1t: "Reserva en Square",
      step1d:
        "Reserva en línea, llama al (915) 449-3613, o entra si hay entrenador libre. Reprograma con 24 horas de aviso; si faltas sin aviso pierdes el 50%.",
      step2t: "Lee los números",
      step2d:
        "FlightScope registra velocidad de la pelota, lanzamiento, efecto y distancia de vuelo (carry) en cada golpe. Video de frente y desde atrás. Capto en el putter para trayectoria, cara y ritmo.",
      step3t: "Sal con un ajuste",
      step3d:
        "Uno o dos ajustes que importan para tu swing, no una lista larga. Ejercicios que puedes repetir en el campo de práctica o en el campo.",
      priceTitle: "Precios claros. Sesiones completas.",
      priceSub: "Un entrenador. FlightScope y video en la hora de lección. Reserva en Square.",
      pPrivate: "Clase privada",
      pPrivateDesc: "60 min · FlightScope y video",
      pJunior: "Clase junior",
      pJuniorDesc: "60 min · golfistas jóvenes",
      pHS: "Clase de preparatoria",
      pHSDesc: "60 min · prep competitiva",
      pPut: "Análisis de putting",
      pPutDesc: "30 min · sensor Capto",
      pDriver: "Ajuste de driver",
      pDriverDesc: "Cabeza, varilla y loft a tus números",
      pIron: "Ajuste de hierros",
      pIronDesc: "Flexibilidad, largo, lie, grip",
      pBag: "Ajuste de bolsa completa",
      pBagDesc: "Driver a wedges",
      pBundle: "Paquete swing + putting",
      pBundleDesc:
        "Tres clases de swing de 60 minutos más dos sesiones Capto de 30 minutos — cinco visitas, un plan.",
      policy:
        "Reprograma con 24 horas de aviso. Si faltas sin aviso pierdes el 50% de la clase. Reserva solo por Square.",
      techTitle: "Lo que hay en la bahía",
      techSub: "FlightScope, video, Capto, ajuste de palos — para qué sirve cada uno.",
      tech1t: "FlightScope",
      tech1m: "Monitor de lanzamiento · cada swing completo",
      tech1d:
        "Velocidad de la pelota, lanzamiento, efecto y distancia de vuelo (carry) en cada golpe. Tu entrenador señala los números que explican un slice, un golpe delgado o distancia perdida — luego golpeas de nuevo y revisas el cambio.",
      tech2t: "Video multiángulo",
      tech2m: "De frente · desde atrás",
      tech2d:
        "Dos cámaras del mismo swing. Pausa el cuadro, nombra el movimiento, compara el siguiente tiro — para ver lo que ve el entrenador.",
      tech3t: "Putting Capto",
      tech3m: "Sensor en el putter · análisis de 30 min",
      tech3d:
        "Trayectoria, ángulo de cara y ritmo en el golpe. Yaser está certificado en Capto Putting; el análisis de $75 se basa en este sensor.",
      tech4t: "Ajuste de palos",
      tech4m: "Driver · hierros · bolsa completa",
      tech4d:
        "Cabeza, varilla, loft, flexibilidad, largo, lie y grip alineados a tus números de FlightScope. Driver $60, hierros $80, bolsa completa $160 — Memo se especializa en ajuste de palos.",
      coachTitle: "Tus entrenadores",
      coachSub:
        "PGA, TPI, Capto, ADM. Desde principiantes hasta preparatoria. Mujeres, militares y veteranos bienvenidos.",
      yaserRole: "Entrenador principal y fundador",
      yaserTour: "Director de tour U.S. Kids Golf, capítulo El Paso.",
      memoRole: "Instructor y especialista en ajuste de palos",
      memoCred: "Especialista en ajuste de palos",
      brandsTitle: "Marcas de la tienda de golf",
      reviewsTitle: "De golfistas que reservaron aquí",
      reviewsSub: "Como en perfectswing4u.org — sin editar.",
      visitTitle: "Encuéntranos en N Mesa",
      visitSub: "Crown Point, junto a Another Broken Egg Cafe.",
      addrLabel: "Dirección",
      directions: "Abrir en Google Maps",
      hoursLabel: "Horario",
      monFri: "Lun‑Vie",
      hoursRange: "10am‑7pm",
      weekend: "Sáb–Dom",
      closed: "Cerrado",
      contactLabel: "Contacto",
      bookLabel: "Reservas",
      bookBody:
        "Solo Square. Reprograma con 24 horas de aviso; si faltas sin aviso pierdes el 50%.",
      ctaTitle: "Reserva en Square. Abierto Lun‑Vie 10am‑7pm.",
      ctaCopy:
        "Llama al (915) 449-3613 o entra si hay entrenador libre. Trae tus palos o usa los nuestros.",
      footerTag: "Academia de golf bajo techo · El Paso, TX",
      follow: "Síguenos",
      rights: "© Perfect Swing 4U Golf Academy",
    },
  };

  var yaserBio = {
    en: "Thirteen-plus years of competitive golf. Full swings on FlightScope and video; Capto putting and TPI-informed movement. Juniors from first grip through high school.",
    es: "Más de trece años de golf competitivo. Swings completos con FlightScope y video; putting Capto y movimiento con TPI. Jóvenes desde el primer grip hasta preparatoria.",
  };

  var memoBio = {
    en: "ADM certified. Runs fittings and private lessons with clear talk and visualization — beginners through competitive high school. Driver, iron, and full-bag fittings on FlightScope numbers.",
    es: "Certificado ADM. Hace ajuste de palos y clases privadas con conversación clara y visualización — desde principiantes hasta preparatoria competitiva. Ajustes de driver, hierros y bolsa completa con números FlightScope.",
  };

  function applyLang(lang) {
    var pack = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    var yaser = document.getElementById("yaser-bio");
    var memo = document.getElementById("memo-bio");
    if (yaser) yaser.textContent = yaserBio[lang] || yaserBio.en;
    if (memo) memo.textContent = memoBio[lang] || memoBio.en;

    var enBtn = document.getElementById("lang-en");
    var esBtn = document.getElementById("lang-es");
    if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    if (esBtn) esBtn.setAttribute("aria-pressed", lang === "es" ? "true" : "false");

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    var lang = saved === "es" || saved === "en" ? saved : "en";
    applyLang(lang);

    var enBtn = document.getElementById("lang-en");
    var esBtn = document.getElementById("lang-es");
    if (enBtn) enBtn.addEventListener("click", function () { applyLang("en"); });
    if (esBtn) esBtn.addEventListener("click", function () { applyLang("es"); });
  }

  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initNav();
  });
})();
