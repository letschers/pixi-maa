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