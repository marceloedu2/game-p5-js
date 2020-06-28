class Animation {
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
    this.matriz = matriz;
    this.image = image;
    this.personageWidth = personageWidth;
    this.personageHeight = personageHeight;
    this.personageX = personageX;
    this.personageY = height - this.personageHeight - personageY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.currentFrame = 0;
  }

  show() {
    image(
      this.image,
      this.personageX,
      this.personageY,
      this.personageWidth,
      this.personageHeight,
      this.matriz[this.currentFrame][0],
      this.matriz[this.currentFrame][1],
      this.widthSprite,
      this.heightSprite
    );
    this.animation();
  }

  animation() {
    this.currentFrame >= this.matriz.length - 1
      ? (this.currentFrame = 0)
      : this.currentFrame++;
  }
}
