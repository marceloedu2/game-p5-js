class Animation {
  constructor(
    matriz,
    image,
    personageX,
    personageY,
    width,
    height,
    widthSprite,
    heightSprite
  ) {
    this.matriz = matriz
    this.image = image
    this.personageX = personageX
    this.personageY = personageY
    this.width = width
    this.height = height
    this.widthSprite = widthSprite
    this.heightSprite = heightSprite
    this.currentFrame = 0
  }

  show() {
    image(
      this.image,
      this.personageX,
      this.personageY,
      this.width,
      this.height,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      this.widthSprite,
      this.heightSprite
    )
    this.animation()
  }

  animation() {
    this.currentFrame >= this.matriz.length - 1
      ? (this.currentFrame = 0)
      : this.currentFrame++
  }
}
