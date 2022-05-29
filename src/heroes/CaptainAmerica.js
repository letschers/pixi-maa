import { Texture, } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
import { Spritesheet } from "@pixi/spritesheet";
export default class CaptainAmerica {
    constructor() {
        this.animations = new Map();
        this.filePath = "./assets/captain-america";
        this.name = "Captain America";
        this.setupAnimations();
        this.sprite = new AnimatedSprite(this.animations.get("idle"));
        this.sprite.play();
        this.sprite.animationSpeed = 0.5;
    }
    setupAnimations() {
        this.setupIdleAnimation();
        this.setupAttack1Animation();
        this.setupAttack2Animation();
        this.setupAttack3Animation();
        this.setupAttack4Animation();
    }
    async setupIdleAnimation() {
        /*const images: any = await require.context(`${this.filePath}/idle`, false, /\.png$/);
        console.log(images);

        const frames: Texture[] = [];

        images.forEach((image: Texture<Resource>) => {
            frames.push(image);
        });

        this.animations.set("idle", frames);*/
        const frames = [];
        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/idle/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("idle", frames);
        // ----
        const sheetJson = await (await fetch('./assets/captain-america/idle/spritesheet.json')).json();
        console.log(sheetJson.frames);
        const test = sheetJson.frames;
        const sheet = new Spritesheet(Texture.from(`${this.filePath}/idle/spritesheet.png`), test);
        //console.log(sheet);
        // ----
        /**
         * Example of XMLHttpRequest usage
         */
        /*const xhr = new XMLHttpRequest();
        xhr.open('GET', './assets/captain-america/idle/spritesheet.json', true);
        xhr.send();

        xhr.onload = () => {
            const textures: Texture<Resource>[] = [];
            const obj = JSON.parse(xhr.response);
        }*/
        //const sheet = new Spritesheet(Texture.from(`${this.filePath}/idle/idle-spritesheet.png`), {});
    }
    setupAttack1Animation() {
        const frames = [];
        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-1/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack1", frames);
    }
    setupAttack2Animation() {
        const frames = [];
        for (let i = 224; i <= 262; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-2/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack2", frames);
    }
    setupAttack3Animation() {
        const frames = [];
        for (let i = 179; i <= 223; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-3/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack3", frames);
    }
    setupAttack4Animation() {
        const frames = [];
        for (let i = 263; i <= 304; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-4/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack4", frames);
    }
    getButtonsSprites() {
        const arr = [];
        for (let i = 1; i <= 4; i++) {
            arr.push(Sprite.from(`${this.filePath}/attack-icons/attack-${i}.png`));
        }
        return arr;
    }
    playAnimationFromTexture(texture) {
        this.sprite.textures = texture;
        this.sprite.loop = false;
        this.sprite.play();
    }
}
//# sourceMappingURL=CaptainAmerica.js.map