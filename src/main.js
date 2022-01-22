import { newApp } from './Screen.js';
import { setEventListeners } from './EventListeners.js';
import { showHero, animate } from './Animation.js';
import Hero from './Hero.js';

const showAttackButtons = () => {
  let container = new PIXI.Container();
  container.name = "ButtonsContainer";

  const a1 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/1.png");
  //app.stage.addChild(a1);
  container.addChild(a1);
  const a2 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/2.png");
  //app.stage.addChild(a2);
  container.addChild(a2);
  const a3 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/3.png");
  //app.stage.addChild(a3);
  container.addChild(a3);
  const a4 = new PIXI.Sprite.from("./Assets/Black Widow/Attacks Icons/4.png");
  //app.stage.addChild(a4);
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


const app = newApp();
let btns = showAttackButtons();
setAttackButtonsEventListeners(btns);

let hero = new Hero("Captain America", app);
hero.animateSkill1();




//setEventListeners(app);
//let hero = showHero(app);

