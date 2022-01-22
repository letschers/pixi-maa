const addText = app => {
    const style = new PIXI.TextStyle({
        fontFamily: "MicroExtendFLF"
    });
    const text = new PIXI.Text('Bleeding', style);

    app.stage.addChild(text);
}

