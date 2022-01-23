"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animate = void 0;
var animate = function (app, path) {
    var loader = PIXI.Loader.shared;
    /*if (loader.resources[path] == null) {
        loader.add(path).load(setup(app, path));
    } else {
    }*/
    //loader.load(setup(app, path));
    return setup(app, path);
};
exports.animate = animate;
var setup = function (app, path) {
    var frames = [];
    for (var i = 1; i <= 110; i++) {
        //limitate time of frame 
        var frame = {
            texture: PIXI.Texture.from("".concat(path).concat(i, ".png")),
            time: 33
        };
        frames.push(frame);
    }
    var hero = new PIXI.AnimatedSprite(frames);
    hero.position.set(0, 0);
    app.stage.addChild(hero);
    //hero.loop = false;
    hero.play();
    return hero;
};
