"use strict";

const getElement = selector => document.querySelector(selector);


//Variables
const undesirablechildText = "Teammates!? Friends!? To hell with that! Why am I inferior to you!? I was extremely particular about my life, my grades, my public image! So someone would want me around! I am an ace detective! A celebrity!  But you... You're just some criminal trash living in an attic!? So how!?  How does someone like you have things I don't!? How can such a worthless piece of trash be more special than me!? This argument is MEANINGLESS!!"
const textbox = document.querySelector("#gameTextBox");

textbox.textContent = ""; //Clear placeholder text

const textContainer = document.createElement("div");
textContainer.id = "textContent";
textbox.appendChild(textContainer);

let dialougeQueue = [];
let currentIndex = 0;

const arrow = document.createElement("div");
arrow.id = "continueArrow";
arrow.textContent = "▶";
textbox.appendChild(arrow);

//Functions
export function printMessage(message) {
    textContainer.textContent = message;
}

function updateArrow() {
    if (currentIndex < dialougeQueue.length - 1) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }
}

export function startDialouge(lines) {
    dialougeQueue = lines;
    currentIndex = 0;
    printMessage(dialougeQueue[currentIndex]);
    updateArrow();
}

export function advanceDialouge() {
    currentIndex++;

    if (currentIndex < dialougeQueue.length) {
        printMessage(dialougeQueue[currentIndex]);
    } else {
        printMessage("");
    }

    updateArrow();
}

textbox.addEventListener("click", advanceDialouge);

//Text Scenes
export function prolouge1_txt() {
    startDialouge([
    "You begin to wake from your slumber...",
    "...",
    "WAKE UP!!!!!",
    "End :)"
    ]);
}

