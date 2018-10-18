let immagine = document.querySelector("#image1");

function addBorder () {
    immagine.style.border = "3px solid red";
};

function removeBorder () {
    immagine.style.border = "";
};

immagine.addEventListener("mouseenter", addBorder);
immagine.addEventListener("mouseleave", removeBorder);