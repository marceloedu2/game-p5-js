class LifePoints {
  constructor(max, initial) {
    this.max = max;
    this.initial = initial;
    this.lives = this.initial;
    this.width = 25;
    this.heigth = 25;
    this.xInition = 20;
    this.y = 20;
  }
  draw() {
    for (let i = 0; i < this.lives; i++) {
      const margin = i * 10;
      const position = this.xInition * (1 + i);
      image(
        imageLifePoints,
        position + margin,
        this.y,
        this.width,
        this.heigth
      );
    }
  }

  comesAlive() {
    if (this.lives <= this.max) {
      this.lives++;
    }
  }

  loseAlive() {
    this.lives--;
  }
}
