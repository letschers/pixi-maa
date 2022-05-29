import { Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
export default class Wolverine {
    constructor() {
        this.animations = new Map();
        this.filePath = "./assets/wolverine";
        this.name = "Wolverine";
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
    setupIdleAnimation() {
        const frames = [];
        for (let i = 1; i <= 95; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/idle/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("idle", frames);
    }
    setupAttack1Animation() {
        const frames = [];
        for (let i = 177; i <= 228; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-1/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack1", frames);
    }
    setupAttack2Animation() {
        const frames = [];
        for (let i = 299; i <= 391; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-2/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack2", frames);
    }
    setupAttack3Animation() {
        const frames = [];
        for (let i = 523; i <= 598; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-3/${i}.png`);
            frames.push(frame);
        }
        this.animations.set("attack3", frames);
    }
    setupAttack4Animation() {
        const frames = [];
        for (let i = 392; i <= 454; i++) {
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
//# sourceMappingURL=Wolverine.js.map