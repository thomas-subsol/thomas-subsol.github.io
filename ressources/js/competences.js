/* VARIABLES */
const niveaux = document.getElementsByClassName("valeur-niveau");

/* LISTENERS */
let observateur = new IntersectionObserver(demarrerAnimation);
for (let niveau of niveaux) {
    observateur.observe(niveau);
}

/* FONCTIONS */
function demarrerAnimation(entrees) {
    for (let entree of entrees) {
        if (entree.isIntersecting === true) {
            entree.target.style.animationPlayState = "running";
        }
    }
}