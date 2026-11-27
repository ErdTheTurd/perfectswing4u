(function () {
  "use strict";

  var STORAGE_KEY = "ps4u-lang";

  var strings = {
    en: {
      skip: "Skip to content",
      menu: "Menu",
      navMethod: "The bay",
      navPricing: "Prices",
      navCoaches: "Coaches",
      navVisit: "Visit",
      ctaBook: "Book a lesson",
      ctaVisit: "Get directions",
      heroLead:
        "Come in off N Mesa. We cool the room, put a number on the ball, and work one change at a time until it holds up outside.",
      heroMeta: "5864 N Mesa St, Suite A · Mon–Fri 10:00–19:00 · Closed weekends",
      heatKicker: "El Paso · indoor bay",
      heatTitle: "Heat stays outside. Practice does not wait on the wind.",
      heatCopy:
        "This is a climate-controlled bay on N Mesa at Crown Point. You get a full hour with a coach — no tee time, no dust in your eyes. If you do not own clubs yet, we have some ready.",
      methodKicker: "Fig. 01 — instruments",
      methodTitle: "What we look at in a session",
      methodLead:
        "I would rather show you the shot than talk around it. Three tools. Plain labels.",
      specAName: "FlightScope",
      specAMeasure: "ball speed · launch · spin · carry",
      specABody:
        "Every ball leaves a reading. We pick the one or two numbers that explain your miss — then we change the swing to move those numbers, not the other way around.",
      specBName: "Multi-angle video",
      specBMeasure: "face-on · down-the-line",
      specBBody:
        "You watch the same angles I watch. Feel lies. The camera does not. We pause the clip, name the move, then try it again on the mat.",
      specCName: "Capto putting",
      specCMeasure: "path · face · tempo · 30 min",
      specCBody:
        "A sensor on the putter tracks the stroke. I am Capto certified — so the fix on the green is measured the same way we measure a driver.",
      phLessonTitle: "[PLACEHOLDER: photo of lesson in progress]",
      phLessonDesc:
        "Tight crop of coach and player at the mat; FlightScope screen in frame.",
      whoKicker: "Who walks in",
      whoTitle:
        "Beginners through competitive. Juniors, high school, women, military, veterans.",
      whoLead:
        "Walk in when a coach is free. Call ahead if you can — we keep the bay honest.",
      who1t: "First time holding a club",
      who1d: "Grip, setup, a swing you can repeat. No audience on a public range.",
      who2t: "Juniors & U.S. Kids families",
      who2d:
        "Age-right coaching. I direct the El Paso U.S. Kids Golf tour — the pathway stays clear for competitive kids.",
      who3t: "High school players",
      who3d: "Ball-striking you can trust under a school-week schedule.",
      who4t: "Women & service members",
      who4d: "A quiet bay, direct feedback, no wasted half hour.",
      priceKicker: "Catalogue",
      priceTitle: "Prices. No package fine print.",
      pPrivate: "Private Lesson",
      pPrivateDesc: "FlightScope + video",
      pJunior: "Junior Lesson",
      pJuniorDesc: "Structured for young golfers",
      pHS: "High School Lesson",
      pHSDesc: "Competitive prep",
      pPut: "Putting Analysis",
      pPutDesc: "Capto sensor",
      pDriver: "Driver Fitting",
      pDriverDesc: "Head, shaft, loft to your numbers",
      pIron: "Iron Fitting",
      pIronDesc: "Flex, length, lie, grip",
      pBag: "Full Bag Fitting",
      pBagDesc: "Driver through wedges",
      session: "session",
      pBundle: "Swing + Putting Bundle",
      pBundleDesc:
        "Three 60-minute swing lessons and two 30-minute Capto putting sessions. Five visits. One plan.",
      policy:
        "Reschedule with 24 hours’ notice. No-shows forfeit 50% of the lesson fee. Booking is through Square only.",
      coachKicker: "Staff",
      coachTitle: "Two coaches. One bay.",
      yaserRole: "Head coach & founder",
      yaserTour: "El Paso tour director for U.S. Kids Golf.",
      yaserBio:
        "Yaser’s methodology covers all three pillars: physical conditioning, mental preparation, and technical skills training working together as one system. With 13+ years playing competitive golf, he dedicated his career to sharing the game — bringing swing mechanics, Capto putting mastery, TPI fitness, and club fitting expertise under one roof.",
      memoRole: "Instructor & club fitting specialist",
      memoCred: "Club fitting specialist",
      memoBio:
        "Memo’s teaching philosophy is rooted in the mental side of the game. He uses communication and visualization techniques to make improvement stick between sessions, not just on the lesson mat. His patient, step-by-step approach has produced measurable results for everyone from beginners to competitive high school athletes.",
      quoteKicker: "From players",
      quoteTitle: "What they wrote",
      quoteLead:
        "Published on perfectswing4u.org — printed here without edits.",
      shopKicker: "Pro shop",
      shopTitle: "Fit here. Buy here.",
      shopLead: "Brands on the wall — text only:",
      phBayTitle: "[PLACEHOLDER: photo of indoor bay]",
      phBayDesc: "Climate-controlled bay and fitting area.",
      visitKicker: "Location",
      visitTitle: "On N Mesa at Crown Point",
      visitLead:
        "Next to Another Broken Egg Cafe. Walk-ins welcome when a coach is free.",
      addrLabel: "Address",
      directions: "Open in Google Maps",
      contactLabel: "Contact",
      hoursLabel: "Hours",
      monFri: "Mon–Fri",
      weekend: "Sat–Sun",
      closed: "Closed",
      bookLabel: "Booking",
      bookBody:
        "Square only. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      phFrontTitle: "[PLACEHOLDER: photo of storefront]",
      phFrontDesc: "Exterior on N Mesa at Crown Point.",
      ctaTitle: "If you are ready, book the hour.",
      ctaCopy:
        "Square online, call the bay, or walk in if we are free. Bring your clubs — or use ours.",
      footerTag: "Indoor golf academy · El Paso, TX",
      follow: "Follow",
      rights: "© Perfect Swing 4U Golf Academy",
      draftNote: "Draft D · swiss studio",
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Menú",
      navMethod: "La bahía",
      navPricing: "Precios",
      navCoaches: "Entrenadores",
      navVisit: "Visítanos",
      ctaBook: "Reservar clase",
      ctaVisit: "Cómo llegar",
      heroLead:
        "Entra desde N Mesa. Enfriamos el cuarto, le ponemos número a la bola y trabajamos un cambio a la vez hasta que aguante afuera.",
      heroMeta:
        "5864 N Mesa St, Suite A · Lun–Vie 10:00–19:00 · Cerrado fines de semana",
      heatKicker: "El Paso · bahía bajo techo",
      heatTitle: "El calor se queda afuera. La práctica no espera al viento.",
      heatCopy:
        "Esta es una bahía con clima controlado en N Mesa en Crown Point. Tienes una hora completa con un entrenador — sin horario de tee, sin polvo en los ojos. Si aún no tienes palos, hay algunos listos.",
      methodKicker: "Fig. 01 — instrumentos",
      methodTitle: "Qué miramos en una sesión",
      methodLead:
        "Prefiero mostrarte el golpe a hablar alrededor. Tres herramientas. Etiquetas claras.",
      specAName: "FlightScope",
      specAMeasure: "velocidad · lanzamiento · spin · carry",
      specABody:
        "Cada bola deja una lectura. Elegimos uno o dos números que explican tu error — y cambiamos el swing para mover esos números, no al revés.",
      specBName: "Video en varios ángulos",
      specBMeasure: "de frente · línea de tiro",
      specBBody:
        "Ves los mismos ángulos que yo. La sensación miente. La cámara no. Pausamos el clip, nombramos el movimiento y lo intentamos otra vez en el tapete.",
      specCName: "Putting con Capto",
      specCMeasure: "trayectoria · cara · tempo · 30 min",
      specCBody:
        "Un sensor en el putter mide el stroke. Estoy certificado en Capto — el arreglo en el green se mide igual que un driver.",
      phLessonTitle: "[PLACEHOLDER: foto de una clase en progreso]",
      phLessonDesc:
        "Recorte cerrado de entrenador y jugador en el tapete; pantalla FlightScope en cuadro.",
      whoKicker: "Quién entra",
      whoTitle:
        "De principiantes a competitivos. Juniors, preparatoria, mujeres, militares, veteranos.",
      whoLead:
        "Entra cuando haya entrenador libre. Llama antes si puedes — mantenemos la bahía en orden.",
      who1t: "Primera vez con un palo",
      who1d:
        "Agarre, postura, un swing que puedas repetir. Sin público de práctica abierta.",
      who2t: "Juniors y familias U.S. Kids",
      who2d:
        "Entrenamiento acorde a la edad. Dirijo el tour de El Paso de U.S. Kids Golf — el camino queda claro para chicos competitivos.",
      who3t: "Jugadores de preparatoria",
      who3d: "Golpeo confiable dentro de una semana escolar.",
      who4t: "Mujeres y servicio militar",
      who4d: "Una bahía tranquila, comentarios directos, sin media hora perdida.",
      priceKicker: "Catálogo",
      priceTitle: "Precios. Sin letra chica de paquetes.",
      pPrivate: "Clase privada",
      pPrivateDesc: "FlightScope + video",
      pJunior: "Clase junior",
      pJuniorDesc: "Estructurada para golfistas jóvenes",
      pHS: "Clase de preparatoria",
      pHSDesc: "Preparación competitiva",
      pPut: "Análisis de putting",
      pPutDesc: "Sensor Capto",
      pDriver: "Ajuste de driver",
      pDriverDesc: "Cabeza, shaft y loft según tus números",
      pIron: "Ajuste de hierros",
      pIronDesc: "Flex, largo, lie, grip",
      pBag: "Ajuste de bolsa completa",
      pBagDesc: "Del driver a los wedges",
      session: "sesión",
      pBundle: "Paquete swing + putting",
      pBundleDesc:
        "Tres clases de swing de 60 minutos y dos sesiones de putting Capto de 30 minutos. Cinco visitas. Un plan.",
      policy:
        "Reprograma con 24 horas de aviso. Si no te presentas, pierdes el 50% de la clase. La reserva es solo por Square.",
      coachKicker: "Equipo",
      coachTitle: "Dos entrenadores. Una bahía.",
      yaserRole: "Entrenador principal y fundador",
      yaserTour: "Director de torneo de El Paso para U.S. Kids Golf.",
      yaserBio:
        "La metodología de Yaser cubre tres pilares: condición física, preparación mental y técnica, trabajando juntos como un solo sistema. Con más de 13 años de golf competitivo, dedicó su carrera a compartir el juego — mecánica de swing, putting Capto, acondicionamiento TPI y ajuste de palos bajo un mismo techo.",
      memoRole: "Instructor y especialista en ajuste de palos",
      memoCred: "Especialista en ajuste de palos",
      memoBio:
        "La filosofía de Memo se centra en el lado mental del juego. Usa comunicación y visualización para que la mejora se quede entre sesiones, no solo en el tapete. Su enfoque paciente y paso a paso ha dado resultados medibles desde principiantes hasta atletas de preparatoria.",
      quoteKicker: "De los jugadores",
      quoteTitle: "Lo que escribieron",
      quoteLead:
        "Publicado en perfectswing4u.org — impreso aquí sin cambios.",
      shopKicker: "Tienda",
      shopTitle: "Se ajusta aquí. Se compra aquí.",
      shopLead: "Marcas en la pared — solo texto:",
      phBayTitle: "[PLACEHOLDER: foto de la bahía bajo techo]",
      phBayDesc: "Bahía con clima controlado y área de ajuste.",
      visitKicker: "Ubicación",
      visitTitle: "En N Mesa en Crown Point",
      visitLead:
        "Junto a Another Broken Egg Cafe. Visitas sin cita bienvenidas si hay entrenador libre.",
      addrLabel: "Dirección",
      directions: "Abrir en Google Maps",
      contactLabel: "Contacto",
      hoursLabel: "Horario",
      monFri: "Lun–Vie",
      weekend: "Sáb–Dom",
      closed: "Cerrado",
      bookLabel: "Reservas",
      bookBody:
        "Solo Square. Reprograma con 24 horas de aviso; si no te presentas, pierdes el 50%.",
      phFrontTitle: "[PLACEHOLDER: foto de la fachada]",
      phFrontDesc: "Exterior en N Mesa en Crown Point.",
      ctaTitle: "Si estás listo, reserva la hora.",
      ctaCopy:
        "Square en línea, llama a la bahía o entra si estamos libres. Trae tus palos — o usa los nuestros.",
      footerTag: "Academia de golf bajo techo · El Paso, TX",
      follow: "Síguenos",
      rights: "© Perfect Swing 4U Golf Academy",
      draftNote: "Borrador D · swiss studio",
    },
  };

  function applyLang(lang) {
    if (!strings[lang]) return;
    document.documentElement.lang = lang === "es" ? "es" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (strings[lang][key] != null) el.textContent = strings[lang][key];
    });

    var enBtn = document.getElementById("lang-en");
    var esBtn = document.getElementById("lang-es");
    if (enBtn && esBtn) {
      enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
      esBtn.setAttribute("aria-pressed", lang === "es" ? "true" : "false");
    }

    var yaserBio = document.getElementById("yaser-bio");
    var memoBio = document.getElementById("memo-bio");
    if (yaserBio) yaserBio.textContent = strings[lang].yaserBio;
    if (memoBio) memoBio.textContent = strings[lang].memoBio;
  }

  function initLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    applyLang(saved === "es" || saved === "en" ? saved : "en");
  }

  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lang-en").addEventListener("click", function () {
      applyLang("en");
    });
    document.getElementById("lang-es").addEventListener("click", function () {
      applyLang("es");
    });
    initLang();
    initNav();
  });
})();
