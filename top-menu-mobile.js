/**
 * Shows/hides mobile menu and handles menu when resize to desktop
 */

const IS_CLOSED_ICON = "./images/icon-hamburger.svg";
const IS_OPENED_ICON = "./images/icon-close.svg";

const MOBILE_MAX_WIDTH = 600; /* px Temp: Remember to change media query right now*/
const MOBILE_DISPLAY_CLOSED = "none";
const MOBILE_DISPLAY_OPEN = "flex";
const DESKTOP_DISPLAY = "flex";

const menuButton = document.getElementById("mobile-menu-button");
const menu = document.getElementById("menu");

let isOpen = false;

const menuButtonHandler = (e) => {
    if (isOpen) {
        e.target.src = IS_CLOSED_ICON;
        menu.style.display = "none";
        isOpen = false;
    } else {
        e.target.src = IS_OPENED_ICON;
        menu.style.display = "flex";
        isOpen = true;
    }
    console.log("after click: " + isOpen) /* debug */
}


const menuResizeHandler = (e) => {
    const width = window.innerWidth;
    if (width >= MOBILE_MAX_WIDTH) {
        menu.style.display = DESKTOP_DISPLAY;
    } else if (isOpen) {
        menu.style.display = MOBILE_DISPLAY_OPEN
    } else {
        menu.style.display = MOBILE_DISPLAY_CLOSED
    }

}

function setMobileOpen() {

}

function setMobileClosed() {

}

function setDesktop() {

}

menuButton.addEventListener("click", menuButtonHandler);
window.addEventListener("resize", menuResizeHandler);

menuResizeHandler();