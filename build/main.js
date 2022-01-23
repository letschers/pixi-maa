"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Screen_js_1 = __importDefault(require("./Screen.js"));
var Hero_js_1 = __importDefault(require("./Hero.js"));
var app = new Screen_js_1.default();
var hero = new Hero_js_1.default("Captain America", app, 0, 0);
//let hero1 = new Hero("Captain America", app, 0, 100);
//let hero2 = new Hero("Captain America", app, 0, 200);
