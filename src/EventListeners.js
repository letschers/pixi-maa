import { animate } from "./Animation.js";

export const setEventListeners = (app) => {
    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") {
            animate(app, "./Assets/Captain America/Attack 1/");
            console.log("Left clicked");
        }

        if (e.key === "ArrowRight") {
            console.log("Right clicked");
            //animate();
        }

    })
}