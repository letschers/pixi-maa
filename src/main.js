import Screen from './Screen.js';
import { setEventListeners } from './EventListeners.js';
import Hero from './Hero.js';
import { animate } from './Animation.js';


const app = new Screen();


let hero = new Hero("Captain America", app, 0, 0);
//let hero1 = new Hero("Captain America", app, 0, 100);
//let hero2 = new Hero("Captain America", app, 0, 200);
