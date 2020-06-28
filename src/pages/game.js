class Game {
  constructor() {
    this.indice = 0;
    this.map = [
      {
        opponent: 0,
        speed: 10,
      },
      {
        opponent: 1,
        speed: 15,
      },
      {
        opponent: 1,
        speed: 15,
      },
      {
        opponent: 2,
        speed: 40,
      },
    ];
  }

  setup() {
    panorama = new Panorama(imagePanorama, 10);
    player = new Player(matrizPlayer, imagePlayer, 40, 20, 220, 270, 220, 270);
    life = new LifePoints(3, 3);
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
      10
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
      20
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
      25
    );

    opponents.push(opponentDroplet);
    opponents.push(opponentTroll);
    opponents.push(opponentFlyngDroplet);

    backgroundSound.loop();
  }
  keyPressed(key) {
    if (key === "ArrowUp") {
      player.jump();
    }
  }

  draw() {
    panorama.show();
    panorama.move();
    points.show();
    points.addPoints();
    life.draw();

    player.show();
    player.applyGravity();
    const currentLine = this.map[this.indice];
    const opponent = opponents[currentLine.opponent];
    const showOpponent = opponent.personageX < -opponent.personageWidth;
    opponent.speed = currentLine.speed;

    opponent.show();
    opponent.move();

    if (showOpponent) {
      this.indice++;
      opponent.reShow();
      if (this.indice > this.map.length - 1) {
        this.indice = 0;
      }
    }

    if (player.collision(opponent)) {
      life.loseAlive();
      player.isInvulnerable();
      damageSound.play();
      if (life.lives <= 0) {
        image(imageGameOver, width / 2 - 200, height / 3);
        backgroundSound.stop();
        //loseSound.play();
        noLoop();
      }
    }
  }
}
