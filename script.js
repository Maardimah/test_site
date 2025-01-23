// Fonction pour le bouton "En savoir plus"
function enSavoirPlus() {
    alert("Le Complexe scolaire Yarda de Massaguet propose une éducation complète et de qualité pour tous les élèves.");
}

// Gestionnaire pour le formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message. Nous vous répondrons bientôt !");
    this.reset();
});
