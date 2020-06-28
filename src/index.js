let imagePanorama;
let imageGameOver;
let imagePlayer;
let imageOpponentDroplet;
let imageOpponentTroll;
let imageOpponentFlyngDroplet;

let panorama;
let player;
let opponentDroplet;
let opponentTroll;
let opponentFlyngDroplet;

let opponents = [];
let currentOpponents = 0;

let points;

let backgroundSound;
let jumpSound;
let damageSound;
let loseSound;

function preload() {
  backgroundSound = loadSound("./src/assets/sounds/backgroundSound.mp3");
  jumpSound = loadSound("./src/assets/sounds/jumpSound.ogg");
  damageSound = loadSound("./src/assets/sounds/damageSound.ogg");
  loseSound = loadSound("./src/assets/sounds/loseSound.mp3");

  imageGameOver = loadImage("./src/assets/images/panoramas/gameOver.png");
  imagePanorama = loadImage("./src/assets/images/panoramas/florest.png");

  imagePlayer = loadImage("./src/assets/images/player/runner.png");
  imageOpponentDroplet = loadImage(
    "./src/assets/images/opponents/droplets.png"
  );
  imageOpponentTroll = loadImage("./src/assets/images/opponents/troll.png");
  imageOpponentFlyngDroplet = loadImage(
    "./src/assets/images/opponents/flyngDroplets.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  panorama = new Panorama(imagePanorama, 10);
  player = new Player(matrizPlayer, imagePlayer, 40, 20, 220, 270, 220, 270);
  points = new Points();
  const opponentDroplet = new Opponent(
    matrizOpponentDroplet,
    imageOpponentDroplet,
    width,
    20,
    100,
    100,
    104,
    104,
    10,
    100
  );

  const opponentTroll = new Opponent(
    matrizOpponentTroll,
    imageOpponentTroll,
    width,
    -10,
    400,
    400,
    400,
    400,
    20,
    100
  );

  const opponentFlyngDroplet = new Opponent(
    matrizOpponentFlyngDroplet,
    imageOpponentFlyngDroplet,
    width,
    300,
    120,
    120,
    200,
    150,
    25,
    100
  );

  opponents.push(opponentDroplet);
  opponents.push(opponentTroll);
  opponents.push(opponentFlyngDroplet);

  //backgroundSound.loop();

  frameRate(40);
}
function keyPressed() {
  if (key === "ArrowUp") {
    player.jump();
  }
}

function draw() {
  panorama.show();
  panorama.move();
  points.show();
  points.addPoints();

  player.show();
  player.applyGravity();

  const opponent = opponents[currentOpponents];
  const showOpponent = opponent.personageX < -opponent.personageWidth;

  opponent.show();
  opponent.move();

  if (showOpponent) {
    currentOpponents++;
    if (currentOpponents > 2) {
      currentOpponents = 0;
    }
    opponent.speed = random(5, 30);
  }

  if (player.collision(opponents[currentOpponents])) {
    image(imageGameOver, width / 2 - 200, height / 3);
    damageSound.play();
    backgroundSound.stop();
    //loseSound.play()
    noLoop();
  }
}
