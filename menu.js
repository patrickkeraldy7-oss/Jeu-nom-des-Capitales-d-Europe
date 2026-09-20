
async function menu() {
    const ulMenu = document.getElementById("ul_contenus");

    try {
        const reponse = await fetch('menu.json');

        if (!reponse.ok) {
            throw new Error(`Erreur lors du chargement du menu : ${reponse.status}`);
        }

        const li = await reponse.json()
        ulMenu.innerHTML = "";

        li.forEach(adresse => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = adresse.url;
            a.textContent = adresse.label;
            a.id = adresse.id;
            
            li.appendChild(a);
            ulMenu.appendChild(li);
            console.log(ulMenu)
        });
    } catch (error) {
        console.log()
    }
}

menu();

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
