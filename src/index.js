import { AnimatedSprite } from "@pixi/sprite-animated";
import Game from "./Game";
import CaptainAmerica from "./heroes/CaptainAmerica";
import Wolverine from "./heroes/Wolverine";
const app = new Game(765, 765);
app.setBattleBackground();
const captainAmerica = new CaptainAmerica();
const wolverine = new Wolverine();
//app.addCharacter(100, 100, captainAmerica);
app.addCharacter(0, 0, captainAmerica);
app.setAttackIcons(captainAmerica.getButtonsSprites(), captainAmerica);
//app.addCharacter(0, 0, wolverine);
//app.setAttackIcons(wolverine.getButtonsSprites(), wolverine);
app.app.loader.add("/assets/captain-america/idle/spritesheet.json").load(() => {
    const sheet = app.app.loader.resources["/assets/captain-america/idle/spritesheet.json"].spritesheet;
    const textures = [];
    for (let i in sheet === null || sheet === void 0 ? void 0 : sheet.textures) {
        textures.push(sheet === null || sheet === void 0 ? void 0 : sheet.textures[i]);
    }
    const animation = new AnimatedSprite(textures);
});
//# sourceMappingURL=index.js.map