const DUCK_IMAGE = new Image();
DUCK_IMAGE.src ="RubberDucky.png";

const PLAYER_IMAGE = new Image();
PLAYER_IMAGE.src = "rabbit_normal.png";

const CARROT_IMAGE = new Image();
CARROT_IMAGE.src ="carrot.png";

const EXPLOSION_IMAGES = [];
for (let i = 1; i <= 90; i++) {
    let numberstring = "00" + (i <= 9 ? "0" : "") + i;
    const img = new Image();
    img.src = `explosion/64x48/explosion1_${numberstring}.png`;
    EXPLOSION_IMAGES.push(img);

    console.log(img.src);
}