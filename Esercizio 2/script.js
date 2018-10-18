let options = document.getElementsByTagName("a");
let p = document.getElementById("texte");

function visibile() {
    p.style.visibility = "visible";
};

function invisibile() {
    p.style.visibility = "hidden";
}

options[0].addEventListener("click", visibile);
options[1].addEventListener("click", invisibile);
