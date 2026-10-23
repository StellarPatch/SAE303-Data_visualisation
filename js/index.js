//////////////////////////////// INITIALISATION DES VARIABLES /////////////////////////////////////

const curseur = document.querySelector("#curseur");
const body = document.querySelector("body");
const audio = document.querySelector("#audio-title-screen");
const transition = document.querySelector(".transition");

// position X et Y du curseur
var positionX = 0;
var positionY = 0;

// sélection aléatoire d'un time code de l'audio du screen-title
let timecodeSelect = Math.floor(Math.random() * timecodes.length)
let timecode = timecodes[timecodeSelect];

// vérification que le timecode ne soit pas le dernier
if (timecodes[timecodeSelect+1] == timecodes[timecodes.length-1]){
    var timecodeEnd = "11:01";}
else{
    var timecodeEnd = timecodes[timecodeSelect+1];}

var duree = timecodeToSeconds(timecodeEnd) - timecodeToSeconds(timecode);

// console.log(timecodeEnd);

//////////////////////////////// Initialisation d'events /////////////////////////////////////


(function init() {
    // active le curseur custom + effet de click
    document.addEventListener("mousemove", cursor)
    // créer des FX de cercle lors des clicks
    document.addEventListener("click", cliquer);

    // affiche le menu d'accueil après chargement complet de la page
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            body.classList.add("fade");
        }, 1000);
    });

    // change de page avec des effets stylax
    document.addEventListener("click", (e) => {
        audioIntro();
        curseur.classList.add("fade");
        transition.classList.add("add");
        setTimeout(() => {
            window.open("dataVisualisation.html?positionX=" + positionX + "&positionY=" + positionY, "_self")
        }, duree*1000);
    })

})();

//////////////////////////////// ZONE FONCTIONS /////////////////////////////////////

// Curseur personnalisé
function cursor(event) {
    // enregistre la position du curseur
    positionX = event.pageX || event.changedTouches[0].pageX;
    positionY = event.pageY || event.changedTouches[0].pageY;

    // MAJ la position du curseur
    curseur.style.left = positionX + "px";
    curseur.style.top = positionY + "px";
}

// Animation du click
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

// Convertion chaine de caractère en int
function timecodeToSeconds(timecode) {
  const parts = timecode.split(":").map(Number);
  return parts.reduce((total, part) => total * 60 + part, 0);
}

// Pas besoin d'expliquer je pense
function audioIntro() {
        audio.loop = false;
        audio.volume = 1
        // sélectionne le momement du voiceline
        audio.currentTime = timecodeToSeconds(timecode);
        audio.play();
        // fait pose au cas où
        setTimeout(() => {
            audio.pause();
        }, duree * 1000);
}