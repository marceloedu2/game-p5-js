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
    text("Kza", width / 2, height / 3 + 90);
    textSize(25);
    text(" Apos um surto viral, Kza", width / 2, height / 3 + 160);
    text(
      "um juvem ninja tem que voltar para sua aldeia,",
      width / 2,
      height / 3 + 180
    );
    text("varios perigos o espera no caminho.", width / 2, height / 3 + 200);
    text("kza precisa de sua ajuda.", width / 2, height / 3 + 220);
  }

  _button() {
    ButtonStarter.positionX = width / 2 - 50;
    ButtonStarter.draw();
  }
}
