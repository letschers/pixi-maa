import { Application, Sprite, Container, Ticker } from "pixi.js";

export default class Game /*extends Application*/ {

    /*constructor(width: number, height: number) {
        super({
            width: width,
            height: height,
            antialias: true,
            backgroundColor: 0xff0000
        })
    }*/

    public app: Application;
    private actualContainer!: Container;

    constructor(width: number, height: number) {
        this.app = this.createCanvas(width, height);
    }

    private createCanvas(width: number, height: number): Application {
        const app = new Application({
            width: width,
            height: height,
            antialias: true,
            backgroundColor: 0xff0000,
            sharedTicker: true
        });

        const ticker = Ticker.shared;
        ticker.maxFPS = 30;

        document.body.appendChild(app.view);

        return app;
    }

    public setBattleBackground(): void {

        this.actualContainer = new Container();
        this.actualContainer.name = "BattleContainer";

        this.actualContainer.addChild(...this.getBackground());
        this.actualContainer.addChild(...this.getEnemyBattleInfo());
        this.actualContainer.addChild(...this.getAllyBattleInfo());

        this.app.stage.addChild(this.actualContainer);
    }

    public removeBattleBackground(): void {
        this.app.stage.removeChild(this.app.stage.getChildByName("BattleContainer"));
    }

    private getAllyBattleInfo(): Sprite[] {
        const p1Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        const p2Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        const p3Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");

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

        //this.app.stage.addChild(p1Bar);
        //this.app.stage.addChild(p2Bar);
        //this.app.stage.addChild(p3Bar);
    }

    private getEnemyBattleInfo(): Sprite[] {
        const e1Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");
        const e2Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");
        const e3Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");

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

        //this.app.stage.addChild(p1Bar);
        //this.app.stage.addChild(p2Bar);
        //this.app.stage.addChild(p3Bar);
    }

    private getBackground(): Sprite[] {
        const bg = Sprite.from("./Assets/Background/Combat_Background_001.jpg");
        //this.app.stage.addChild(bg);
        bg.x = 3;
        bg.name = "Background Image";

        const battleInfo = Sprite.from("./Assets/Background/Battle_Information.png");
        battleInfo.y = 580;
        battleInfo.name = "BattleInfo";

        //this.app.stage.addChild(battleInfo);

        return [bg, battleInfo];

        //this.setAllyBattleInfo();
        //this.setEnemyBattleInfo();

    }
}