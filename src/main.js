import Screen from './Screen.js';
import { setEventListeners } from './EventListeners.js';
import Hero from './Hero.js';
import { animate } from './Animation.js';

const app = new Screen();

let hero = new Hero("Captain America", app);
