const setup = (loader, resources) => {
    const textures = [];
  
    //should be 656
    
  
  
    const hero = new PIXI.AnimatedSprite(textures);
    //hero.position.set(0, 0);
  
    hero.onComplete = () => {
      console.log("Animation finished");
    }
    
    //hero.animationSpeed = 0.04;
    hero.animationSpeed = 5;
    hero.play();
    app.stage.addChild(hero);
  }
  
  const animate = () => {
    const loader = PIXI.Loader.shared;
    loader.add("./Assets/Black Widow/Attack 1/spritesheet.json")
      .load(setup);
  }

  const showAttackButtons = () => {
    let container = new PIXI.Container();
    container.name = "ButtonsContainer";
  
    const a1 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/1.png");
    container.addChild(a1);
    const a2 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/2.png");
    container.addChild(a2);
    const a3 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/3.png");
    container.addChild(a3);
    const a4 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/4.png");
    container.addChild(a4);
  
    a1.x = 200;
    a1.y = 530;
  
    a2.x = 300;
    a2.y = 530;
  
    a3.x = 400;
    a3.y = 530;
  
    a4.x = 500;
    a4.y = 530;
  
    app.stage.addChild(container);
  
    return [a1, a2, a3, a4];
  }


  const setAttackButtonsEventListeners = (arr) => {
    arr.forEach(element => {
        element.interactive = true;
        element.on('pointerdown', () => {
            console.log("Click!");
            animate(app, "./Assets/Black Widow/Attack 1/spritesheet.json");

            //element.interactive = false;
            //element.visible = false;
        })
    });
}

export const showHero = (app) => {
  const sprite = PIXI.Sprite.from("./Assets/Black Widow/Idle/Idle.png");
  app.stage.addChild(sprite);

  return sprite;
}