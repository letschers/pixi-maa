import { Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
export default class Wolverine {
    constructor() {
        this.animations = new Map();
        this.filePath = "./Assets/Captain America";
        this.name = "Wolverine";
        this.setupAnimations();
        this.sprite = new AnimatedSprite(this.animations.get("idle"));
        this.sprite.play();
    }
    setupAnimations() {
        this.setupIdleAnimation();
        this.setupAttack1Animation();
        this.setupAttack2Animation();
        this.setupAttack3Animation();
        this.setupAttack4Animation();
    }
    setupIdleAnimation() {
        const frames = [];
        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Idle/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("idle", frames);
    }
    setupAttack1Animation() {
        const frames = [];
        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack1/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack1", frames);
    }
    setupAttack2Animation() {
        const frames = [];
        for (let i = 224; i <= 262; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack2/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack2", frames);
    }
    setupAttack3Animation() {
        const frames = [];
        for (let i = 179; i <= 223; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack3/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack3", frames);
    }
    setupAttack4Animation() {
        const frames = [];
        for (let i = 263; i <= 304; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack4/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack4", frames);
    }
    getButtonsSprites() {
        const arr = [];
        for (let i = 1; i <= 4; i++) {
            arr.push(Sprite.from(`${this.filePath}/Attack_Icons/Attack${i}.png`));
        }
        return arr;
    }
    playAnimationFromTexture(texture) {
        this.sprite.textures = texture;
        this.sprite.loop = false;
        this.sprite.play();
    }
}
//# sourceMappingURL=Wolverine.js.map