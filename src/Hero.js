import { animate } from "./Animation.js";

export default class Hero {

    constructor(name, app) {
        this.name = name;
        this.filePath = `./Assets/${name}/`;
        this.app = app;

        const attackButtons = this.showAttackButtons();
        this.setEventListeners(attackButtons);

        this.animations = this.getAllAnimations();
        this.setupAnimations();

        this.currentAnimation = "idle";
        //this.playAnimation(this.animations.get(this.currentAnimation), 0, 0, true);
        this.app.stage.addChild(this.animations.get(this.currentAnimation));



        //this.currentAnimation = "idle";
        //this.app.stage.addChild(this.animations.get(this.currentAnimation))
        //this.animations.get(this.currentAnimation).loop = true;
    }

    setupAnimations() {
        this.currentAnimation = this.animations.get("idle");
        this.playAnimation(this.currentAnimation, 0, 0, true);
        this.app.stage.removeChild(this.currentAnimation);

        this.currentAnimation = this.animations.get("attack1");
        this.playAnimation(this.currentAnimation, 0, 0, false);
        this.app.stage.removeChild(this.currentAnimation);
    }

    getAllAnimations() {
        let animations = new Map();

        const idle = this.animateIdle();
        const attack1 = this.animateSkill1();
        const attack2 = this.animateSkill2();
        const attack3 = this.animateSkill3();
        const attack4 = this.animateSkill4();

        animations.set("idle", idle);
        animations.set("attack1", attack1);
        animations.set("attack2", attack2);
        animations.set("attack3", attack3);
        animations.set("attack4", attack4);

        animations.get("idle").name = "idle";
        animations.get("attack1").name = "attack1";
        animations.get("attack2").name = "attack2";
        animations.get("attack3").name = "attack3";
        animations.get("attack4").name = "attack4";

        return animations;

        /*idle.position.set(0, 0);
        this.app.stage.addChild(idle);
        idle.loop = false;
        idle.play();
    
        idle.onComplete = () => {
            
            idle.visible = false;
            
            this.app.stage.addChild(attack1);
            attack1.position.set(0, 0);
            attack1.play();
        }*/
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

        const hero = new PIXI.AnimatedSprite(frames);
        return hero;
        /*hero.position.set(0, 0);
        this.app.stage.addChild(hero);
        //hero.loop = false;
        hero.play();*/

        //this.animationObject = hero;
    }

    playAnimation(animation, positionX, positionY, loopable) {

        animation.position.set(positionX, positionY);
        animation.loop = loopable;


        this.app.stage.addChild(animation);

        /*hero.onComplete = () => {
            hero.destroy();
            this.app.stage.getChildByName("ButtonsContainer").visible = true;
            this.animateIdle();
        }*/

        /*this.currentAnimation.onComplete = () => {
            this.currentAnimation.visible = false;
            this.currentAnimation = this.animations.get("idle");
            this.playAnimation(this.currentAnimation, 0, 0, true);
            this.currentAnimation.visible = true;
        }*/

        animation.play();
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

        const hero = new PIXI.AnimatedSprite(frames);
        /*hero.position.set(0, 0);
        this.app.stage.addChild(hero);
        hero.loop = false;
    
        hero.onComplete = () => {
            hero.destroy();
            this.app.stage.getChildByName("ButtonsContainer").visible = true;
            this.animateIdle();
        }
    
    
        hero.play();*/
        return hero;

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

        const hero = new PIXI.AnimatedSprite(frames);
        return hero;
        /*hero.position.set(0, 0);
        this.app.stage.addChild(hero);
        hero.loop = false;
    
        hero.onComplete = () => {
            hero.destroy();
            this.app.stage.getChildByName("ButtonsContainer").visible = true;
            this.animateIdle();
        }
    
    
        hero.play();*/
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

        const hero = new PIXI.AnimatedSprite(frames);
        return hero;
        /*hero.position.set(0, 0);
        this.app.stage.addChild(hero);
        hero.loop = false;
    
        hero.onComplete = () => {
            hero.destroy();
            this.app.stage.getChildByName("ButtonsContainer").visible = true;
            this.animateIdle();
        }
    
    
        hero.play();*/
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

        const hero = new PIXI.AnimatedSprite(frames);
        return hero;
        /*hero.position.set(0, 0);
        this.app.stage.addChild(hero);
        hero.loop = false;
    
        hero.onComplete = () => {
            hero.destroy();
            this.app.stage.getChildByName("ButtonsContainer").visible = true;
            this.animateIdle();
        }
    
    
        hero.play();*/
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
            //this.app.stage.removeChild(this.animations.get(this.currentAnimation))
            //this.app.stage.addChild(this.animations.get(this.currentAnimation)

            /*this.app.stage.removeChild(this.animations.get(this.currentAnimation));
            this.currentAnimation = "attack1";
            this.animations.get(this.currentAnimation).loop = false;
            this.app.stage.addChild(this.animations.get(this.currentAnimation)).play();

            this.animations.get(this.currentAnimation).onComplete = () => {
                console
            }*/



            /*if(this.animations.get(this.currentAnimation).visible) {
                this.animations.get(this.currentAnimation).visible = false;
            } else {
                this.animations.get(this.currentAnimation).visible = true;
            }*/


        });

        arr[1].interactive = true;
        arr[1].on('pointerdown', () => {

        });

        /*arr[0].on('pointerdown', () => {

            console.log(this.app.stage.children);
            //this.app.stage.removeChild(this.animations.get(this.currentAnimation));
            
            console.log(this.app.stage.children);

            this.currentAnimation = "attack1";
            this.animations.get(this.currentAnimation).loop = false;
            this.app.stage.addChild(this.animations.get(this.currentAnimation)).play();


            this.animations.get(this.currentAnimation).onComplete = () => {
                console.log(this.app.stage.children);
                this.app.stage.removeChild(this.animations.get(this.currentAnimation));
                console.log(this.app.stage.children);
                //this.currentAnimation = "idle";
                //this.app.stage.addChild(this.animations.get(this.currentAnimation)).play();
                //console.log(this.app.stage.children);
            }
        });*/

        /*arr[1].interactive = true;
        arr[1].on('pointerdown', () => {
            this.app.stage.removeChild(this.animations.get(this.currentAnimation));
            this.currentAnimation = "attack1";
            this.animations.get(this.currentAnimation).loop = false;
            this.app.stage.addChild(this.animations.get(this.currentAnimation)).play();

            this.animations.get(this.currentAnimation).onComplete = () => {
                this.app.stage.removeChild(this.animations.get(this.currentAnimation));
                this.currentAnimation = "idle";
                this.app.stage.addChild(this.animations.get(this.currentAnimation)).play();

                //this.currentAnimation = "idle";
                //this.app.stage.addChild(this.animations.get(this.currentAnimation));

            }
        });*/

        arr[0].interactive = true;
        arr[0].on('pointerdown', () => {
            //this.animationObject.destroy();
            this.animateSkill1();
            this.app.stage.getChildByName("ButtonsContainer").visible = false;
        })
    
        arr[1].interactive = true;
        arr[1].on('pointerdown', () => {
            //this.animationObject.destroy();
            this.animateSkill2();
            this.app.stage.getChildByName("ButtonsContainer").visible = false;
        })

        arr[2].interactive = true;
        arr[2].on('pointerdown', () => {
            this.animationObject.destroy();
            this.animateSkill3();
            this.app.stage.getChildByName("ButtonsContainer").visible = false;
        })
    
        arr[3].interactive = true;
        arr[3].on('pointerdown', () => {
            this.animationObject.destroy();
            this.animateSkill4();
            this.app.stage.getChildByName("ButtonsContainer").visible = false;
        })


        /*arr.forEach(element => {
            element.interactive = true;
            element.on('pointerdown', () => {
                console.log("Click!");
                this.animationObject.destroy();
                this.app.stage.getChildByName("ButtonsContainer").visible = false;
                this.animationObject = this.animateSkill1();
            })
        });*/
    }
}