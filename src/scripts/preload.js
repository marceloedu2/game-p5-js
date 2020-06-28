function preload() {
  backgroundSound = loadSound("./src/assets/sounds/backgroundSound.mp3");
  jumpSound = loadSound("./src/assets/sounds/jumpSound.ogg");
  damageSound = loadSound("./src/assets/sounds/damageSound.ogg");
  loseSound = loadSound("./src/assets/sounds/loseSound.mp3");

  fontHomeScreen = loadFont("./src/assets/fonts/textFont.otf");

  imageGameOver = loadImage("./src/assets/images/panoramas/gameOver.png");
  imagePanorama = loadImage("./src/assets/images/panoramas/florest.png");
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
