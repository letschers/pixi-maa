import Game from "./Game";
import { Hero } from "./interfaces/Hero.h";


const app = new Game(765, 765);



app.setBattleBackground();


//const captainAmerica = new CaptainAmerica();
//app.addCharacter(0, 0, captainAmerica);

/*async function instantiateHero() {
    await import("./CaptainAmerica").then(e => {
        const captainAmerica = new e.default();
        app.addCharacter(0, 0, captainAmerica);
        app.setAttackIcons(captainAmerica.getButtonsSprites(), captainAmerica);
    });
}*/

const instantiateHero = async ()/*: Promise<Hero>*/ => {
    const heroClass = await import("./CaptainAmerica");
    const hero = new heroClass.default(); 

    return hero;

    //return hero;
}

const captainAmerica = await instantiateHero();
app.addCharacter(0, 0, captainAmerica);
app.setAttackIcons(captainAmerica.getButtonsSprites(), captainAmerica);


//const answer = instantiateHero();
//console.log(answer);

