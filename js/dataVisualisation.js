const params = new URLSearchParams(window.location.search);
var positionX = params.get("positionX");
var positionY = params.get("positionY");
const curseur = document.querySelector("#curseur");
const transition = document.querySelector(".transition");
const sprite = document.querySelector(".sprite");
const audioGate = document.querySelector("#audio-gate");
const gate = document.querySelector("#gate");
var gateStatue = false;

(function init() {
    spriteSelection();
    spriteAnimation(false);
    // repositionne le curseur à la position de la page précédente
    curseur.style.left = `${positionX}px`;
    curseur.style.top = `${positionY}px`;

    // fait apparaitre le curseur avec style
    curseur.classList.add("fade");

    // active le curseur custom + effet de click
    document.addEventListener("mousemove",cursor)
    // créer des FX de cercle lors des clicks
    document.addEventListener("click", cliquer);


    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            spriteAnimation(true);
        }, 2000);
        setTimeout(() => {
            transition.classList.add("remove");
        }, 2500);
        main();
    });
})();

function main() {
    gate.addEventListener("click",gateChange);
}

///////////////////////////////////////////////////////////////////////

function cursor(event) {
    // MAJ la position du curseur
    positionX = event.pageX || event.changedTouches[0].pageX;
    positionY = event.pageY || event.changedTouches[0].pageY;

    curseur.style.left = positionX + "px";
    curseur.style.top = positionY + "px";
}

function cliquer(event) {
    const cercle = document.createElement("div");

        cercle.classList.add("cercle-clic");

        cercle.style.left = `${positionX}px`;
        cercle.style.top = `${positionY}px`;

        document.body.appendChild(cercle);

        cercle.addEventListener("animationend", () => {
            cercle.remove();
        });
}

function spriteSelection(event) {
    const randomElement = sprites[Math.floor(Math.random() * sprites.length)];
    document.querySelector(".sprite>img").src = "img/UmaSprite/" + randomElement;
}

function spriteAnimation(x) {
    if (x == false){
        sprite.classList.add("on");
    }
    else {
        sprite.classList.add("start");
        setTimeout(()=>{sprite.classList.add("off");},500)
    }
}

function gateChange() {
    if (gateStatue == false){
        document.querySelector("#gate>img").src = "img/assets/gateOpen.png";
        gateStatue = true;
    }
    else{
        document.querySelector("#gate>img").src = "img/assets/gateClosed.png";
        gateStatue = false;
    }
}

function background() {

}