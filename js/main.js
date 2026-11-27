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
      heroTitle: "Indoor coaching on N Mesa.",
      heroLead:
        "Climate-controlled bay. FlightScope numbers. Multi-angle video. Capto putting. Lessons and fittings with Yaser Garcia and Memo Vega — for beginners through competitive players.",
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
      techSub: "Explained in plain words — so you know what you are looking at.",
      tech1t: "FlightScope",
      tech1d:
        "Launch monitor readings for every shot: ball speed, launch angle, spin, and carry. Your coach uses the numbers that explain your miss.",
      tech2t: "Multi-angle video",
      tech2d:
        "Face-on and down-the-line views so you see what the coach sees. Pause, name the move, hit again.",
      tech3t: "Capto putting",
      tech3d:
        "A sensor on the putter tracks path, face angle, and tempo. Yaser is Capto Putting certified.",
      coachTitle: "The coaches",
      coachSub:
        "Two instructors. One bay. Beginners, juniors, high school players, women, military, and veterans.",
      yaserRole: "Head coach & founder",
      yaserTour: "El Paso tour director for U.S. Kids Golf.",
      memoRole: "Instructor & club fitting specialist",
      memoCred: "Club fitting specialist",
      brandsTitle: "In the pro shop",
      brandsSub: "Brands carried — text only:",
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
      phBayNote: "[PLACEHOLDER: bay photo] — exterior and bay shots pending.",
      contactLabel: "Contact",
      bookLabel: "Booking",
      bookBody:
        "Square only. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      ctaTitle: "Ready when you are.",
      ctaCopy:
        "Book on Square, call the bay, or walk in if a coach is free. Bring clubs — or use ours.",
      footerTag: "Indoor golf academy · El Paso, TX",
      follow: "Follow",
      rights: "© Perfect Swing 4U Golf Academy",
      draftNote: "Draft F · refined original",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Menú",
      navAbout: "Acerca",
      navPricing: "Clases",
      navCoaches: "Coaches",
      navReviews: "Reseñas",
      navVisit: "Visita",
      ctaBook: "Reservar clase",
      ctaMap: "Cómo llegar",
      heroTitle: "Entrenamiento indoor en N Mesa.",
      heroLead:
        "Bahía con clima controlado. Números de FlightScope. Video multiángulo. Putting Capto. Clases y fittings con Yaser Garcia y Memo Vega — desde principiantes hasta jugadores competitivos.",
      heroMeta: "5864 N Mesa St, Suite A · Lun–Vie 10am–7pm · Cerrado fines de semana",
      aboutTitle: "El calor de El Paso queda afuera. Tu hora queda en el mat.",
      aboutCopy:
        "Perfect Swing 4U es una academia indoor en N Mesa en Crown Point, junto a Another Broken Egg Cafe. Clases de una hora completa, fitting de palos y pro shop — sin tee times ni demoras por clima. Walk-ins bienvenidos si hay coach libre. Hay palos si no traes set.",
      processTitle: "Cómo corre una clase",
      processSub: "Reserva en Square. Llega. Sal con una cosa clara para practicar.",
      step1t: "Reserva la hora",
      step1d:
        "Reserva en línea en Square, llama al (915) 449-3613, o entra si hay coach libre. Reprograma con 24 horas de aviso; no-shows pierden el 50%.",
      step2t: "Mide la pelota",
      step2d:
        "FlightScope registra velocidad, launch, spin y carry. El video multiángulo muestra face-on y down-the-line. Capto putting usa un sensor en el putter para path, face y tempo.",
      step3t: "Lleva el cambio afuera",
      step3d:
        "Tu coach elige uno o dos ajustes que importan para tu swing — no una lista larga. Drills que puedes repetir en el range o en el campo.",
      priceTitle: "Clases y fittings",
      priceSub: "Un coach. Sesión completa. Precios como se listan.",
      pPrivate: "Clase privada",
      pPrivateDesc: "60 min · FlightScope y video",
      pJunior: "Clase junior",
      pJuniorDesc: "60 min · golfistas jóvenes",
      pHS: "Clase high school",
      pHSDesc: "60 min · prep competitiva",
      pPut: "Análisis de putting",
      pPutDesc: "30 min · sensor Capto",
      pDriver: "Fitting de driver",
      pDriverDesc: "Cabeza, shaft y loft a tus números",
      pIron: "Fitting de hierros",
      pIronDesc: "Flex, largo, lie, grip",
      pBag: "Fitting de bolsa completa",
      pBagDesc: "Driver a wedges",
      pBundle: "Paquete swing + putting",
      pBundleDesc:
        "Tres clases de swing de 60 minutos más dos sesiones Capto de 30 minutos — cinco visitas, un plan.",
      policy:
        "Reprograma con 24 horas de aviso. No-shows pierden el 50% de la clase. Reserva solo por Square.",
      techTitle: "Las herramientas en la bahía",
      techSub: "En palabras claras — para que sepas qué estás viendo.",
      tech1t: "FlightScope",
      tech1d:
        "Lecturas del monitor de launch en cada tiro: velocidad, ángulo, spin y carry. Tu coach usa los números que explican tu miss.",
      tech2t: "Video multiángulo",
      tech2d:
        "Vistas face-on y down-the-line para que veas lo que ve el coach. Pausa, nombra el movimiento, golpea de nuevo.",
      tech3t: "Putting Capto",
      tech3d:
        "Un sensor en el putter registra path, ángulo de face y tempo. Yaser está certificado en Capto Putting.",
      coachTitle: "Los coaches",
      coachSub:
        "Dos instructores. Una bahía. Principiantes, juniors, high school, mujeres, militares y veteranos.",
      yaserRole: "Head coach y fundador",
      yaserTour: "Director de tour de El Paso para U.S. Kids Golf.",
      memoRole: "Instructor y especialista en club fitting",
      memoCred: "Especialista en club fitting",
      brandsTitle: "En el pro shop",
      brandsSub: "Marcas que manejamos — solo texto:",
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
      phBayNote: "[PLACEHOLDER: foto de bahía] — exteriores y bahía pendientes.",
      contactLabel: "Contacto",
      bookLabel: "Reservas",
      bookBody:
        "Solo Square. Reprograma con 24 horas de aviso; no-shows pierden el 50%.",
      ctaTitle: "Cuando tú quieras.",
      ctaCopy:
        "Reserva en Square, llama a la bahía, o entra si hay coach libre. Trae palos — o usa los nuestros.",
      footerTag: "Academia de golf indoor · El Paso, TX",
      follow: "Síguenos",
      rights: "© Perfect Swing 4U Golf Academy",
      draftNote: "Draft F · original refinado",
    },
  };

  var yaserBio = {
    en: "Yaser’s methodology covers all three pillars: physical conditioning, mental preparation, and technical skills training working together as one system. With 13+ years playing competitive golf, he dedicated his career to sharing the game — bringing swing mechanics, Capto putting mastery, TPI fitness, and club fitting expertise under one roof.",
    es: "La metodología de Yaser cubre los tres pilares: acondicionamiento físico, preparación mental y entrenamiento técnico trabajando juntos como un sistema. Con más de 13 años de golf competitivo, dedicó su carrera a compartir el juego — mecánica de swing, Capto putting, TPI fitness y club fitting bajo un mismo techo.",
  };

  var memoBio = {
    en: "Memo’s teaching philosophy is rooted in the mental side of the game. He uses communication and visualization techniques to make improvement stick between sessions, not just on the lesson mat. His patient, step-by-step approach has produced measurable results for everyone from beginners to competitive high school athletes.",
    es: "La filosofía de enseñanza de Memo está arraigada en el lado mental del juego. Usa técnicas de comunicación y visualización para que la mejora se quede entre sesiones, no solo en el mat. Su enfoque paciente y paso a paso ha producido resultados medibles desde principiantes hasta atletas competitivos de high school.",
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
