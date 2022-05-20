import { Resource, Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
import { Hero } from "../interfaces/Hero.h";


export default class CaptainAmerica implements Hero {

    public name: string;
    public animations: Map<string, Texture[]> = new Map();
    public sprite!: AnimatedSprite;
    private filePath: string = "./assets/captain-america";

    constructor() {
        this.name = "Captain America";
    }

    importAll(r: any) { 
        return r.keys().map(r);
    }

    public async setupAnimations(): Promise<void> {
        await this.setupIdleAnimation();
        this.setupAttack1Animation();
        this.setupAttack2Animation();
        this.setupAttack3Animation();
        this.setupAttack4Animation();
    }

    public async setupIdleAnimation(): Promise<void> {

        const images = await this.importAll(require.context('../../public/Assets/Captain America/Idle', false, /\.png$/));

        const frames: Texture[] = [];

        images.forEach((image: Texture<Resource>) => {
            frames.push(image);
        });

        this.animations.set("idle", frames);


        /*const frames: Texture[] = [];

        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Idle/${i}.png`)
            frames.push(frame);
        }

        this.animations.set("idle", frames);
    */
    }

    private setupAttack1Animation(): void {
        const frames: Texture[] = [];

        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack1/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack1", frames);
    }

    private setupAttack2Animation(): void {
        const frames: Texture[] = [];

        for (let i = 224; i <= 262; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack2/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack2", frames);
    }

    private setupAttack3Animation(): void {
        const frames: Texture[] = [];

        for (let i = 179; i <= 223; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack3/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack3", frames);
    }

    private setupAttack4Animation(): void {
        const frames: Texture[] = [];

        for (let i = 263; i <= 304; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Attack4/${i}.png`);

            frames.push(frame);
        }

        this.animations.set("attack4", frames);
    }

    public getButtonsSprites(): Sprite[] {
        const arr: Sprite[] = [];

        for (let i = 1; i <= 4; i++) {
            arr.push(Sprite.from(`${this.filePath}/Attack_Icons/Attack${i}.png`));
        }

        return arr;
    }

    public playAnimationFromTexture(texture: Texture[]): void {
        this.sprite.textures = texture;
        this.sprite.loop = false;
        this.sprite.play();


    }
}