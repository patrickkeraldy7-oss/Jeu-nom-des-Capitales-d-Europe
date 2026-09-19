// Charger le JSON et construire le menu
fetch("menu.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
    })
    .then(menuItems => {
        const menuContainer = document.getElementById("ul_contenus");
        menuItems.forEach(item => {
            // Validation basique des données
            if (item.label && item.url) {
                menuContainer.appendChild(createMenuItem(item.label, item.url, item.id));
            }
        });
    })
    .catch(error => {
        console.error("Impossible de charger le menu :", error);
        document.getElementById("menu").innerHTML = "<li>Menu indisponible</li>";
    });

const contenus = document.getElementById("ul_contenus");
const liApplications = document.getElementById("liApplications");
let i = 0;

liApplications.addEventListener('click', () => {
    i += 1;
        contenus.style.display = "flex";
})

const cacher = document.body;

cacher.addEventListener('click', () => {
    if (i === 1) {
        i += 1;
    }else if (i === 2) {
        cacherMenu();
        i = 0;
    }
})

function cacherMenu(){
        
    contenus.style.display = "none";
    liApplications.style.display = "block"
             
}
