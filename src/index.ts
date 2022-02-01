import Game from "./Game";
import Hero from "./Hero";


const app = new Game(765, 765);



app.setBattleBackground();

const captainAmerica = new Hero();

//console.log(captainAmerica);

app.app.stage.addChild(captainAmerica.sprite);
//captainAmerica.changeSprite();


