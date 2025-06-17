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

// modal

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

const descriptions = [
  'Proyecto web: <a href="https://malkabian.github.io/DeltaPrueba/" target="_blank" style="color:#4fc3f7;">Ver demo</a>',
  "Proyecto 2: User persona",
  "Proyecto 3: Entrevistas de usuarios",
  "Proyecto 4: Prueba de usabilidad",
  "Proyecto 5: Login web",
  "Proyecto 6: Mapa de Empatia",
];

const images = document.querySelectorAll(".work-img img");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = descriptions[index];
  });
});

// Botón cerrar (X)
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Cerrar haciendo clic fuera de la imagen
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
