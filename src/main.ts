import * as PIXI from 'pixi.js'


/*const hero: Hero = {
    name: "Eduardo",
    age: 18,
}*/

const app = new PIXI.Application({
    width: 765,
    height: 765,
    antialias: true,
    backgroundColor: 0xff0000
});

document.body.appendChild(app.view);