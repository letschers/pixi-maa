import { Application } from "@pixi/app";
import { Container } from "@pixi/display";
import { AnimatedSprite } from "@pixi/sprite-animated";

export type Game = {
    app: Application;
    actualContainer?: Container;
    imagesPath: string;
}

export type Hero = {
    name: string;
    imagePath: string;
    sprite: AnimatedSprite;
    status: any //Map<string, number>;
    effects: any //object;
    skills: any //object;
    
    
    //skill1() : any
}