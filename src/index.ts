import { Application } from "pixi.js"

const app = new Application({
    width: 765,
    height: 765,
    antialias: true,
    backgroundColor: 0xcccccc
});
document.body.appendChild(app.view);
