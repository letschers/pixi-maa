import { animate } from "./Animation.js";

export default class Hero {

    constructor(name, app) {
        this.name = name;
        this.filePath = `./Assets/${name}/`;
        this.app = app;

        const attackButtons = this.showAttackButtons();
        this.setEventListeners(attackButtons);

        this.animations = this.getAllAnimations();

        this.currentAnimation = "idle";
        this.player = new PIXI.AnimatedSprite(this.animations["idle"]);
        this.app.stage.addChild(this.player).play();
        //this.player.x = 500;
        //this.player.y = 200;
        //this.player.anchor.set(0.5);

    }

    getAllAnimations() {
        let animations = [];

        const idle = this.animateIdle();
        const attack1 = this.animateSkill1();
        attack1.onComplete = () => {
            this.app.stage.removeChild(this.animations.get(this.currentAnimation));
        }
        const attack2 = this.animateSkill2();
        const attack3 = this.animateSkill3();
        const attack4 = this.animateSkill4();

        animations["idle"] = idle;
        animations["attack1"] = attack1;
        animations["attack2"] = attack2;
        animations["attack3"] = attack3;
        animations["attack4"] = attack4;

        return animations;
    }

    animateIdle() {
        const frames = [];

        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = {
                texture: PIXI.Texture.from(`${this.filePath}/Idle/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        return frames;
    }

    animateSkill1() {
        const frames = [];

        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = {
                texture: PIXI.Texture.from(`${this.filePath}Attack1/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        return frames;
    }

    animateSkill2() {
        const frames = [];

        for (let i = 224; i <= 262; i++) {
            //limitate time of frame 
            const frame = {
                texture: PIXI.Texture.from(`${this.filePath}Attack2/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        return frames;
    }

    animateSkill3() {
        const frames = [];

        for (let i = 179; i <= 223; i++) {
            //limitate time of frame 
            const frame = {
                texture: PIXI.Texture.from(`${this.filePath}Attack3/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        return frames;
    }

    animateSkill4() {
        const frames = [];

        for (let i = 263; i <= 304; i++) {
            //limitate time of frame 
            const frame = {
                texture: PIXI.Texture.from(`${this.filePath}Attack4/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }
        return frames;
    }

    showAttackButtons() {
        let container = new PIXI.Container();
        container.name = "ButtonsContainer";

        const a1 = new PIXI.Sprite.from(`${this.filePath}/Attack_Icons/Attack1.png`);
        container.addChild(a1);
        const a2 = new PIXI.Sprite.from(`${this.filePath}/Attack_Icons/Attack2.png`);
        container.addChild(a2);
        const a3 = new PIXI.Sprite.from(`${this.filePath}/Attack_Icons/Attack3.png`);
        container.addChild(a3);
        const a4 = new PIXI.Sprite.from(`${this.filePath}/Attack_Icons/Attack4.png`);
        container.addChild(a4);

        a1.x = 200;
        a1.y = 530;

        a2.x = 300;
        a2.y = 530;

        a3.x = 400;
        a3.y = 530;

        a4.x = 500;
        a4.y = 530;

        this.app.stage.addChild(container);

        return [a1, a2, a3, a4];
    }

    setEventListeners(arr) {
        arr[0].interactive = true;
        arr[0].on('pointerdown', () => {
            this.app.stage.getChildByName("ButtonsContainer").visible = false;

            this.currentAnimation = "attack1";
            this.player.textures = this.animations[this.currentAnimation];
            this.player.loop = false;
            this.player.play();

            this.player.onComplete = () => {
                this.currentAnimation = "idle";
                this.player.textures = this.animations[this.currentAnimation];
                this.player.play();
                this.app.stage.getChildByName("ButtonsContainer").visible = true;
            }
        });

        arr[1].interactive = true;
        arr[1].on('pointerdown', () => {
            this.app.stage.getChildByName("ButtonsContainer").visible = false;

            this.currentAnimation = "attack2";
            this.player.textures = this.animations[this.currentAnimation];
            this.player.loop = false;
            this.player.play();

            this.player.onComplete = () => {
                this.currentAnimation = "idle";
                this.player.textures = this.animations[this.currentAnimation];
                this.player.play();
                this.app.stage.getChildByName("ButtonsContainer").visible = true;
            }
        })

        arr[2].interactive = true;
        arr[2].on('pointerdown', () => {
            this.app.stage.getChildByName("ButtonsContainer").visible = false;

            this.currentAnimation = "attack3";
            this.player.textures = this.animations[this.currentAnimation];
            this.player.loop = false;
            this.player.play();

            this.player.onComplete = () => {
                this.currentAnimation = "idle";
                this.player.textures = this.animations[this.currentAnimation];
                this.player.play();
                this.app.stage.getChildByName("ButtonsContainer").visible = true;
            }
        })

        arr[3].interactive = true;
        arr[3].on('pointerdown', () => {
            this.app.stage.getChildByName("ButtonsContainer").visible = false;

            this.currentAnimation = "attack4";
            this.player.textures = this.animations[this.currentAnimation];
            this.player.loop = false;
            this.player.play();

            this.player.onComplete = () => {
                this.currentAnimation = "idle";
                this.player.textures = this.animations[this.currentAnimation];
                this.player.play();
                this.app.stage.getChildByName("ButtonsContainer").visible = true;
            }
        })
    }
}