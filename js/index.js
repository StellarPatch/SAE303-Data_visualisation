const curseur = document.querySelector("#curseur");
const body = document.querySelector("body");
const transition = document.querySelector(".transition");
let positionX = 0;
let positionY = 0;

body.classList.add("fade");

document.addEventListener("mousemove", (e) => {
    curseur.style.left = `${e.clientX}px`;
    curseur.style.top = `${e.clientY}px`;
});

document.addEventListener("click", (e) => {
    const cercle = document.createElement("div");

    cercle.classList.add("cercle-clic");

    cercle.style.left = `${e.clientX}px`;
    cercle.style.top = `${e.clientY}px`;

    document.body.appendChild(cercle);

    cercle.addEventListener("animationend", () => {
        cercle.remove();
    });

    positionX = e.clientX;
    positionY = e.clientY;
});

document.addEventListener("click", (e) => {
    transition.classList.add("add");
    curseur.classList.add("fade");
    setTimeout(() => {
         window.open("dataVisualisation.html?positionX=" + positionX + "&positionY=" + positionY, "_self")
    }, 2000);
})