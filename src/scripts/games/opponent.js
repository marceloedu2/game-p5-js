class Opponent extends Animation {
  constructor(
    matriz,
    image,
    personageX,
    personageY,
    personageWidth,
    personageHeight,
    widthSprite,
    heightSprite,
    speed,
    delay
  ) {
    super(
      matriz,
      image,
      personageX,
      personageY,
      personageWidth,
      personageHeight,
      widthSprite,
      heightSprite
    );
    this.speed = speed;
    this.delay = delay;
    this.personageX = width + this.delay;
  }

  move() {
    this.personageX = this.personageX - this.speed;
    this.personageX < -this.personageHeight - this.delay &&
      (this.personageX = width);
  }
}
