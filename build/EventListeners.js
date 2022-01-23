"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEventListeners = void 0;
var Animation_js_1 = require("./Animation.js");
var setEventListeners = function (app) {
    document.addEventListener('keydown', function (e) {
        if (e.key === "ArrowLeft") {
            (0, Animation_js_1.animate)(app, "./Assets/Captain America/Attack 1/");
            console.log("Left clicked");
        }
        if (e.key === "ArrowRight") {
            console.log("Right clicked");
            //animate();
        }
    });
};
exports.setEventListeners = setEventListeners;
