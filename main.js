"use strict";

const getElement = selector => document.querySelector(selector);


function printMessage(message) {
    document.querySelector("#gameTextBox").textContent = message;
}

printMessage("You wander into town, hoping to find a blacksmith that can repair your blade from your previous fought battles.")