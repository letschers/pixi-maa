import { Resource, Texture } from "@pixi/core";
import { Loader } from "@pixi/loaders";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
import { Spritesheet } from "@pixi/spritesheet";
import { Hero } from "../interfaces/Hero.h";

export default class CaptainAmerica implements Hero {

    public name: string;
    public readonly animations: Map<string, Texture[]>;
    public sprite!: AnimatedSprite;
    private filePath: string = "./assets/captain-america";

    constructor(animations: Map<string, Texture[]>) {
        this.animations = animations;
        this.name = "Captain America";
        this.sprite = new AnimatedSprite(animations.get("idle")!)
        this.sprite.animationSpeed = 0.7;        
        this.sprite.play();
    }

    public setupAnimations(): void {
        //this.setupIdleAnimation();
        //this.setupAttack1Animation();
        //this.setupAttack2Animation();
        //this.setupAttack3Animation();
        //this.setupAttack4Animation();
    }

    public setupIdleAnimation(animation: AnimatedSprite): void {

        //this.animations.set("idle", animation);
        //this.sprite = this.animations.get("idle")!;
        //this.sprite.play();


        /*const images: any = await require.context(`${this.filePath}/idle`, false, /\.png$/);
        console.log(images);

        const frames: Texture[] = [];

        images.forEach((image: Texture<Resource>) => {
            frames.push(image);
        });

        this.animations.set("idle", frames);*/

        /*const frames: Texture[] = [];
        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/idle/${i}.png`)
            frames.push(frame);
        }
        this.animations.set("idle", frames);*/

        // ----

        /**
         * Example of fetch usage
         */
        /*const sheetJson = await (await fetch('./assets/captain-america/idle/spritesheet.json')).json();
        const sheet = new Spritesheet(Texture.from(`${this.filePath}/idle/spritesheet.png`), sheetJson);
        sheet.parse(textures => {
            this.animations.set("idle", new AnimatedSprite(Object.values(textures as object)));
        });*/

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

            console.log(obj.frames);
            const sheet = new Spritesheet(Texture.from(`${this.filePath}/idle/spritesheet.png`), obj.frames);
            

        }*/

        //const sheet = new Spritesheet(Texture.from(`${this.filePath}/idle/idle-spritesheet.png`), {});

    }

    private setupAttack1Animation(): void {
        /*
        const frames: Texture[] = [];

        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-1/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack1", frames);
        */
    }

    private setupAttack2Animation(): void {
        /*
                const frames: Texture[] = [];
        
                for (let i = 224; i <= 262; i++) {
                    //limitate time of frame 
                    const frame = Texture.from(`${this.filePath}/attack-2/${i}.png`);
        
                    frames.push(frame);
                }
        
                this.animations.set("attack2", frames);
            */
    }

    private setupAttack3Animation(): void {
        /*
                const frames: Texture[] = [];
        
                for (let i = 179; i <= 223; i++) {
                    //limitate time of frame 
                    const frame = Texture.from(`${this.filePath}/attack-3/${i}.png`);
        
                    frames.push(frame);
                }
        
                this.animations.set("attack3", frames);
                */
    }

    private setupAttack4Animation(): void {
        /*
        const frames: Texture[] = [];

        for (let i = 263; i <= 304; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/attack-4/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack4", frames);
        */
    }

    public getButtonsSprites(): Sprite[] {
        const arr: Sprite[] = [];

        for (let i = 1; i <= 4; i++) {
            arr.push(Sprite.from(`${this.filePath}/attack-icons/attack-${i}.png`));
        }

        return arr;
    }

    public playAnimation(animation: Texture<Resource>[] | string, once?: boolean): void {

        if (typeof animation === "string") {
            this.sprite.textures = this.animations.get(animation)!;
        } else {
            this.sprite.textures = animation;
        }

        if (once) {
            this.sprite.loop = false;
            this.sprite.play();
            return;
        }

        this.sprite.play();
    }

}