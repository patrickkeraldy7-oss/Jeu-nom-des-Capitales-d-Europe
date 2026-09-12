let nombre = document.getElementById('chiffres');
const selection = document.getElementById('valeurOperation')
let resultat = document.getElementById('resultat');
const a = parseInt(nombre.value, 10)
let b = 0, total = 0
selection.addEventListener('change', calcul);

function calcul(valeurA, valeurB, valeurTotal, selection) {
    
    if (valeurA === isNaN) {
        alert("valeur non valide !")
    }else if(selection === "+"){
        let a = valeurA
        let b = valeurB
        let c = valeurTotal

        c = a + b
        resultat.innerHTML = selection;
        
    }
}

calcul(a, b, total, selection.value)