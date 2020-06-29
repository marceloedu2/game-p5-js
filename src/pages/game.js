class Game {
  constructor() {
    this.indice = 0;
    this.map = ribbon.map;
  }

  setup() {
    panorama0 = new Panorama(backgroundLayer10, 1);
    panorama1 = new Panorama(backgroundLayer9, 2);
    panorama2 = new Panorama(backgroundLayer8, 3);
    panorama3 = new Panorama(backgroundLayer7, 4);
    panorama4 = new Panorama(backgroundLayer6, 5);
    panorama5 = new Panorama(backgroundLayer5, 6);
    panorama6 = new Panorama(backgroundLayer4, 7);
    panorama7 = new Panorama(backgroundLayer3, 9);
    panorama8 = new Panorama(backgroundLayer2, 9);
    panorama9 = new Panorama(backgroundLayer1, 10);
    panorama10 = new Panorama(backgroundLayer0, 10);

    player = new Player(
      matrizPlayerRun,
      imagePlayerRun,
      40,
      72,
      80,
      120,
      363,
      458
    );
    life = new LifePoints(ribbon.configs.maxLife, ribbon.configs.initialLife);
    points = new Points();
    //backgroundSound.loop();

    const opponentWalkFemale = new Opponent(
      matrizOpponentWalkFemale,
      imageOpponentWalkFemale,
      width,
      72,
      80,
      120,
      430,
      519,
      10
    );

    const opponentWalkMale = new Opponent(
      matrizOpponentWalkMale,
      imageOpponentWalkMale,
      width,
      72,
      80,
      120,
      521,
      576,
      10
    );

    const opponentDroplet = new Opponent(
      matrizOpponentDroplet,
      imageOpponentDroplet,
      width,
      72,
      60,
      60,
      104,
      104,
      10
    );

    const opponentFlyngDroplet = new Opponent(
      matrizOpponentFlyngDroplet,
      imageOpponentFlyngDroplet,
      width,
      200,
      70,
      60,
      200,
      150,
      25
    );
    opponents.push(opponentDroplet);
    opponents.push(opponentFlyngDroplet);
    opponents.push(opponentWalkFemale);
    opponents.push(opponentWalkMale);
  }
  keyPressed(key) {
    if (key === "ArrowUp") {
      player.jump(matrizPlayerRun, imagePlayerRun);
    }
  }

  draw() {
    panorama0.show();
    panorama1.show();
    panorama2.show();
    panorama3.show();
    panorama4.show();
    panorama5.show();
    panorama6.show();
    panorama7.show();
    panorama8.show();
    panorama9.show();
    panorama10.show();

    panorama0.move();
    panorama1.move();
    panorama2.move();
    panorama3.move();
    panorama4.move();
    panorama5.move();
    panorama6.move();
    panorama7.move();
    panorama8.move();
    panorama9.move();
    panorama10.move();

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
        loseSound.play();
        noLoop();
      }
    }
  }
}
