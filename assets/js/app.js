// Scroll to top
const scrollToTop = document.querySelector('.scroll-to-top'); // Sélectionne un élément avec la classe "scroll-to-top"

window.addEventListener('scroll', () => { // Ajoute un écouteur d'événements pour détecter le défilement de la fenêtre
    if (window.scrollY > 300) { // Si la position verticale du défilement est supérieure à 300 pixels
        scrollToTop.style.display = "grid"; // Affiche l'élément "scroll-to-top"
    } else {
        scrollToTop.style.display = "none"; // Sinon, masque l'élément "scroll-to-top"
    }
});

// Slider
var swiper = new Swiper(".mySwiper", { // Crée un slider (carrousel) avec la classe "mySwiper"
    spaceBetween: 24, // Espace entre les diapositives
    speed: 1000, // Vitesse de transition entre les diapositives (en millisecondes)
    pagination: { // Paramètres de la pagination
      el: ".swiper-pagination", // Élément où afficher la pagination
      clickable: true, // Permet de cliquer sur les points pour naviguer
    },

    breakpoints: { // Définit le nombre de diapositives à afficher en fonction de la largeur de la fenêtre
        0: {
            slidesPerView: 1, // 1 diapositive à la fois sur les écrans étroits (largeur < 768 pixels)
        },
        768: {
            slidesPerView: 2, // 2 diapositives à la fois sur les écrans moyens (largeur ≥ 768 pixels)
        },
        1024: {
            slidesPerView: 2, // 2 diapositives à la fois sur les écrans larges (largeur ≥ 1024 pixels)
        }
    }
});

// Aos
AOS.init({ // Initialise la bibliothèque AOS pour ajouter des animations lors du défilement
    duration: 1000, // Durée de l'animation en millisecondes
    easing: "ease-in-out", // Type d'animation (ici, progressif)
});




 // Afficher la bannière promotionnelle
 document.getElementById("promotionBanner").style.display = "block";

 // Date de fin de la promotion (modifiable selon vos besoins)
 const promotionEndDate = new Date("2023-10-15 23:59:59").getTime();

 // Fonction pour mettre à jour le compteur
 function updateCountdown() {
     const now = new Date().getTime();
     const timeLeft = promotionEndDate - now;

     if (timeLeft > 0) {
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

         document.getElementById("countdown").textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
     } else {
         document.getElementById("promotionBanner").style.display = "none";
     }
 }

 // Mettre à jour le compteur toutes les secondes
 const countdownInterval = setInterval(updateCountdown, 1000);

 // Gestionnaire d'événements pour le bouton "Fermer"
 document.getElementById("closeButton").addEventListener("click", function () {
     clearInterval(countdownInterval); // Arrêter la mise à jour du compteur
     document.getElementById("promotionBanner").style.display = "none"; // Cacher la bannière
 });

 // Appel initial pour afficher le compteur
 updateCountdown();