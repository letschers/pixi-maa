import { AnimatedSprite, Sprite, Texture } from "pixi.js";

export interface Hero {
    readonly name: string;
    readonly animations: Map<string, Texture[]>;
    readonly sprite: AnimatedSprite;

    getButtonsSprites(): Sprite[];
    playAnimationFromTexture(texture: Texture[]): void;


}