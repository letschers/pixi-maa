import { AnimatedSprite, Loader, Resource, Sprite, Texture } from "pixi.js";

export interface Hero {
    readonly name: string;
    readonly animations: Map<string, Texture[]>;
    sprite: AnimatedSprite;

    getButtonsSprites(): Sprite[];
    playAnimation(animation: Texture<Resource>[] | string, once?: boolean): void;
    setupAnimations(loader: Loader): void;
}