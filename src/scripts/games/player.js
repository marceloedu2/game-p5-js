class Player extends Animation {
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
    this.personageYInitial = height - personageHeight - personageY
    this.personageY = this.personageYInitial
    this.jumpSpeed = 0
    this.gravity = 2
  }

  jump() {
    this.jumpSpeed = -30
  }

  applyGravity() {
    this.personageY = this.personageY + this.jumpSpeed
    this.jumpSpeed = this.jumpSpeed + this.gravity
    if (this.personageY > this.personageYInitial) {
      this.personageY = this.personageYInitial
      jump = 0
    }
  }

  collision(opponent) {
    const precision = 0.7
    return collideRectRect(
      this.personageX,
      this.personageY,
      this.personageWidth * precision,
      this.personageHeight * precision,
      opponent.personageX,
      opponent.personageY,
      opponent.personageWidth * precision,
      opponent.personageHeight * precision
    )
  }
}
