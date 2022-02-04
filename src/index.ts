import CaptainAmerica from "./CaptainAmerica";
import Game from "./Game";


const app = new Game(765, 765);



app.setBattleBackground();


//const captainAmerica = new CaptainAmerica();
//app.addCharacter(0, 0, captainAmerica);

import("./CaptainAmerica").then(e => {
    const captainAmerica = new e.default();
    app.addCharacter(0, 0, captainAmerica);
});


/*import("./CaptainAmerica").then(e => {
    app.addCharacter(0, 0, e);

})*/


//app.setAttackIcons(captainAmerica.getButtonsSprites(), captainAmerica);

