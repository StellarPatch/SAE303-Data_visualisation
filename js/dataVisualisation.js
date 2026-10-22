const params = new URLSearchParams(window.location.search);
const positionX = params.get("positionX");
const positionY = params.get("positionY");

const curseur = document.querySelector("#curseur");
curseur.style.left = `${positionX}px`;
curseur.style.top = `${positionY}px`;

const transition = document.querySelector(".transition");

setTimeout(() => {
    transition.classList.add("remove");
}, 3000);

curseur.classList.add("fade");

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
});