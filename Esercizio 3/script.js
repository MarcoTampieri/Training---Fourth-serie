let testo = document.getElementById("texte");

let colourGreen = document.querySelector(".green");
let colourRed = document.querySelector(".red");
let colourBlue = document.querySelector(".blue");


function changeToGreen() {
    testo.style.color = "green";
};

function changeToRed () {
    testo.style.color = "red";
};

function changeToBlue () {
    testo.style.color = "blue";
};


colourGreen.addEventListener("click", changeToGreen);
colourRed.addEventListener("click", changeToRed);
colourBlue.addEventListener("click", changeToBlue);



