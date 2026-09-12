
let contenu = window.tableauPieces || [];

const affichage = document.getElementById('filtre-huile');
const articleContainer = document.getElementById('article');
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

function affichagePanier() {
    if (!articleContainer) return;

    articleContainer.innerHTML = articlePanier
        .map((article, index) => `
            <div class="article-panier">
                <a href="#${encodeURIComponent(article.nom)}">${article.nom} (${Number(article.prix || 0).toFixed(2)} €)</a>
                <button type="button" onclick="supp(${index})">supprimer</button>
            </div>
        `)
        .join('');

    const compteur = document.getElementById('compteur-panier');
    if (compteur) compteur.innerText = articlePanier.length;
}

function supp(index) {
    if (index >= 0 && index < articlePanier.length) {
        articlePanier.splice(index, 1);
        sauvegarderPanier();
        affichagePanier();
    }
}

function ajouterAuPanier(nomArticle, prixArticle) {
    articlePanier.push({ nom: nomArticle, prix: Number(prixArticle) || 0 });
    sauvegarderPanier();
    affichagePanier();
    alert(nomArticle + ' a été ajouté au panier !');
}

articlePanier = chargerPanier();
totalArticle = articlePanier.length;

if (contenu.length > 0) {
    const articleChoisi = contenu[1];
    const article = `
        <div>
            <h1>${articleChoisi.nom}</h1>
            <img src="${articleChoisi.image}" width="250px" alt="${articleChoisi.nom}">
            <p>${articleChoisi.description}</p>
            <p>${articleChoisi.prix} €</p>
            <button type="button">Ajouter au panier</button>
        </div>
    `;

    if (affichage) {
        affichage.innerHTML = article;
        const bouton = affichage.querySelector('button');
        if (bouton) {
            bouton.addEventListener('click', () => {
                ajouterAuPanier(articleChoisi.nom, articleChoisi.prix);
            });
        }
    }
}

affichagePanier();