import { Application } from "@pixi/app";
import { Sprite } from "@pixi/sprite";

export default class BattleScreen {

    constructor(app: Application) {
        this.setAllyBattleInfo(app);
        this.setEnemyBattleInfo(app);
        this.setBackground(app);
    }

    setAllyBattleInfo(app: Application): void {
        const p1Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        const p2Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        const p3Bar = Sprite.from("./Assets/Background/Down_Info/ally_idle.png");

        p1Bar.x = 8;
        p1Bar.y = 585;

        p2Bar.x = 8;
        p2Bar.y = 609;

        p3Bar.x = 8;
        p3Bar.y = 634;

        app.stage.addChild(p1Bar);
        app.stage.addChild(p2Bar);
        app.stage.addChild(p3Bar);
    }

    setEnemyBattleInfo(app: Application): void {
        const p1Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");
        const p2Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");
        const p3Bar = Sprite.from("./Assets/Background/Down_Info/enemy.png");

        //8 base

        p1Bar.x = 388;
        p1Bar.y = 585;

        p2Bar.x = 388;
        p2Bar.y = 609;

        p3Bar.x = 388;
        p3Bar.y = 634;

        app.stage.addChild(p1Bar);
        app.stage.addChild(p2Bar);
        app.stage.addChild(p3Bar);
    }

    setBackground(app: Application): void {
        const bg = Sprite.from("./Assets/Background/Combat_Background_001.jpg");
        app.stage.addChild(bg);
        bg.x = 3;

        const battleInfo = Sprite.from("./Assets/Background/Battle_Information.png");
        battleInfo.y = 580;
        app.stage.addChild(battleInfo);

        this.setAllyBattleInfo(app);
        this.setEnemyBattleInfo(app);
    }
}