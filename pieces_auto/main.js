const prix = document.getElementById('validez')

prix.addEventListener('click', ajouter())

function ajouter() {
        alert("ok")
}

// importation du tableau de pièces depuis le fichier pieces-auto.js
import * as data from "./pieces-auto.js"

// Récupération du tableau de pièces depuis le module importé 
const articles = data.tableauPieces || [];

// Récupération des éléments HTML nécessaires pour l'affichage
const valeurPage = document.getElementById("ref-page")
const i = valeurPage.textContent

const panier = [];    

// Fonction pour afficher les articles sur la page
function affichage() {
    const affichageArticles = document.getElementById('valeur')
    try {
       
        if (i >= 0 && i <= articles.length){
        affichageArticles.innerHTML = `
        <div>
            <h1>${articles[i].nom}</h1>
            <img src="${articles[i].image}" alt="${articles[i].nom}" width="250px" height="250px">
            <p>${articles[i].description}</p>
            <p>Prix: ${articles[i].prix} €</p>
            <p><button id="panier">Ajouter au panier</button></p>
        </div>
        `
        
 } else {
    affichageArticles.innerHTML = "<p>Aucun article à afficher.</p>";
 } 
} catch (error) {
    console.error("Erreur lors de l'affichage des articles :", error);
    affichageArticles.innerHTML = "<p>Une erreur est survenue lors de l'affichage des articles.</p>";
 }
}
   
affichage()

