//Toggling Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//Toggling Active Link
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 200 });
sr.reveal(".about-text", { delay: 400 });

sr.reveal(".skills-subtitle", { delay: 100 });
sr.reveal(".skills-text", { delay: 150 });
sr.reveal(".skills-data", { interval: 200 });
sr.reveal(".skills-img", { delay: 400 });

sr.reveal(".work-img", { interval: 200 });

sr.reveal(".contact-input", { interval: 200 });

// ===============================
// 1. Diccionario de traducciones
// ===============================
const translations = {
  es: {
    logo: "Rodolfo",
    menuHome: "Inicio",
    menuAbout: "Sobre mí",
    menuSkills: "Habilidades",
    menuWork: "Proyectos",
    menuContact: "Contacto",
    homeTitle: "Hola, <br>Yo soy <span class='home-title-color'>Rodolfo</span> Diseñador Ux Ui",
    buttonContact: "Contacto",
    aboutSubtitle: "Yo soy Rodolfo",
    aboutText: "Diseñador enfocado en crear experiencias cercanas a los usuarios además de interfaces intuitivas, basadas en el comportamiento del usuario, con el objetivo de mejorar constantemente la experiencia digital.",
    skillsSubtitle: "Habilidades Profesionales",
    skillsText: "Apasionado por el diseño centrado en el usuario, creo experiencias significativas combinando creatividad e investigación UX. Mi conocimiento en HTML, CSS y JavaScript me permite colaborar fluidamente con equipos de desarrollo para lograr soluciones intuitivas y funcionales.",
    workTitle: "Proyectos",
    contactTitle: "Contacto",
    contactText: "Si deseas contactarme, puedes hacerlo a través del siguiente formulario o enviándome un correo a",
    footerCopyright: "© 2025 Copyright Todos los derechos reservados",
  },
  en: {
    logo: "Rodolfo",
    menuHome: "Home",
    menuAbout: "About Me",
    menuSkills: "Skills",
    menuWork: "Projects",
    menuContact: "Contact",
    homeTitle: "Hello, <br>I am <span class='home-title-color'>Rodolfo</span> Ux Ui Designer",
    buttonContact: "Contact",
    aboutSubtitle: "I am Rodolfo",
    aboutText: "Designer focused on creating user-centered experiences and intuitive interfaces, based on user behavior, with the goal of constantly improving the digital experience.",
    skillsSubtitle: "Professional Skills",
    skillsText: "Passionate about user-centered design, I create meaningful experiences by combining creativity and UX research. My knowledge in HTML, CSS, and JavaScript allows me to collaborate smoothly with development teams to achieve intuitive and functional solutions.",
    workTitle: "Projects",
    contactTitle: "Contact",
    contactText: "If you want to contact me, you can do so through the following form or by sending me an email at",
    footerCopyright: "© 2025 Copyright All rights reserved"
  }
};

// ===============================
// 2. Descripciones para las modales
// ===============================
const descriptions = {
  es: [
    'Proyecto web: <a href="https://malkabian.github.io/DeltaPrueba/" target="_blank" style="color:#4fc3f7;">Ver demo</a>',
    "Proyecto 2: User persona",
    "Proyecto 3: Entrevistas de usuarios",
    "Proyecto 4: Prueba de usabilidad",
    "Proyecto 5: Login web",
    "Proyecto 6: Mapa de Empatía",
  ],
  en: [
    'Web project: <a href="https://malkabian.github.io/DeltaPrueba/" target="_blank" style="color:#4fc3f7;">View demo</a>',
    "Project 2: User persona",
    "Project 3: User interviews",
    "Project 4: Usability test",
    "Project 5: Web login",
    "Project 6: Empathy map",
  ]
};

// ===============================
// 3. Variables del modal
// ===============================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
let currentLang = localStorage.getItem("lang") || "es";
let currentIndex = null;

// ===============================
// 4. Función para cambiar idioma
// ===============================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Traducción de textos con data-lang
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Si el modal está abierto, actualizamos su descripción
  if (modal.style.display === "block" && currentIndex !== null) {
    captionText.innerHTML = descriptions[lang][currentIndex];
  }
}

// ===============================
// 5. Eventos para abrir/cerrar modal
// ===============================
const images = document.querySelectorAll(".work-img img");
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "flex"; // flex para centrar
    modalImg.src = img.src;
    captionText.innerHTML = descriptions[currentLang][index];
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  currentIndex = null;
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    currentIndex = null;
  }
};

// ===============================
// 6. Inicializar idioma al cargar
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});

// ===============================
// Switch Dark/Light Mode
// ===============================
const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
  swith.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-mode");
});
