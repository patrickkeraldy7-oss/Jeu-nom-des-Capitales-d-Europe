// Jeu des capitales européennes

// Liste des questions et réponses
const questions = [
    {
        "question": "Quelle est la capitale de l'Allemagne ?",
        "reponse": "Berlin"
    },
    {
        "question": "Quelle est la capitale de la France ?",
        "reponse": "Paris"
    },
    {
        "question": "Quelle est la capitale de l'Espagne ?",
        "reponse": "Madrid"
    },
    {
        "question": "Quelle est la capitale de l'Italie ?", 
        "reponse": "Rome"
    },
    {
        "question": "Quelle est la capitale de la Belgique ?",
        "reponse": "Bruxelles"
    },
    {
        "question": "Quelle est la capitale de la Suisse ?",
        "reponse": "Berne"
    },
    {
        "question": "Quelle est la capitale de la Pologne ?",
        "reponse": "Varsovie"
    },
    {
        "question": "Quelle est la capitale de la Suède ?",
        "reponse": "Stockholm"
    },
    {
        "question": "Quelle est la capitale de la Norvège ?",
        "reponse": "Oslo"
    },
    {
        "question": "Quelle est la capitale de la Finlande ?",
        "reponse": "Helsinki"
    }

]
    
// Sélection du bouton de démarrage du jeu
const boutonStart = document.getElementById("boutonStart");

// Initialisation du jeu
boutonStart.addEventListener("click", SelectionDuJeu);

// Fonction pour démarrer le jeu
function SelectionDuJeu() {
const reponseElement = document.getElementById("reponse")
const divQuestionsReponses = document.getElementById("questions-reponses")
const resultat = document.getElementById("resultat")

    divQuestionsReponses.style.display = "block";
    resultat.textContent = "";
    reponseElement.value = "";
    reponseElement.focus();
    jeu(reponseElement, divQuestionsReponses);
      
}

// Fonction principale du jeu
function jeu(reponseElement, divQuestionsReponses) {
    
   let i = 0;
   let CompteurScore = 0;
   
   const questionsElement = document.getElementById("questions")
   const resultatReponseElement = document.getElementById("resultat-reponse");
   const scoreElement = document.getElementById('score')
   const resultat = document.getElementById("resultat")

   const boutonValidez = document.getElementById("boutonValidez");

    questionsElement.textContent = questions[0].question;
   scoreElement.textContent = `Score : 0 / ${questions.length}`;

    boutonValidez.onclick = () => {
    
         const bonneReponse = reponseElement.value.trim().toLowerCase() === questions[i].reponse.toLowerCase();

         if (bonneReponse) {
                 resultatReponseElement.textContent = `Bonne réponse !`
                
             setTimeout(() => {
                resultatReponseElement.textContent = ""
            }, 1000);
            
            reponseElement.value = "";
            reponseElement.focus();
            scoreElement.textContent = `Score : ${CompteurScore += 1} / ${questions.length}`

            resultatReponseElement.style.backgroundColor = "green";
            resultatReponseElement.style.color = "white";
            
        }else {
            
            reponseElement.value = "";
            reponseElement.focus();
            resultatReponseElement.style.backgroundColor = "red";
            resultatReponseElement.style.color = "white";
            resultatReponseElement.textContent = `Mauvaise réponse ! La bonne réponse était : ${questions[i].reponse}`;
            setTimeout(() => {
                resultatReponseElement.textContent = "";
            }, 1000);

        }

        if (i >= questions.length - 1) {
            const scoreFinal = CompteurScore;
            reponseElement.value = "";
            divQuestionsReponses.style.display = "none";
            const parag = document.createElement("p");
            const boutonRejouer = document.createElement("button");

            boutonRejouer.textContent = "Rejouer";
            boutonRejouer.id = "rejouer";

            parag.appendChild(boutonRejouer);

            resultat.textContent = `Le jeu est terminé ! Score final : vous avez ${scoreFinal} bonnes réponses sur ${questions.length} questions`;
            resultat.appendChild(parag);
            Rejouer();
        } else {
            questionsElement.textContent = questions[i + 1].question;
        }

        i++;
        
    };
}

// Sélection du bouton d'annulation de la réponse
const boutonAnnuler = document.getElementById("boutonAnnuler")

// Fonction pour annuler la reponse
boutonAnnuler.addEventListener("click", () => {
    const reponseElement = document.getElementById("reponse")
    const resultatReponseElement = document.getElementById("resultat-reponse")

    reponseElement.value = "";
    reponseElement.focus();
    resultatReponseElement.textContent = "";
    
})

const boutonTerminer = document.getElementById('boutonTerminer');

boutonTerminer.addEventListener("click", () => {
    window.location.reload(true);
})

function Rejouer() {
    
    const rejouer = document.getElementById('rejouer')
               rejouer.addEventListener("click", () => {
               SelectionDuJeu();
            });
}
