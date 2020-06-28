class Button {
  constructor(page, text, positionX, positionY) {
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;
    this.page = page;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._onClick());
    this.button.addClass("initialButton");
    this.button.center();
  }

  draw() {
    this.button.position(this.positionX, this.positionY);
  }

  _onClick() {
    this.button.remove();
    currentScene = this.page;
  }
}
