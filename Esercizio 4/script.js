let parola = document.querySelector("#motdepasse");
let conferma = document.querySelector("#confirmation");
let bottone = document.querySelector("button");

function check() {
    if (parola.value != conferma.value) {
        parola.style.border = "2px solid red";
        conferma.style.border = "2px solid red";
    } else if (parola.value == conferma.value) {
        parola.style.border = "2px solid green";
        conferma.style.border = "2px solid green";
    };
};

bottone.addEventListener("click", check);