import { animate } from "./Animation.js";

export default class Hero {

    constructor(name, app) {
        this.name = name;
        this.filePath = `./Assets/${name}`;
        this.app = app;
    }

    animateSkill1() {
        let teste = this.filePath + "/Attack1/";
        animate(this.app, teste);
    }
}