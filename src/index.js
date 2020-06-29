function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  starter = new Starter();
  game = new Game();
  game.setup();
  scenes = {
    starter,
    game,
  };
  ButtonStarter = new Button("game", "Ajudar", width / 2, height / 2 + 100);
}
function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}
