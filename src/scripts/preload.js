function preload() {
  ribbon = loadJSON("./src/configs/ribbon.json");
  backgroundSound = loadSound("./src/assets/sounds/backgroundSound.mp3");
  jumpSound = loadSound("./src/assets/sounds/jumpSound.ogg");
  damageSound = loadSound("./src/assets/sounds/damageSound.ogg");
  loseSound = loadSound("./src/assets/sounds/loseSound.mp3");

  fontHomeScreen = loadFont("./src/assets/fonts/textFont.otf");

  imageGameOver = loadImage("./src/assets/images/panoramas/gameOver.png");
  imagePanorama = loadImage("./src/assets/images/panoramas/florest.png");

  backgroundLayer0 = loadImage(
    "./src/assets/images/background/Layer_0000_9.png"
  );
  backgroundLayer1 = loadImage(
    "./src/assets/images/background/Layer_0001_8.png"
  );
  backgroundLayer2 = loadImage(
    "./src/assets/images/background/Layer_0002_7.png"
  );
  backgroundLayer3 = loadImage(
    "./src/assets/images/background/Layer_0003_6.png"
  );
  backgroundLayer4 = loadImage(
    "./src/assets/images/background/Layer_0004_Lights.png"
  );
  backgroundLayer5 = loadImage(
    "./src/assets/images/background/Layer_0005_5.png"
  );
  backgroundLayer6 = loadImage(
    "./src/assets/images/background/Layer_0006_4.png"
  );
  backgroundLayer7 = loadImage(
    "./src/assets/images/background/Layer_0007_Lights.png"
  );
  backgroundLayer8 = loadImage(
    "./src/assets/images/background/Layer_0008_3.png"
  );
  backgroundLayer9 = loadImage(
    "./src/assets/images/background/Layer_0009_2.png"
  );
  backgroundLayer10 = loadImage(
    "./src/assets/images/background/Layer_0010_1.png"
  );

  imagePlayerRun = loadImage("./src/assets/images/player/run.png");
  imagePlayerJump = loadImage("./src/assets/images/player/jump.png");

  imageOpponentWalkFemale = loadImage(
    "./src/assets/images/opponents/walkFemale.png"
  );
  imageOpponentWalkMale = loadImage(
    "./src/assets/images/opponents/walkMale.png"
  );

  imageHomeScreen = loadImage("./src/assets/images/panoramas/homeScreen.png");
  imageLifePoints = loadImage("./src/assets/images/panoramas/heart.png");

  imagePlayer = loadImage("./src/assets/images/player/runner.png");
  imageOpponentDroplet = loadImage(
    "./src/assets/images/opponents/droplets.png"
  );
  imageOpponentTroll = loadImage("./src/assets/images/opponents/troll.png");
  imageOpponentFlyngDroplet = loadImage(
    "./src/assets/images/opponents/flyngDroplets.png"
  );
}
