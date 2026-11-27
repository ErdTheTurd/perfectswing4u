(function () {
  "use strict";

  var STORAGE_KEY = "ps4u-lang";

  var strings = {
    en: {
      skip: "Skip to content",
      brandTag: "El Paso · Indoor Academy",
      navMethod: "How we coach",
      navPricing: "Lessons & fittings",
      navCoaches: "Coaches",
      navVisit: "Visit",
      ctaBook: "Book a lesson",
      ctaVisit: "Find the bay",
      menu: "Menu",
      heroLead:
        "Indoor coaching on N Mesa — cool air, FlightScope numbers, and coaches who stay with your swing until it holds up on the course.",
      heroMeta: "5864 N Mesa St, Suite A · Mon–Fri 10am–7pm",
      heatEyebrow: "El Paso heat, optional",
      heatTitle: "When the Franklin Mountains bake, the bay stays cool.",
      heatCopy:
        "Summer wind and triple-digit afternoons do not own your practice. Step into a climate-controlled indoor bay, work a full hour with your coach, and leave with drills that still make sense the next time you play.",
      heatStat: "Year-round",
      heatStatLabel: "No tee times · No weather delays",
      methodEyebrow: "How a session works",
      methodTitle: "Data you can read. Coaching you can feel.",
      methodLede:
        "We keep the tech useful — plain numbers and clear video, not a wall of jargon.",
      m1Title: "FlightScope, shot by shot",
      m1Copy:
        "Ball speed, launch, spin, and carry show up in real time. Your coach picks the one or two changes that move the needle for your swing — not a twenty-item checklist.",
      m2Title: "Multi-angle video",
      m2Copy:
        "You see what the coach sees: face-on and down-the-line. Blind spots shrink when you watch your own motion instead of guessing from feel alone.",
      m3Title: "Capto putting, explained simply",
      m3Copy:
        "A small sensor on the putter tracks path, face angle, and tempo. Coach Yaser is Capto certified — so green-side work is measured, not guessed.",
      whoEyebrow: "Who trains here",
      whoTitle: "Beginners, juniors, high schoolers, women, military & veterans.",
      whoLede:
        "Walk-ins are welcome when a coach is free. Clubs are on hand if you do not have a set yet.",
      a1Title: "First-timers",
      a1Copy:
        "Never held a club? We start with grip, setup, and a swing you can repeat — indoors, without the range crowd watching.",
      a2Title: "Juniors & U.S. Kids families",
      a2Copy:
        "Patient, age-right coaching. Yaser is the El Paso tour director for U.S. Kids Golf, so junior pathways stay clear for competitive families.",
      a3Title: "High school players",
      a3Copy:
        "Ball-striking consistency, short-game discipline, and practice plans that fit a school-week schedule.",
      a4Title: "Women & service members",
      a4Copy:
        "A respectful bay for women golfers and for military and veterans who want honest feedback and efficient sessions.",
      priceEyebrow: "Lessons & fittings",
      priceTitle: "Clear prices. Full hour. One coach.",
      priceLede:
        "Book through Square. Reschedule with 24 hours’ notice; no-shows forfeit 50%.",
      pPrivate: "Private Lesson",
      pPrivateDesc: "60 minutes · FlightScope & video",
      pJunior: "Junior Lesson",
      pJuniorDesc: "60 minutes · ages through junior golf",
      pHS: "High School Lesson",
      pHSDesc: "60 minutes · competitive prep",
      pPut: "Putting Analysis",
      pPutDesc: "30 minutes · Capto sensor",
      pDriver: "Driver Fitting",
      pDriverDesc: "Head, shaft, loft matched to your numbers",
      pIron: "Iron Fitting",
      pIronDesc: "Flex, length, lie, grip",
      pBag: "Full Bag Fitting",
      pBagDesc: "Driver through wedges",
      pBundle: "Swing + Putting Bundle",
      pBundleDesc:
        "Three 60-minute swing lessons plus two 30-minute Capto putting sessions — five visits, one clear plan.",
      coachEyebrow: "The coaches",
      coachTitle: "Two coaches. One bay. No conveyor-belt lessons.",
      yaserRole: "Head coach & founder",
      yaserTour: "El Paso tour director for U.S. Kids Golf.",
      yaserBio:
        "Yaser’s methodology covers all three pillars: physical conditioning, mental preparation, and technical skills training working together as one system. With 13+ years playing competitive golf, he dedicated his career to sharing the game — bringing swing mechanics, Capto putting mastery, TPI fitness, and club fitting expertise under one roof.",
      memoRole: "Instructor & club fitting specialist",
      memoCred: "Club fitting specialist",
      memoBio:
        "Memo’s teaching philosophy is rooted in the mental side of the game. He uses communication and visualization techniques to make improvement stick between sessions, not just on the lesson mat. His patient, step-by-step approach has produced measurable results for everyone from beginners to competitive high school athletes.",
      quoteEyebrow: "From the bay",
      quoteTitle: "What El Paso golfers say",
      quoteLede:
        "Quotes published on perfectswing4u.org — used here without edits.",
      shopEyebrow: "Pro shop",
      shopTitle: "Gear that matches the data from your session.",
      shopLede:
        "Fittings and retail under the same roof. Brands we carry — text only, as approved:",
      phLessonTitle: "[PLACEHOLDER: photo of lesson in progress]",
      phLessonDesc:
        "Tight crop: coach and golfer at the mat, FlightScope screen soft in the background.",
      phBayTitle: "[PLACEHOLDER: photo of indoor bay]",
      phBayDesc:
        "Tight crop of the climate-controlled bay and fitting area — replace when approved photography lands.",
      visitEyebrow: "Visit",
      visitTitle: "On N Mesa at Crown Point",
      visitLede:
        "Next to Another Broken Egg Cafe. Easy parking. Walk-ins welcome when a coach is free.",
      addrLabel: "Address",
      directions: "Open in Google Maps",
      contactLabel: "Contact",
      hoursLabel: "Hours",
      monFri: "Mon–Fri",
      weekend: "Sat–Sun",
      closed: "Closed",
      policy:
        "Reschedule with 24 hours’ notice. No-shows forfeit 50% of the lesson fee.",
      phFrontTitle: "[PLACEHOLDER: photo of storefront]",
      phFrontDesc:
        "Exterior on N Mesa at Crown Point, next to Another Broken Egg Cafe.",
      ctaTitle: "Ready when you are.",
      ctaCopy:
        "Book on Square, call the bay, or walk in if a coach is free. Bring clubs if you have them — we have loaners if you do not.",
      footerTag: "Indoor golf academy · El Paso, TX",
      follow: "Follow",
      rights: "© Perfect Swing 4U Golf Academy. All rights reserved.",
      draftNote: "Draft B · desert light",
    },
    es: {
      skip: "Saltar al contenido",
      brandTag: "El Paso · Academia indoor",
      navMethod: "Cómo entrenamos",
      navPricing: "Clases y fittings",
      navCoaches: "Coaches",
      navVisit: "Visítanos",
      ctaBook: "Reservar clase",
      ctaVisit: "Cómo llegar",
      menu: "Menú",
      heroLead:
        "Entrenamiento indoor en N Mesa: aire fresco, números de FlightScope y coaches que trabajan tu swing hasta que aguante en el campo.",
      heroMeta: "5864 N Mesa St, Suite A · Lun–Vie 10am–7pm",
      heatEyebrow: "El calor de El Paso, opcional",
      heatTitle: "Cuando los Franklin Mountains queman, la bahía se queda fresca.",
      heatCopy:
        "El viento de verano y las tardes de más de 100°F no mandan en tu práctica. Entra a una bahía indoor con clima controlado, trabaja una hora completa con tu coach y sal con drills que siguen teniendo sentido la próxima vez que juegues.",
      heatStat: "Todo el año",
      heatStatLabel: "Sin tee times · Sin cancelaciones por clima",
      methodEyebrow: "Cómo es una sesión",
      methodTitle: "Datos que se entienden. Coaching que se siente.",
      methodLede:
        "Usamos la tecnología para ayudar, no para abrumar: números claros y video limpio.",
      m1Title: "FlightScope, golpe a golpe",
      m1Copy:
        "Velocidad de bola, lanzamiento, spin y carry aparecen en tiempo real. Tu coach elige uno o dos cambios que de verdad mueven la aguja — no una lista de veinte puntos.",
      m2Title: "Video en varios ángulos",
      m2Copy:
        "Ves lo que ve el coach: de frente y down-the-line. Los puntos ciegos se reducen cuando miras tu propio movimiento en lugar de adivinar solo por sensación.",
      m3Title: "Putting con Capto, en palabras simples",
      m3Copy:
        "Un sensor pequeño en el putter mide path, cara y tempo. El coach Yaser está certificado en Capto: el trabajo en green se mide, no se adivina.",
      whoEyebrow: "Quién entrena aquí",
      whoTitle:
        "Principiantes, juniors, preparatoria, mujeres, militares y veteranos.",
      whoLede:
        "Aceptamos walk-ins cuando hay coach disponible. Hay palos si aún no traes tu set.",
      a1Title: "Principiantes",
      a1Copy:
        "¿Nunca tomaste un palo? Empezamos con grip, setup y un swing que puedas repetir — indoor, sin la presión de la driving range.",
      a2Title: "Juniors y familias U.S. Kids",
      a2Copy:
        "Coaching paciente y acorde a la edad. Yaser es el tour director de El Paso para U.S. Kids Golf, así que el camino junior queda claro para familias competitivas.",
      a3Title: "Jugadores de preparatoria",
      a3Copy:
        "Consistencia en el golpeo, juego corto disciplinado y planes de práctica que caben en la semana escolar.",
      a4Title: "Mujeres y servicio militar",
      a4Copy:
        "Una bahía respetuosa para golfistas y para militares y veteranos que buscan feedback honesto y sesiones eficientes.",
      priceEyebrow: "Clases y fittings",
      priceTitle: "Precios claros. Hora completa. Un coach.",
      priceLede:
        "Reserva por Square. Reprograma con 24 horas de aviso; si no te presentas, se pierde el 50%.",
      pPrivate: "Clase privada",
      pPrivateDesc: "60 minutos · FlightScope y video",
      pJunior: "Clase junior",
      pJuniorDesc: "60 minutos · golf junior",
      pHS: "Clase de preparatoria",
      pHSDesc: "60 minutos · preparación competitiva",
      pPut: "Análisis de putting",
      pPutDesc: "30 minutos · sensor Capto",
      pDriver: "Fitting de driver",
      pDriverDesc: "Cabeza, shaft y loft según tus números",
      pIron: "Fitting de hierros",
      pIronDesc: "Flex, largo, lie y grip",
      pBag: "Fitting de bolsa completa",
      pBagDesc: "Del driver a los wedges",
      pBundle: "Paquete swing + putting",
      pBundleDesc:
        "Tres clases de swing de 60 minutos más dos sesiones de putting Capto de 30 minutos: cinco visitas, un plan claro.",
      coachEyebrow: "Los coaches",
      coachTitle: "Dos coaches. Una bahía. Sin clases de línea de ensamble.",
      yaserRole: "Head coach y fundador",
      yaserTour: "Tour director de El Paso para U.S. Kids Golf.",
      yaserBio:
        "La metodología de Yaser cubre tres pilares: condición física, preparación mental y técnica, trabajando juntos como un solo sistema. Con más de 13 años de golf competitivo, dedicó su carrera a compartir el juego — mecánica de swing, putting Capto, fitness TPI y fitting de palos bajo un mismo techo.",
      memoRole: "Instructor y especialista en club fitting",
      memoCred: "Especialista en club fitting",
      memoBio:
        "La filosofía de Memo se centra en el lado mental del juego. Usa comunicación y visualización para que la mejora se quede entre sesiones, no solo en el mat. Su enfoque paciente y paso a paso ha dado resultados medibles desde principiantes hasta atletas de preparatoria.",
      quoteEyebrow: "Desde la bahía",
      quoteTitle: "Lo que dicen los golfistas de El Paso",
      quoteLede:
        "Citas publicadas en perfectswing4u.org — usadas aquí sin cambios.",
      shopEyebrow: "Pro shop",
      shopTitle: "Equipo alineado con los datos de tu sesión.",
      shopLede:
        "Fittings y venta bajo el mismo techo. Marcas que manejamos — solo texto, según lo aprobado:",
      phLessonTitle: "[PLACEHOLDER: foto de una clase en progreso]",
      phLessonDesc:
        "Recorte cerrado: coach y golfista en el mat, pantalla FlightScope suave al fondo.",
      phBayTitle: "[PLACEHOLDER: foto de la bahía indoor]",
      phBayDesc:
        "Recorte cerrado de la bahía con clima controlado y el área de fitting — reemplazar cuando haya fotos aprobadas.",
      visitEyebrow: "Visítanos",
      visitTitle: "En N Mesa en Crown Point",
      visitLede:
        "Junto a Another Broken Egg Cafe. Estacionamiento fácil. Walk-ins bienvenidos si hay coach libre.",
      addrLabel: "Dirección",
      directions: "Abrir en Google Maps",
      contactLabel: "Contacto",
      hoursLabel: "Horario",
      monFri: "Lun–Vie",
      weekend: "Sáb–Dom",
      closed: "Cerrado",
      policy:
        "Reprograma con 24 horas de aviso. Si no te presentas, pierdes el 50% de la clase.",
      phFrontTitle: "[PLACEHOLDER: foto de la fachada]",
      phFrontDesc:
        "Exterior en N Mesa en Crown Point, junto a Another Broken Egg Cafe.",
      ctaTitle: "Cuando tú estés listo.",
      ctaCopy:
        "Reserva en Square, llama a la bahía o entra si hay coach disponible. Trae tus palos si los tienes; si no, tenemos prestados.",
      footerTag: "Academia de golf indoor · El Paso, TX",
      follow: "Síguenos",
      rights: "© Perfect Swing 4U Golf Academy. Todos los derechos reservados.",
      draftNote: "Borrador B · desert light",
    },
  };

  var currentLang = "en";

  function applyLang(lang) {
    if (!strings[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang === "es" ? "es" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (strings[lang][key] != null) {
        el.textContent = strings[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (strings[lang][key] != null) {
        el.innerHTML = strings[lang][key];
      }
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
    if (saved === "es" || saved === "en") {
      applyLang(saved);
      return;
    }
    applyLang("en");
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

  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(function (n) {
        n.classList.add("is-in");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-in");
      });
      return;
    }

    document.documentElement.classList.add("js-reveal");

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach(function (n) {
      io.observe(n);
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
    initReveal();
  });
})();
