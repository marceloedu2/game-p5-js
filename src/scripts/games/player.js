class Player {
  constructor(image) {
    this.image = image
    this.matriz = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
    ]
    this.currentFrame = 0
    this.personageX = 220
    this.personageY = 270
  }

  show() {
    image(
      this.image,
      20,
      height - 310,
      220,
      270,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      220,
      270
    )
    this.animation()
  }

  animation() {
    this.currentFrame >= this.matriz.length - 1
      ? (this.currentFrame = 0)
      : this.currentFrame++
  }
}
