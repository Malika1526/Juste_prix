"use strict";

const input = document.querySelector("#userInput");
const btnSubmit = document.querySelector("#submitBtn");
const btnRetry = document.querySelector("#retryBtn");
let n = Math.floor(Math.random() * 100) + 1;
const message = document.querySelector('.message');
let compteur = 0;


function jouer() {

    let user = input.value;
    const verifSaisie = /^[1-9][0-9]?$|^100$/;
    const tentatives = 7;

    input.value = "";
    input.focus();

    if (!verifSaisie.test(user)) {

        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }

    compteur++;

    if (user < n) {

        message.textContent =`Plus grand que ${user} !`
    } else if (user > n) {

        message.textContent =`Plus petit que ${user} !`
    } else {

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

    if (e.key == "Enter"){
        
        jouer();
    } 
    
})

btnRetry.addEventListener('click',e=>{

    n = Math.floor(Math.random() * 100) + 1;
    compteur = 0;
    input.disabled = false;
    message.textContent = "";
    
})

btnSubmit.addEventListener('click', jouer);
