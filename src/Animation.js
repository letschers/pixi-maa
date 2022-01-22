export const animate = (app, path) => {
    const loader = PIXI.Loader.shared;

    /*if (loader.resources[path] == null) {
        loader.add(path).load(setup(app, path));
    } else {
    }*/

    //loader.load(setup(app, path));

    return setup(app, path);
    
}

const setup = (app, path) => {
    const frames = [];

    for (let i = 1; i <= 110; i++) {
        //limitate time of frame 
        const frame = {
            texture: PIXI.Texture.from(`${path}${i}.png`),
            time: 33
        }
        frames.push(frame);
    }

    const hero = new PIXI.AnimatedSprite(frames);
    hero.position.set(0, 0);
    app.stage.addChild(hero);
    //hero.loop = false;
    hero.play();

    return hero;
}