class Starter {
  constructor() {}

  draw() {
    this._imageBackground();
    this._text();
    this._button();
  }
  _imageBackground() {
    image(imageHomeScreen, 0, 0, width, height);
  }
  _text() {
    textFont(fontHomeScreen);
    textSize(50);
    textAlign(CENTER);
    text("As aventuras de", width / 2, height / 3);
    textSize(100);
    text("Hipsta", width / 2, height / 3 + 90);
  }

  _button() {
    ButtonStarter.positionX = width / 2 - 50;
    ButtonStarter.draw();
  }
}
