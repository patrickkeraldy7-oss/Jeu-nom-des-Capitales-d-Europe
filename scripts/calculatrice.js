let valeur = 0;
let total = 0;

function annule() {
    const nombre = document.getElementById('nombre');
    const affichage = document.getElementById('boxTotal');

    nombre.value = "";
    affichage.textContent = "";
    total = 0;
}

function boutonAddition() {
        
        valeur = 1;
        nombre.value = "";
        nombre.focus();

}

function boutonMultiplication() {

        valeur = 2;
        nombre.value = "";
        nombre.focus();
}

function boutonSoustraction() {

        valeur = 3;
        nombre.value = "";
        nombre.focus();
}

function boutonDivision() {

        valeur = 4;
        nombre.value = "";
        nombre.focus();
}

function boutonPourcentage() {

        valeur = 5;
        nombre.value = "";
        nombre.focus();
}

function additions(a) {
    const affichagePrix = document.getElementById('boxTotal');

    total += Number(a);
    affichagePrix.textContent = total;
    affichagePrix.value = "";
    console.log(total)

}

function multiplication(a) {
    const affichage = document.getElementById('boxTotal');

    if (total > 0) {
        total = total * a;
        affichage.textContent = total;
       nombre.value = "";
        console.log(total);
    }
    
}

function soustraction(a) {
    const nombreMoins = Number(a);
    const affichage = document.getElementById('boxTotal');

    if(total == 0){
        total = nombreMoins;
        affichage.textContent = total;
    }else if(total > 0){
        total -= nombreMoins;
        affichage.textContent = total;
        
    }
}

function division(a, b) {
    const affichage = document.getElementById('boxTotal');
    total = a / b;
    affichage.textContent = total;
}

function poucentage(a, b) {
    const affichage = document.getElementById('boxTotal');

    let pourcent = (a / 100) * b;
    total = Number(a) + pourcent;

    affichage.textContent = total;
    nombre.value = "";

}

function tva(a, b) {
    
}

function validation() {
    const nombre = document.getElementById('nombre');
    const addition = document.getElementById('Addition') + nombre;

    let i = nombre.value;
    
    if (valeur === 1) {
        additions(i);
        nombre.value = "";
        nombre.focus();
    }else if(valeur === 2 && total > 0){
        nombre.value = "";
        multiplication(i);
        nombre.value = "";
        nombre.focus();
    }else if(valeur === 2 && total === 0){
        total = nombre.value;
        nombre.value = "";
        nombre.focus();
    }else if(valeur === 3){
        soustraction(i);
        nombre.value = "";
        nombre.focus();
    }else if(valeur == 3 && total == 0){
        total = nombre.value;
        nombre.value = "";
        nombre.focus();
    }else if(valeur == 3 && total > 0){
        const a = total;
        const b = nombre.value;
        division(a, b);
        nombre.value = "";
        nombre.focus();
    }else if(valeur == 4 && total == 0){
        total = nombre.value;
        nombre.value = "";
        nombre.focus();
    }else if(valeur == 4 && total > 0){
        const a = total;
        const b = nombre.value;

        division(a, b);
        nombre.value = "";
        nombre.focus();

    }else if(valeur == 5 && total == 0){
        total = nombre.value;
        nombre.value = "";
        nombre.focus();
    }else if(valeur == 5 && total > 0){
        const b = nombre.value;
        poucentage(total, b);
        nombre.value = "";
        nombre.focus();
    }

}

const listArticles = [
    {"titre": "Légumes divers ", "prix": 2.5, "poids": 1, "ref": 123},
    {"titre": "Oignon  ", "prix": 1.99, "poids": 1, "ref": 456},
    {"titre": "Ails ", "prix": 2.10, "poids": 1, "ref": 789},
    {"titre": "Tomates ", "prix": 2.4, "poids": 1, "ref": 101112}
];

const listTva = [
    {"tva": 8.5, "tvaId": 0}
];

let prixArticles = {
    legumeDivers: 2.5,
    oignon: 1.99,
    ails: 2.10,
    tomates: 2.4

}

const prixTotal = [
    {"id": 0, "prix": 0}
]

function createStore() {
    let prixArticle = null;
    
    return {
        Set: (v) => { prixArticle = v; },
        get: () => prixArticle
    };
}

const store = createStore();


function createStoreTva() {
    let TvaArticle = null;
    
    return {
        Set: (v) => { TvaArticle = v; },
        get: () => TvaArticle
    };
}

const panier = [ {"prixDesArticles":"Dans ce panier", "prix": 0, "ref": 0}];
let totalPrix = [];

const storeTva = createStoreTva();

function panierArticle(article, tvaArticle) {
    let i = 1;
    const legumeDivers = document.getElementById('legumeDivers');
    const quantite = document.getElementById('poids');
    let prixTotalArticle = 0; 
    let TVA = 0;
    calculPrixHT(TVA, prixTotalArticle, tvaArticle, article)
}

function calculPrixHT(TVA, prixTotalArticle, tvaArticle, article) {

        TVA = (tvaArticle / 100) * listTva[0].tva;
        storeTva.Set(TVA);
       
        prixTotalArticle = prixTotalArticle + tvaArticle + TVA;
        store.Set(prixTotalArticle);

        const affichageProduits = document.getElementById('description-produits');
        const p = document.createElement('p');

        const spanQuantite = document.createElement('span');
        spanQuantite.id = "affichageQuantite";
        spanQuantite.textContent = " Quantité : " + listArticles[0].poids + " Kg ";

        const spanPrix = document.createElement('span');
        spanPrix.id = "affichagePrix";
        spanPrix.textContent = "Total : " + store.get() + "€ "; 

        const spanTVA = document.createElement('span');
        spanTVA.id = "affichageTva";
        spanTVA.textContent = " TVA : " + TVA + "€ ";  

        p.id = `"${listArticles[0].legumeDivers}"`;
        p.textContent = article;
         
        p.append(spanQuantite, spanTVA, spanPrix);

        const boutonSupprime = document.createElement("button");
        boutonSupprime.textContent = "Supprimer";
        boutonSupprime.id = '"${i}"';
        p.append(boutonSupprime);
        
        affichageProduits.appendChild(p);

        boutonSupprime.addEventListener('click', () => {
           prixTotalArticle = store.get() - listArticles[0].prix - storeTva.get();
           
           store.Set(prixTotalArticle)

           affichageProduits.removeChild(p);
           prixTotal.splice(index, 1);
          
        });
    
}

function affichePanier(lePrix, ref) {
    let i = panier.length - 1;
    let v = lePrix;
    let tva = (lePrix * listTva[0].tva) / 100;

    calcul(lePrix)
    laTva(ref)

    const affichageProduits = document.getElementById('description-produits');
    const p = document.createElement('p');
        p.textContent = panier[i].article + " " 

        const spanQuantite = document.createElement('span');
        spanQuantite.id = "affichageQuantite";
        spanQuantite.textContent = " Quantité : " + "1" + " Kg ";

        const spanPrix = document.createElement('span');
        spanPrix.id = `"${ref}"`;
        spanPrix.textContent = "prix ht : " + lePrix + "€ "; 

        const spanTVA = document.createElement('span');
        spanTVA.id = "affichageTva";
        spanTVA.textContent = " TVA : " + tva.toFixed(2) + "€ ";  
         
        p.append(spanQuantite, spanTVA, spanPrix);

        affichageProduits.appendChild(p);
        const boutonSupprime = document.createElement("button");

        boutonSupprime.textContent = "Supprimer";
        
        p.append(boutonSupprime);
        
        affichageProduits.appendChild(p);

        boutonSupprime.addEventListener('click', () => {
           affichageProduits.removeChild(p);
          supprimerParPrix(panier, ref)      
          suppTva(ref)
        });
}

function laTva(leprix) {
    const afficheTva = document.getElementById('afficheTva');
    const total = document.getElementById('boxTotal');

    let element = 0;
    let TotalTva = 0;

    for (let i = 0; i < panier.length; i++) {
        if (panier.length > 0) {
            element += panier[i].prix 
            TotalTva = (element * listTva[0].tva) / 100
            afficheTva.textContent = TotalTva.toFixed(2)
            
        }
       
    }
     
}

function suppTva(tva) {
   const afficheTva = document.getElementById('afficheTva');
    let element = 0;
    let TotalTva = 0;
    let moinsTva = 0;

    for (let i = 0; i < panier.length; i++) {
        if (panier.length > 0) {
            element += panier[i].prix 
            TotalTva = (element * listTva[0].tva) / 100
            moinsTva = TotalTva - tva
            afficheTva.textContent = TotalTva.toFixed(2)
        }
       
    }
     
}
function supprimerParPrix(tab, prix) {
    const total = document.getElementById('boxTotal');

    const index = tab.findIndex(item => item.prix === prix);
    if (index !== -1) {
        tab.splice(index, 1);
        calcul()
    
    }
}

function legumes() {

    panier.push({"article": listArticles[0].titre, "prix": listArticles[0].prix, "ref": listArticles[0].ref});
    totalPrix.push({"prix":listArticles[0].prix})

    affichePanier(listArticles[0].prix, listArticles[0].prix);
   

}

function boutonOignon() {

    panier.push({"article": listArticles[1].titre, "prix": listArticles[1].prix, "ref": listArticles[1].ref});
    totalPrix.push({"prix":listArticles[1].prix})

    affichePanier(listArticles[1].prix, listArticles[1].prix);
   

}

function boutonAil() {
    
    panier.push({"article": listArticles[2].titre, "prix": listArticles[2].prix, "ref": listArticles[2].ref});
    totalPrix.push({"prix":listArticles[2].prix})
    affichePanier(listArticles[2].prix, listArticles[2].prix);

}

function boutonTomates() {
    panier.push({"article": listArticles[3].titre, "prix": listArticles[3].prix, "ref": listArticles[3].ref});
    totalPrix.push({"prix":listArticles[3].prix, "ref": listArticles[1].ref})

    affichePanier(listArticles[3].prix, listArticles[3].prix);

}

let articleSupprime = 0;
let prixIndex = 0;

function calcul(leprix) {
    const total = document.getElementById('boxTotal');
    let prix = 0;
    let tva = 0;
    let i = 0;

 while (i < panier.length) {
        tva += (panier[i].prix * listTva[0].tva) / 100
        prix += panier[i].prix + tva
         total.textContent = prix.toFixed(2)
         articleSupprime = prix.toFixed(2)
         i++
    }
 

}
