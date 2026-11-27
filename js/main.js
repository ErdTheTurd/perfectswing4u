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
      heroTitle: "Full-hour indoor lessons on N\u00A0Mesa.",
      heroLead:
        "Climate-controlled bay at Crown Point. FlightScope on every shot, multi-angle video, Capto putting, and club fitting with Yaser Garcia and Memo Vega.",
      heroMeta: "5864 N Mesa St, Suite A · Mon–Fri 10am–7pm · Closed weekends",
      aboutTitle: "El Paso heat stays outside. Your hour stays on the mat.",
      aboutCopy:
        "Perfect Swing 4U is an indoor academy on N Mesa at Crown Point, next to Another Broken Egg Cafe. Full-hour lessons, club fitting, and a pro shop — no tee times, no weather delays. Walk-ins welcome when a coach is free. Clubs on hand if you do not have a set.",
      processTitle: "How a lesson runs",
      processSub: "Book on Square. Show up. Leave with one clear thing to practice.",
      step1t: "Reserve the hour",
      step1d:
        "Book online at Square, call (915) 449-3613, or walk in if a coach is free. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      step2t: "Measure the ball",
      step2d:
        "FlightScope tracks ball speed, launch, spin, and carry. Multi-angle video shows face-on and down-the-line. Capto putting uses a sensor on the putter for path, face, and tempo.",
      step3t: "Take the change outside",
      step3d:
        "Your coach picks the one or two adjustments that matter for your swing — not a long list. Drills you can repeat at the range or on the course.",
      priceTitle: "Lessons & fittings",
      priceSub: "One coach. Full session. Prices as listed.",
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
      techTitle: "The tools on the bay",
      techSub: "What each system measures, and what your coach does with it.",
      tech1t: "FlightScope",
      tech1m: "Launch monitor · every full swing",
      tech1d:
        "Reads ball speed, launch, spin, and carry on each shot. Your coach points to the numbers that explain a slice, a thin strike, or a loss of distance — then you hit again and check the change.",
      tech2t: "Multi-angle video",
      tech2m: "Face-on · down-the-line",
      tech2d:
        "Two camera views of the same swing. Pause the frame, name the move, and compare the next take so you see what the coach sees — not a vague tip to “stay down.”",
      tech3t: "Capto putting",
      tech3m: "Sensor on the putter · 30-min analysis",
      tech3d:
        "Tracks path, face angle, and tempo through the stroke. Yaser is Capto Putting certified; the $75 putting analysis is built around this sensor.",
      tech4t: "Club fitting",
      tech4m: "Driver · irons · full bag",
      tech4d:
        "Head, shaft, loft, flex, length, lie, and grip matched to your FlightScope numbers. Driver fitting $60, iron fitting $80, full bag $160 — Memo specializes in fittings.",
      coachTitle: "The coaches",
      coachSub:
        "Two instructors. One bay. Beginners, juniors, high school players, women, military, and veterans.",
      yaserRole: "Head coach & founder",
      yaserTour: "El Paso tour director for U.S. Kids Golf.",
      memoRole: "Instructor & club fitting specialist",
      memoCred: "Club fitting specialist",
      brandsTitle: "In the pro shop",
      reviewsTitle: "What golfers wrote",
      reviewsSub: "From perfectswing4u.org — printed here without edits.",
      visitTitle: "Visit the bay",
      visitSub: "On N Mesa at Crown Point, next to Another Broken Egg Cafe.",
      addrLabel: "Address",
      directions: "Open in Google Maps",
      hoursLabel: "Hours",
      monFri: "Mon–Fri",
      weekend: "Sat–Sun",
      closed: "Closed",
      contactLabel: "Contact",
      bookLabel: "Booking",
      bookBody:
        "Square only. Reschedule with 24 hours’ notice; missed appointments forfeit 50%.",
      ctaTitle: "Book on Square. Open Mon–Fri 10am–7pm.",
      ctaCopy:
        "Call the bay, or walk in if a coach is free. Bring clubs — or use ours.",
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
        "Bahía con clima controlado en Crown Point. FlightScope en cada tiro, video multiángulo, putting Capto y ajuste de palos con Yaser Garcia y Memo Vega.",
      heroMeta: "5864 N Mesa St, Suite A · Lun–Vie 10am–7pm · Cerrado fines de semana",
      aboutTitle: "El calor de El Paso queda afuera. Tu hora queda en el mat.",
      aboutCopy:
        "Perfect Swing 4U es una academia bajo techo en N Mesa en Crown Point, junto a Another Broken Egg Cafe. Clases de una hora completa, ajuste de palos y pro shop — sin tee times ni demoras por clima. Sin cita previa bienvenidos si hay entrenador libre. Hay palos si no traes set.",
      processTitle: "Cómo corre una clase",
      processSub: "Reserva en Square. Llega. Sal con una cosa clara para practicar.",
      step1t: "Reserva la hora",
      step1d:
        "Reserva en línea en Square, llama al (915) 449-3613, o entra sin cita previa si hay entrenador libre. Reprograma con 24 horas de aviso; si faltas sin aviso pierdes el 50%.",
      step2t: "Mide la pelota",
      step2d:
        "FlightScope registra velocidad de la pelota, lanzamiento, efecto y distancia de vuelo. El video multiángulo muestra de frente y desde atrás. Capto putting usa un sensor en el putter para path, face y tempo.",
      step3t: "Lleva el cambio afuera",
      step3d:
        "Tu entrenador elige uno o dos ajustes que importan para tu swing — no una lista larga. Drills que puedes repetir en el range o en el campo.",
      priceTitle: "Clases y ajustes de palos",
      priceSub: "Un entrenador. Sesión completa. Precios como se listan.",
      pPrivate: "Clase privada",
      pPrivateDesc: "60 min · FlightScope y video",
      pJunior: "Clase junior",
      pJuniorDesc: "60 min · golfistas jóvenes",
      pHS: "Clase de preparatoria",
      pHSDesc: "60 min · prep competitiva",
      pPut: "Análisis de putting",
      pPutDesc: "30 min · sensor Capto",
      pDriver: "Ajuste de driver",
      pDriverDesc: "Cabeza, shaft y loft a tus números",
      pIron: "Ajuste de hierros",
      pIronDesc: "Flex, largo, lie, grip",
      pBag: "Ajuste de bolsa completa",
      pBagDesc: "Driver a wedges",
      pBundle: "Paquete swing + putting",
      pBundleDesc:
        "Tres clases de swing de 60 minutos más dos sesiones Capto de 30 minutos — cinco visitas, un plan.",
      policy:
        "Reprograma con 24 horas de aviso. Si faltas sin aviso pierdes el 50% de la clase. Reserva solo por Square.",
      techTitle: "Las herramientas en la bahía",
      techSub: "Qué mide cada sistema, y qué hace tu entrenador con eso.",
      tech1t: "FlightScope",
      tech1m: "Monitor de launch · cada swing completo",
      tech1d:
        "Lee velocidad de la pelota, lanzamiento, efecto y distancia de vuelo en cada tiro. Tu entrenador señala los números que explican un slice, un golpe delgado o una pérdida de distancia — luego golpeas de nuevo y revisas el cambio.",
      tech2t: "Video multiángulo",
      tech2m: "De frente · desde atrás",
      tech2d:
        "Dos cámaras del mismo swing. Pausa el frame, nombra el movimiento y compara el siguiente tiro para ver lo que ve el entrenador — no un tip vago de “quédate abajo.”",
      tech3t: "Putting Capto",
      tech3m: "Sensor en el putter · análisis de 30 min",
      tech3d:
        "Registra path, ángulo de face y tempo en el stroke. Yaser está certificado en Capto Putting; el análisis de putting de $75 se basa en este sensor.",
      tech4t: "Ajuste de palos",
      tech4m: "Driver · hierros · bolsa completa",
      tech4d:
        "Cabeza, shaft, loft, flex, largo, lie y grip alineados a tus números de FlightScope. Ajuste de driver $60, hierros $80, bolsa completa $160 — Memo se especializa en ajustes.",
      coachTitle: "Los entrenadores",
      coachSub:
        "Dos instructores. Una bahía. Principiantes, juniors, preparatoria, mujeres, militares y veteranos.",
      yaserRole: "Entrenador principal y fundador",
      yaserTour: "Director de tour de El Paso para U.S. Kids Golf.",
      memoRole: "Instructor y especialista en ajuste de palos",
      memoCred: "Especialista en ajuste de palos",
      brandsTitle: "En el pro shop",
      reviewsTitle: "Lo que escribieron golfistas",
      reviewsSub: "De perfectswing4u.org — aquí sin editar.",
      visitTitle: "Visita la bahía",
      visitSub: "En N Mesa en Crown Point, junto a Another Broken Egg Cafe.",
      addrLabel: "Dirección",
      directions: "Abrir en Google Maps",
      hoursLabel: "Horario",
      monFri: "Lun–Vie",
      weekend: "Sáb–Dom",
      closed: "Cerrado",
      contactLabel: "Contacto",
      bookLabel: "Reservas",
      bookBody:
        "Solo Square. Reprograma con 24 horas de aviso; si faltas sin aviso pierdes el 50%.",
      ctaTitle: "Reserva en Square. Abierto lun–vie 10am–7pm.",
      ctaCopy:
        "Llama a la bahía, o entra sin cita previa si hay entrenador libre. Trae palos — o usa los nuestros.",
      footerTag: "Academia de golf bajo techo · El Paso, TX",
      follow: "Síguenos",
      rights: "© Perfect Swing 4U Golf Academy",
    },
  };

  var yaserBio = {
    en: "Thirteen-plus years of competitive golf. On the bay he coaches full swings with FlightScope and video, Capto putting, TPI-informed movement, and club fitting.",
    es: "Más de trece años de golf competitivo. En la bahía entrena swings completos con FlightScope y video, putting Capto, movimiento con TPI y ajuste de palos.",
  };

  var memoBio = {
    en: "Memo runs fittings and private lessons. He teaches with clear talk and visualization so the change holds between sessions — beginners through competitive high school players.",
    es: "Memo hace ajustes de palos y clases privadas. Enseña con conversación clara y visualización para que el cambio se quede entre sesiones — desde principiantes hasta jugadores competitivos de preparatoria.",
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
