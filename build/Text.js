"use strict";
var addText = function (app) {
    var style = new PIXI.TextStyle({
        fontFamily: "MicroExtendFLF"
    });
    var text = new PIXI.Text('Bleeding', style);
    app.stage.addChild(text);
};
