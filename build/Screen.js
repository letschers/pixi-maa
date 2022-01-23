"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen() {
        return this.setupCanvas();
    }
    Screen.prototype.setupCanvas = function () {
        var app = new PIXI.Application({
            width: 765,
            height: 765,
            antialias: true,
            backgroundColor: 0xff0000
        });
        document.body.appendChild(app.view);
        this.setBackground(app);
        return app;
    };
    Screen.prototype.setAllyBattleInfo = function (app) {
        var p1Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        var p2Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        var p3Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/ally_idle.png");
        p1Bar.x = 8;
        p1Bar.y = 585;
        p2Bar.x = 8;
        p2Bar.y = 609;
        p3Bar.x = 8;
        p3Bar.y = 634;
        app.stage.addChild(p1Bar);
        app.stage.addChild(p2Bar);
        app.stage.addChild(p3Bar);
    };
    Screen.prototype.setEnemyBattleInfo = function (app) {
        var p1Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/enemy.png");
        var p2Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/enemy.png");
        var p3Bar = new PIXI.Sprite.from("./Assets/Background/Down_Info/enemy.png");
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
    };
    Screen.prototype.setBackground = function (app) {
        var bg = new PIXI.Sprite.from("./Assets/Background/Combat_Background_001.jpg");
        app.stage.addChild(bg);
        bg.x = 3;
        var battleInfo = new PIXI.Sprite.from("./Assets/Background/Battle_Information.png");
        battleInfo.y = 580;
        app.stage.addChild(battleInfo);
        this.setAllyBattleInfo(app);
        this.setEnemyBattleInfo(app);
    };
    return Screen;
}());
exports.default = Screen;
