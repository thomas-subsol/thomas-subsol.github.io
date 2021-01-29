/* VARIABLES */
let responsiveIcon = document.getElementById("icone");
let responsiveMenu = document.getElementById("menu");
let responsiveInterface = document.getElementById("masque");
let responsiveLinks = document.getElementsByClassName("lien");

/* LISTENERS */
responsiveIcon.addEventListener("click", toggleResponsiveMenu);
responsiveInterface.addEventListener("click", toggleResponsiveMenu);
for (let i = 0; i < responsiveLinks.length; i++) {
    responsiveLinks[i].addEventListener("click", toggleResponsiveMenu);
}

/* FONCTIONS */
function toggleResponsiveMenu() {
    for (let i = 0; i < responsiveLinks.length; i++) {
        responsiveLinks[i].classList.toggle("lien-anime");
    }
    responsiveIcon.classList.toggle("ouverture-icone-menu-reactif");
    responsiveMenu.classList.toggle("ouverture-liens-menu-reactif");
    responsiveInterface.classList.toggle("camouflage-menu-reactif");
}