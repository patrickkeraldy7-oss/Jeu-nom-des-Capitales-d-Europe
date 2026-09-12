
const texte = document.getElementById('recherche');
const bouton = document.getElementById('envoyer');
const divCacher = document.getElementById('div-cacher');
const fermer = document.getElementById('fermer');
const cacher = document.getElementById('cacher');

bouton.addEventListener('click', () => {
    divCacher.style.display = 'flex';
    divCacher.style.backgroundColor = 'white';
    divCacher.innerHTML += texte.value;
});

fermer.addEventListener('click', () => {
    divCacher.style.display = 'none';
});

cacher.addEventListener('click', cache);

function cache() {
    divCacher.style.display = 'none';
}

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
                <a href="#${encodeURIComponent(article.nom)}">${article.nom} (${Number(article.prix || 0).toFixed(2)} €)</a>
                <button type="button" onclick="supp(${index})">supprimer</button>
            </div>
        `)
        .join('');

    totalArticle = articlePanier.length;
    document.getElementById('compteur-panier').innerText = totalArticle;
}

function ajouterAuPanier(monPiece, articleNom, prixArticle) {
    articlePanier.push({ nom: articleNom, prix: Number(prixArticle) || 0 });
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
    const zonePieces = document.getElementById('zone-pieces');
     
    pieces.forEach(p => {
      zonePieces.innerHTML += `
        <div class="carte-pieces">
          <h3>${p.nom}</h3>
          <img src="${p.image}" class="images-pieces" title="${p.nom}">
          <p>${p.description}</p>
          <p>Prix : <strong>${p.prix}</strong></p>
          <p>Quantité : ${p.quantite} ${p.prix}</p>
          

          <button onclick="ajouterAuPanier('${p.nom}', '${p.nom}', ${p.prix})">
            Ajouter au panier
          </button>

          <hr>
        </div>
      ` ;
    });
  })
  .catch(error => console.error('Erreur lors du chargement des pièces :', error));

affichagePanier()