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
    speed
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

    this.personageX = width;
  }

  move() {
    this.personageX = this.personageX - this.speed;
    //this.personageX < -this.personageHeight && (this.personageX = width);
  }

  reShow() {
    this.personageX = width;
  }
}
