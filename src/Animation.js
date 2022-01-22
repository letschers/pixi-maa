export const animate = (app, path) => {
    const loader = PIXI.Loader.shared;

    if (loader.resources[path] == null) {
        loader.add(path).load(setup(app));
    } else {
        loader.load(setup(app, path));
    }
}



const setup = (app, path) => {
    const frames = [];
    
    for (let i = 111; i <= 150; i++) {
        //limitate time of frame 
        const frame = {
            texture: PIXI.Texture.from(`${path}${i}.png`),
            time: 33
        }
        //const texture = PIXI.Texture.from(`./Assets/Captain America/${i}.png`);
        frames.push(frame);
    }

    const hero = new PIXI.AnimatedSprite(frames);
    hero.position.set(0, 0);
    //hero.animationSpeed = 0.5;
    console.log(hero.texture);
    app.stage.addChild(hero);
    hero.loop = false;


    //console.log(app.stage.children);

    /*app.stage.children.forEach(element => {
        console.log(element.name);
    });*/

    app.stage.getChildByName("ButtonsContainer").visible = false;


    hero.onComplete = () => {
        hero.destroy();
    app.stage.getChildByName("ButtonsContainer").visible = true;   
    }

    hero.play();
}

export const showHero = (app) => {
    const sprite = PIXI.Sprite.from("./Assets/Black Widow/Idle/Idle.png");
    app.stage.addChild(sprite);

    return sprite;
}