import { Texture } from "@pixi/core";
import { AnimatedSprite } from "@pixi/sprite-animated";
export default class Hero {

    public animations: Map<string, Texture[]> = new Map();
    public sprite: AnimatedSprite;
    private filePath: string = "./Assets/Captain America";

    constructor() {
        this.setupAnimations();
        this.sprite = new AnimatedSprite(this.animations.get("idle")!);
        this.sprite.play();

        this.setEventListener();
    }


    private setEventListener(): void {

        this.sprite.interactive = true;

        this.sprite.on('pointerdown', () => {
            this.sprite.textures = this.animations.get("attack3")!;
            this.sprite.loop = false;
            this.sprite.onComplete = () => {
                this.sprite.textures = this.animations.get("idle")!;
                this.sprite.play();
            }
            this.sprite.play();

        });
    }

    private setupAnimations(): void {
        this.setupIdleAnimation();
        this.setupAttack1Animation();
        this.setupAttack2Animation();
        this.setupAttack3Animation();
        this.setupAttack4Animation();
    }

    private setupIdleAnimation(): void {
        const frames: Texture[] = [];

        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = Texture.from(`${this.filePath}/Idle/${i}.png`)
            frames.push(frame);
        }

        this.animations.set("idle", frames);
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
}