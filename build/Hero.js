"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = /** @class */ (function () {
    function Hero(name, app, posX, posY) {
        this.name = name;
        this.filePath = "./Assets/".concat(name, "/");
        this.app = app;
        var attackButtons = this.showAttackButtons();
        this.setEventListeners(attackButtons);
        this.animations = this.getAllAnimations();
        this.currentAnimation = "idle";
        this.player = new PIXI.AnimatedSprite(this.animations["idle"]);
        this.app.stage.addChild(this.player).play();
        this.player.x = posX;
        this.player.y = posY;
        //this.player.anchor.set(0.5);
    }
    Hero.prototype.getAllAnimations = function () {
        var _this = this;
        var animations = [];
        var idle = this.animateIdle();
        var attack1 = this.animateSkill1();
        attack1.onComplete = function () {
            _this.app.stage.removeChild(_this.animations.get(_this.currentAnimation));
        };
        var attack2 = this.animateSkill2();
        var attack3 = this.animateSkill3();
        var attack4 = this.animateSkill4();
        animations["idle"] = idle;
        animations["attack1"] = attack1;
        animations["attack2"] = attack2;
        animations["attack3"] = attack3;
        animations["attack4"] = attack4;
        return animations;
    };
    Hero.prototype.animateIdle = function () {
        var frames = [];
        for (var i = 1; i <= 110; i++) {
            //limitate time of frame 
            var frame = {
                texture: PIXI.Texture.from("".concat(this.filePath, "/Idle/").concat(i, ".png")),
                time: 33
            };
            frames.push(frame);
        }
        return frames;
    };
    Hero.prototype.animateSkill1 = function () {
        var frames = [];
        for (var i = 111; i <= 150; i++) {
            //limitate time of frame 
            var frame = {
                texture: PIXI.Texture.from("".concat(this.filePath, "Attack1/").concat(i, ".png")),
                time: 33
            };
            frames.push(frame);
        }
        return frames;
    };
    Hero.prototype.animateSkill2 = function () {
        var frames = [];
        for (var i = 224; i <= 262; i++) {
            //limitate time of frame 
            var frame = {
                texture: PIXI.Texture.from("".concat(this.filePath, "Attack2/").concat(i, ".png")),
                time: 33
            };
            frames.push(frame);
        }
        return frames;
    };
    Hero.prototype.animateSkill3 = function () {
        var frames = [];
        for (var i = 179; i <= 223; i++) {
            //limitate time of frame 
            var frame = {
                texture: PIXI.Texture.from("".concat(this.filePath, "Attack3/").concat(i, ".png")),
                time: 33
            };
            frames.push(frame);
        }
        return frames;
    };
    Hero.prototype.animateSkill4 = function () {
        var frames = [];
        for (var i = 263; i <= 304; i++) {
            //limitate time of frame 
            var frame = {
                texture: PIXI.Texture.from("".concat(this.filePath, "Attack4/").concat(i, ".png")),
                time: 33
            };
            frames.push(frame);
        }
        return frames;
    };
    Hero.prototype.showAttackButtons = function () {
        var container = new PIXI.Container();
        container.name = "ButtonsContainer";
        var a1 = new PIXI.Sprite.from("".concat(this.filePath, "/Attack_Icons/Attack1.png"));
        container.addChild(a1);
        var a2 = new PIXI.Sprite.from("".concat(this.filePath, "/Attack_Icons/Attack2.png"));
        container.addChild(a2);
        var a3 = new PIXI.Sprite.from("".concat(this.filePath, "/Attack_Icons/Attack3.png"));
        container.addChild(a3);
        var a4 = new PIXI.Sprite.from("".concat(this.filePath, "/Attack_Icons/Attack4.png"));
        container.addChild(a4);
        a1.x = 200;
        a1.y = 530;
        a2.x = 300;
        a2.y = 530;
        a3.x = 400;
        a3.y = 530;
        a4.x = 500;
        a4.y = 530;
        this.app.stage.addChild(container);
        return [a1, a2, a3, a4];
    };
    Hero.prototype.setEventListeners = function (arr) {
        var _this = this;
        arr[0].interactive = true;
        arr[0].on('pointerdown', function () {
            _this.app.stage.getChildByName("ButtonsContainer").visible = false;
            _this.currentAnimation = "attack1";
            _this.player.textures = _this.animations[_this.currentAnimation];
            _this.player.loop = false;
            _this.player.play();
            _this.player.onComplete = function () {
                _this.currentAnimation = "idle";
                _this.player.textures = _this.animations[_this.currentAnimation];
                _this.player.play();
                _this.app.stage.getChildByName("ButtonsContainer").visible = true;
            };
        });
        arr[1].interactive = true;
        arr[1].on('pointerdown', function () {
            _this.app.stage.getChildByName("ButtonsContainer").visible = false;
            _this.currentAnimation = "attack2";
            _this.player.textures = _this.animations[_this.currentAnimation];
            _this.player.loop = false;
            _this.player.play();
            _this.player.onComplete = function () {
                _this.currentAnimation = "idle";
                _this.player.textures = _this.animations[_this.currentAnimation];
                _this.player.play();
                _this.app.stage.getChildByName("ButtonsContainer").visible = true;
            };
        });
        arr[2].interactive = true;
        arr[2].on('pointerdown', function () {
            _this.app.stage.getChildByName("ButtonsContainer").visible = false;
            _this.currentAnimation = "attack3";
            _this.player.textures = _this.animations[_this.currentAnimation];
            _this.player.loop = false;
            _this.player.play();
            _this.player.onComplete = function () {
                _this.currentAnimation = "idle";
                _this.player.textures = _this.animations[_this.currentAnimation];
                _this.player.play();
                _this.app.stage.getChildByName("ButtonsContainer").visible = true;
            };
        });
        arr[3].interactive = true;
        arr[3].on('pointerdown', function () {
            _this.app.stage.getChildByName("ButtonsContainer").visible = false;
            _this.currentAnimation = "attack4";
            _this.player.textures = _this.animations[_this.currentAnimation];
            _this.player.loop = false;
            _this.player.play();
            _this.player.onComplete = function () {
                _this.currentAnimation = "idle";
                _this.player.textures = _this.animations[_this.currentAnimation];
                _this.player.play();
                _this.app.stage.getChildByName("ButtonsContainer").visible = true;
            };
        });
    };
    return Hero;
}());
exports.default = Hero;
