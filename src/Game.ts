import { Application, Sprite, Container, Ticker, DisplayObject, Loader, AnimatedSprite, Spritesheet, Texture } from "pixi.js";
import CaptainAmerica from "./heroes/CaptainAmerica";
import { Hero } from "./interfaces/Hero.h";

export default class Game {
    public app: Application;
    private actualContainer!: Container;
    private imagesPath: string = "./assets/";
    public loader: Loader = new Loader();
    public heroAnimations: Map<string, Texture[]> = new Map();
    public heros: Hero[] = [];


    constructor(width: number, height: number) {
        this.app = new Application({
            width: width,
            height: height,
            antialias: true,
            backgroundColor: 0xff0000,
            sharedTicker: true,
        });

        const ticker = Ticker.shared;
        ticker.maxFPS = 60;
        document.body.appendChild(this.app.view);

        this.app.loader.add([
            { name: "idle", url: "/assets/captain-america/idle/spritesheet.json" },
            { name: "attack-1", url: "/assets/captain-america/attack-1/spritesheet.json" },
            { name: "attack-2", url: "/assets/captain-america/attack-2/spritesheet.json" },
            { name: "attack-3", url: "/assets/captain-america/attack-3/spritesheet.json" },
            { name: "attack-4", url: "/assets/captain-america/attack-4/spritesheet.json" },
        ]).load(() => {
            Object.entries(this.app.loader.resources).map((elem) => {
                elem[1].spritesheet?.parse((textures) => {
                    this.heroAnimations.set(elem[0], Object.values(textures as object));
                })
            })
            this.initGame();
        })
    }

    public initGame() {
        this.setBattleBackground();

        this.heros.push(new CaptainAmerica(this.heroAnimations))
        this.addCharacter(100, 100, this.heros[0])
        this.setAttackIcons(this.heros[0].getButtonsSprites(), this.heros[0]);

    }



    //load assets then init game
    public loadAssets(heroPath: string): AnimatedSprite[] {
        throw "Not implemented yet";
    }


    public setAttackIcons(heroIcons: Sprite[], hero: Hero): void {
        const attackIconsContainer = new Container();
        attackIconsContainer.name = "attackIconsContainer";

        attackIconsContainer.addChild(heroIcons[0]);
        heroIcons[0].x = 200;
        heroIcons[0].y = 530;

        attackIconsContainer.addChild(heroIcons[1]);
        heroIcons[1].x = 300;
        heroIcons[1].y = 530;

        attackIconsContainer.addChild(heroIcons[2]);
        heroIcons[2].x = 400;
        heroIcons[2].y = 530;

        attackIconsContainer.addChild(heroIcons[3]);
        heroIcons[3].x = 500;
        heroIcons[3].y = 530;

        this.app.stage.addChild(attackIconsContainer);
        this.setAttackIconsEventListener(attackIconsContainer.children, hero)
    }

    public setAttackIconsEventListener(heroIcons: DisplayObject[], hero: Hero): void {
        heroIcons[0].interactive = true;
        heroIcons[0].on('pointerdown', () => {
            hero.playAnimation("attack-1", true);
            this.app.stage.getChildByName("attackIconsContainer").visible = false;

            this.heros[0].sprite.onComplete = () => {
                hero.playAnimation("idle");
                this.app.stage.getChildByName("attackIconsContainer").visible = true;
            }
        });

        //heroIcons[0].on('pointerdown', () => { hero.sprite.visible === true ? hero.sprite.visible = false : hero.sprite.visible = true; })
        //heroIcons[0].on('pointerdown', () => { hero.sprite.playing === true ? hero.sprite.stop() : hero.sprite.play() })

        heroIcons[1].interactive = true;
        heroIcons[1].on('pointerdown', () => {
            hero.playAnimation("attack-2", true);
            this.app.stage.getChildByName("attackIconsContainer").visible = false;

            this.heros[0].sprite.onComplete = () => {
                hero.playAnimation("idle");
                this.app.stage.getChildByName("attackIconsContainer").visible = true;
            }
        });

        heroIcons[2].interactive = true;
        heroIcons[2].on('pointerdown', () => {
            hero.playAnimation("attack-3", true);
            this.app.stage.getChildByName("attackIconsContainer").visible = false;

            this.heros[0].sprite.onComplete = () => {
                hero.playAnimation("idle");
                this.app.stage.getChildByName("attackIconsContainer").visible = true;
            }
        });

        heroIcons[3].interactive = true;
        heroIcons[3].on('pointerdown', () => {
            hero.playAnimation("attack-4", true);
            this.app.stage.getChildByName("attackIconsContainer").visible = false;

            this.heros[0].sprite.onComplete = () => {
                hero.playAnimation("idle");
                this.app.stage.getChildByName("attackIconsContainer").visible = true;
            }
        });

    }

    public setBattleBackground(): void {
        this.actualContainer = new Container();
        this.actualContainer.name = "BattleContainer";

        this.actualContainer.addChild(...this.setBackground());
        this.actualContainer.addChild(...this.setEnemyBattleInfo());
        this.actualContainer.addChild(...this.setAllyBattleInfo());

        this.app.stage.addChild(this.actualContainer);
    }

    public removeBattleBackground(): void {
        this.app.stage.removeChild(this.app.stage.getChildByName("BattleContainer"));
    }

    public addCharacter(x: number, y: number, hero: Hero): void {
        this.actualContainer.addChild(hero.sprite);
        hero.sprite.x = -100;
        hero.sprite.y = y;
    }

    private setAllyBattleInfo(): Sprite[] {
        const p1Bar = Sprite.from(this.imagesPath + "background/down_info/ally_idle.png");
        const p2Bar = Sprite.from(this.imagesPath + "background/down_info/ally_idle.png");
        const p3Bar = Sprite.from(this.imagesPath + "background/down_info/ally_idle.png");

        p1Bar.x = 8;
        p1Bar.y = 585;
        p1Bar.name = "Player1Bar";

        p2Bar.x = 8;
        p2Bar.y = 609;
        p2Bar.name = "Player2Bar";

        p3Bar.x = 8;
        p3Bar.y = 634;
        p3Bar.name = "Player3Bar";

        return [p1Bar, p2Bar, p3Bar];
    }

    private setEnemyBattleInfo(): Sprite[] {
        const e1Bar = Sprite.from(this.imagesPath + "background/down_info/enemy.png");
        const e2Bar = Sprite.from(this.imagesPath + "background/down_info/enemy.png");
        const e3Bar = Sprite.from(this.imagesPath + "background/down_info/enemy.png");

        //8 base

        e1Bar.x = 388;
        e1Bar.y = 585;
        e1Bar.name = "Enemy1Bar";


        e2Bar.x = 388;
        e2Bar.y = 609;
        e1Bar.name = "Enemy2Bar";

        e3Bar.x = 388;
        e3Bar.y = 634;
        e1Bar.name = "Enemy3Bar";

        return [e1Bar, e2Bar, e3Bar];
    }

    private setBackground(): Sprite[] {

        const bg = Sprite.from(this.imagesPath + "background/combat_background_001.jpg");
        bg.x = 3;
        bg.name = "Background Image";

        const battleInfo = Sprite.from(this.imagesPath + "background/battle_information.png");
        battleInfo.y = 580;
        battleInfo.name = "BattleInfo";


        return [bg, battleInfo];
    }
}