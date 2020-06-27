class Opponent extends Animation {
  constructor(
    matriz,
    image,
    personageX,
    personageY,
    personageWidth,
    personageHeight,
    widthSprite,
    heightSprite
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
    )
    this.speed = 10
  }

  move() {
    this.personageX = this.personageX - this.speed
    this.personageX < -this.personageHeight && (this.personageX = width)
  }
}
