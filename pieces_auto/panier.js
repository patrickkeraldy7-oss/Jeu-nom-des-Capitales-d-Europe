
// Récupération des éléments HTML nécessaires pour l'affichage
const valeurPage = document.getElementById("ref-page")
const i = valeurPage.textContent

const PANIER_KEY = 'panierPieces';
let totalArticle = 0;
let articlePanier = [];

function chargerPanier() {
    try {
        const panierEnregistre = JSON.parse(localStorage.getItem(PANIER_KEY) || '[]');
        return Array.isArray(panierEnregistre) ? panierEnregistre : [];
    } catch (error) {
        return [];
    }
}

function sauvegarderPanier() {
    localStorage.setItem(PANIER_KEY, JSON.stringify(articlePanier));
}

function calculTotal() {
    return articlePanier.reduce((total, article) => total + (Number(article.prix) || 0), 0);
}

function affichagePanier() {
    const articleContainer = document.getElementById('article');
    if (!articleContainer) return;

    articleContainer.innerHTML = articlePanier
        .map((article, index) => `
            <div class="article-panier">
                <a href="${article.lien}">${article.nom} (${Number(article.prix || 0).toFixed(2)} €)</a>
                <button type="button" onclick="supp(${index})">supprimer</button>
            </div>
        `)
        .join('');

    totalArticle = articlePanier.length;
    document.getElementById('compteur-panier').innerText = totalArticle;
}

function ajouterAuPanier(pageArtcle, monPiece, articleNom, prixArticle) {
    articlePanier.push({lien: pageArtcle, nom: articleNom, prix: Number(prixArticle) || 0 });
    sauvegarderPanier();
    affichagePanier();
    alert(monPiece + ' a été ajouté au panier !');
}

function supp(index) {
    if (index >= 0 && index < articlePanier.length) {
        articlePanier.splice(index, 1);
        sauvegarderPanier();
        affichagePanier();
    }
}

articlePanier = chargerPanier();
totalArticle = articlePanier.length;

fetch('pieces.json')
  .then(reponse => reponse.json())
  .then(pieces => {
    const zonePieces = document.getElementById('pieces');

    try {
       
        if (i >= 0 && i <= pieces.length){
        zonePieces.innerHTML = `
        <div>
            <h1>${pieces[i].nom}</h1>
            <p><img src="${pieces[i].image}" alt="${pieces[i].nom}" width="250px" height="250px"></p>
            <p>${pieces[i].description}</p>
            <p>Prix: ${pieces[i].prix} €</p>
            <p><a href="${pieces[i].page}">${pieces[i].nom}</a></p>

            <button onclick="ajouterAuPanier('${pieces[i].page}', '${pieces[i].nom}', '${pieces[i].nom}', ${pieces[i].prix})">
            Ajouter au panier
          </button>
          <hr>
        </div>
        `
        
 } else {
    zonePieces.innerHTML = "<p>Aucun article à afficher.</p>";
 } 
} catch (error) {
    console.error("Erreur lors de l'affichage des articles :", error);
    zonePieces.innerHTML = "<p>Une erreur est survenue lors de l'affichage des articles.</p>";
 }
    
})
affichagePanier()