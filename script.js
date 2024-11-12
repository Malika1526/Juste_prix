"use strict";

const input = document.querySelector("#userInput");
const btnSubmit = document.querySelector("#submitBtn");
const btnRetry = document.querySelector("#retryBtn");
let n = Math.floor(Math.random() * 100) + 1;
const message = document.querySelector('.message');
let compteur = 0;

console.log(n);
    
function jouer() {
    let user = input.value;
    const verifSaisie = /^[1-9][0-9]?$|^100$/;
    const tentatives = 7;

    input.value = "";
    input.focus();

    if (!verifSaisie.test(user)) {

        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";

        // console.log("Veuillez entrer un nombre valide entre 1 et 100.");
        return;
    }

    compteur++;

    if (user < n) {

        // console.log(`Plus grand que ${user} !`);
        message.textContent =`Plus grand que ${user} !`
    } else if (user > n) {

        // console.log(`Plus petit que ${user} !`);
        message.textContent =`Plus petit que ${user} !`
    } else {

        // console.log("Bravo, vous avez réussi !");
        message.textContent ="Bravo, vous avez réussi !"
        btnRetry.style.display = "";
        return;
    }
    if (compteur >= tentatives) {

        message.textContent =`Vous avez utilisé vos ${tentatives} tentatives. Le nombre était ${n}.`;
        input.disabled = true;
        btnRetry.style.display = "";
        btnSubmit.style.display = "none";
    }
}

input.addEventListener('keydown', e=> {

    if (e.key == "Enter") {
     
jouer()
    }
   
    
})



btnRetry.addEventListener('click',e=>{
    n = Math.floor(Math.random() * 100) + 1;
    compteur = 0;
    input.disabled = false;
    message.textContent = "";
    

})
btnSubmit.addEventListener('click', jouer)


function justePrix() {

    const verifSaisie = /^[1-9][0-9]?$|^100$/;
    let demarrerJeu = true;

    while (demarrerJeu) {

        let compteur = 0;
        const tentatives = 7;
        let n = Math.floor(Math.random() * 100) + 1;

        console.log(`Vous avez ${tentatives} tentatives pour deviner le nombre.`);

        do {
            let user = parseInt(prompt("Veuillez indiquer un nombre valide compris entre 1 et 100"));

            if (!verifSaisie.test(user)) {

                console.log("Veuillez entrer un nombre valide entre 1 et 100.");
                continue;
            }

            compteur++;

            if (user < n) {

                console.log(`Plus grand que ${user} !`);
            } else if (user > n) {

                console.log(`Plus petit que ${user} !`);
            } else {

                console.log("Bravo, vous avez réussi !");
                break;
            }

        } while (compteur < tentatives);

        if (compteur >= tentatives) {

            console.log(`Vous avez utilisé vos ${tentatives} tentatives. Le nombre était ${n}.`);
        }


        let partie = confirm("Voulez-vous faire une autre partie ?");

        if (!demarrerJeu) {

            console.log("Merci d'avoir participé !");
            break
        } else {

            demarrerJeu = partie;
        }
    }
}

// justePrix();


