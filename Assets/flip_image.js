const sharp = require("sharp");

const loopThruImages = amount => {
    for (let i = 1; i <= amount; i++) {
        flopImage("./Wolverine Inverted/", "./Wolverine/", i);
    }
}

async function flopImage(addressBefore, addressAfter, num) {
    try {
        await sharp(`${addressBefore}${num}.png`)
            .flop()
            .toFile(`${addressAfter}${num}.png`);
    } catch (error) {
        console.log(error);
    }
}

loopThruImages(615);
