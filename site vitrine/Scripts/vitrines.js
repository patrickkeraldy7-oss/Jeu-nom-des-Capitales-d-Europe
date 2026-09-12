const liste_de_sites = document.getElementById('sites');
const affichage_liste_site = document.getElementById('li_sites');

liste_de_sites.addEventListener('mouseover', () => {
    
    affichage_liste_site.style.display = "block";
   
})

affichage_liste_site.addEventListener('mouseover', () => {
        affichage_liste_site.style.display = "block";

})

liste_de_sites.addEventListener('mouseout', () => {
        affichage_liste_site.style.display = "none";

})

affichage_liste_site.addEventListener('mouseout', () =>{
     affichage_liste_site.style.display = "none";
})

 if ((liste_de_sites.onmouseout = true) & (affichage_liste_site.onmouseout = true)) {
    affichage_liste_site.style.display = "none"
}

const envoi = document.getElementById('form');
const message = document.getElementById('message');
const mail = document.getElementById('email');
const nom = document.getElementById('nom'), prenon = document.getElementById('prenom');

nom.addEventListener('change', () => 
{
       prenom.focus()
})
prenom.addEventListener('change', () => 
{
        message.focus()
})
message.addEventListener('change', () =>
{
        mail.focus()
})