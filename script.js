const menuBurger = document.querySelector(".menu_burger");
const closeMenu = document.querySelector(".link");
const navLinks = document.querySelector(".nav-links");

closeMenu.addEventListener("click", () => {
  navLinks.classList.toggle("");
});

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});



// Js des filtres logo
const images = document.querySelectorAll(".logo img");
let options = {
  root: null,
  rootMargin: "-25% 0px",
  threshold: 0,
};

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.filter = "none";
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

images.forEach((image) => {
  observer.observe(image);
});

// Js de Experiences Section
const textbox = document.querySelectorAll(".timeline div");

let options2 = {
  root: null,
  rootMargin: "-25% 0px",
  threshold: 0,
};

function handleIntersect2(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}

const observer2 = new IntersectionObserver(handleIntersect2, options2);

textbox.forEach((text) => {
  observer2.observe(text);
});

// Fonction envoie de mail
function envoyerEmail() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var sujet = "Nouveau message de " + nom + prenom;
  var corps_message = "Nom: " + nom + "\n";
  corps_message += "Email: " + email + "\n\n";
  corps_message += "Message:\n" + message;

  // Créer le lien 'mailto'
  var lienMailto =
    "mailto:decodtscloe@gmail.com" +
    "?subject=" +
    encodeURIComponent(sujet) +
    "&body=" +
    encodeURIComponent(corps_message);

  // Ouvrir le client de messagerie par défaut
  window.location.href = lienMailto;
}
