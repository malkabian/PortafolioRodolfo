// ===============================
// Toggling Menu con cierre al hacer clic fuera
// ===============================
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // evita cierre inmediato
      nav.classList.toggle("show");
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("show") &&
        !nav.contains(e.target) &&
        e.target !== toggle
      ) {
        nav.classList.remove("show");
      }
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// ===============================
// Toggling Active Link
// ===============================
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ===============================
// Scroll Reveal Animations
// ===============================
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
// Diccionario de traducciones
// ===============================
const translations = {
  es: {
    logo: "Rodolfo",
    menuHome: "Inicio",
    menuAbout: "Sobre mí",
    menuSkills: "Habilidades",
    menuWork: "Proyectos",
    menuContact: "Contacto",
    homeTitle:
      "Hola, <br>Yo soy <span class='home-title-color'>Rodolfo</span> Diseñador Ux Ui",
    buttonContact: "Contacto",
    aboutSubtitle: "Yo soy Rodolfo",
    aboutText:
      "Diseñador enfocado en crear experiencias cercanas a los usuarios además de interfaces intuitivas.",
    skillsSubtitle: "Habilidades Profesionales",
    skillsText:
      "Apasionado por el diseño centrado en el usuario, creo experiencias significativas combinando creatividad e investigación UX.",
    workTitle: "Proyectos",
    contactTitle: "Contacto",
    contactText:
      "Si deseas contactarme, puedes hacerlo a través del siguiente formulario o enviándome un correo a",
    footerCopyright: "© 2025 Todos los derechos reservados",
  },
  en: {
    logo: "Rodolfo",
    menuHome: "Home",
    menuAbout: "About Me",
    menuSkills: "Skills",
    menuWork: "Projects",
    menuContact: "Contact",
    homeTitle:
      "Hello, <br>I am <span class='home-title-color'>Rodolfo</span> Ux Ui Designer",
    buttonContact: "Contact",
    aboutSubtitle: "I am Rodolfo",
    aboutText:
      "Designer focused on creating user-centered experiences and intuitive interfaces.",
    skillsSubtitle: "Professional Skills",
    skillsText:
      "Passionate about user-centered design, I create meaningful experiences by combining creativity and UX research.",
    workTitle: "Projects",
    contactTitle: "Contact",
    contactText:
      "If you want to contact me, you can do so through the following form or by sending me an email at",
    footerCopyright: "© 2025 All rights reserved",
  },
};

// ===============================
// Descripciones para las modales
// ===============================
const descriptions = {
  es: [
    'Proyecto web: <a class="home-title-color" href="https://malkabian.github.io/DeltaPrueba/" target="_blank">Ver demo</a>',
    "Proyecto 2: User persona",
    "Proyecto 3: Entrevistas de usuarios",
    "Proyecto 4: Prueba de usabilidad",
    "Proyecto 5: Login web",
    "Proyecto 6: Mapa de Empatía",
  ],
  en: [
    'Web project: <a class="home-title-color" href="https://malkabian.github.io/DeltaPrueba/" target="_blank">View demo</a>',
    "Project 2: User persona",
    "Project 3: User interviews",
    "Project 4: Usability test",
    "Project 5: Web login",
    "Project 6: Empathy map",
  ],
};

// ===============================
// Variables del modal
// ===============================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
let currentLang = localStorage.getItem("lang") || "es";
let currentIndex = null;

// ===============================
// Función para cambiar idioma
// ===============================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      if (
        el.tagName.toLowerCase() === "input" ||
        el.tagName.toLowerCase() === "textarea"
      ) {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  if (modal.style.display === "block" && currentIndex !== null) {
    captionText.innerHTML = descriptions[lang][currentIndex];
  }
}

// ===============================
// Eventos para abrir/cerrar modal
// ===============================
const images = document.querySelectorAll(".work-img img");
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "flex";
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
// Inicializar idioma al cargar
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});

// ===============================
// Switch Dark/Light Mode
// ===============================
const swith = document.querySelector(".switch");

swith.addEventListener("click", () => {
  swith.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-mode");
});
