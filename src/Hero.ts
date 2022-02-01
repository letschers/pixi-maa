import { Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { AnimatedSprite } from "@pixi/sprite-animated";
export default class Hero {

    public sprite!: AnimatedSprite;
    //public animations!: AnimatedSprite[];
    public animations!: Map<string, AnimatedSprite>;
    private filePath: string;

    constructor() {
        this.animations = new Map();
        this.filePath = "./Assets/Captain America"
        //this.sprite = Sprite.from("./Assets/Captain America/Idle/1.png");
        this.setupAnimations();
        
        this.sprite = new AnimatedSprite(this.animations.get("idle")!.textures);
        this.sprite.play();

        this.sprite.interactive = true;

        this.sprite.on('pointerdown', () => {
            console.log("Clicked");
            this.sprite.textures = this.animations.get("attack1")!.textures;
            this.sprite.loop = false;
            this.sprite.onComplete = () => { 
                this.sprite.textures = this.animations.get("idle")!.textures;
                this.sprite.play();
            }
            this.sprite.play();

        });

        //this.sprite = this.animations.get("attack1")!;
        //this.sprite.play();


    }


    private setupAnimations(): void {
        this.setupIdleAnimation();
        this.setupAttack1Animation();
    }

    private setupIdleAnimation(): void {
        const frames: {
            texture: Texture;
            time: number
        }[] = [];

        for (let i = 1; i <= 110; i++) {
            //limitate time of frame 
            const frame = {
                texture: Texture.from(`${this.filePath}/Idle/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        this.animations.set("idle", new AnimatedSprite(frames));
    }

    private setupAttack1Animation(): void {
        const frames: {
            texture: Texture;
            time: number
        }[] = [];

        for (let i = 111; i <= 150; i++) {
            //limitate time of frame 
            const frame = {
                texture: Texture.from(`${this.filePath}/Attack1/${i}.png`),
                time: 33
            }
            frames.push(frame);
        }

        this.animations.set("attack1", new AnimatedSprite(frames));
        this.animations.get("attack1")!.loop = false;
        this.animations.get("attack1")!.onComplete = () => {
            this.sprite = this.animations.get("idle")!;
            this.sprite.play();
        }
    }




    /*public changeSprite(): void {
        this.sprite.texture = Sprite.from("./Assets/Captain America/Attack3/191.png").texture;
    }*/
}