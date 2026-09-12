

fetch('menu.json')
.then(reponse => reponse.json())
.then(menu =>{
    const LeMenu = document.getElementById('span-menu');
    LeMenu.innerHTML = `${menu[0].menu} ${menu[0].ListeDeProduits}`

    const MenuCacher = document.getElementById('MenuCacher')
    const afficheMenu = document.getElementById('produits')

    function CacherLeMenu() {
        if (!MenuCacher.matches(':hover') && !afficheMenu.matches(':hover')) {
             MenuCacher.classList.toggle('hidden')
        }
    }

    afficheMenu.addEventListener('mouseenter', () => {
        MenuCacher.classList.toggle('hidden')

    })

    afficheMenu.addEventListener('mouseleave', CacherLeMenu)
    MenuCacher.addEventListener('mouseleave', CacherLeMenu)
   
})

 const AdresseboutonClick = document.getElementById('info-panier')
 const boutonClick = '<button id="boutonClick">envoyez</button>'

    