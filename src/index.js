let imagePanorama
let imagePlayer
let imageOpponent

let panorama
let player
let opponent

let backgroundSound
let jumpSound
let damageSound
let loseSound

let jump = 0

function preload() {
  backgroundSound = loadSound('./src/assets/sounds/backgroundSound.mp3')
  jumpSound = loadSound('./src/assets/sounds/jumpSound.ogg')
  damageSound = loadSound('./src/assets/sounds/damageSound.ogg')
  loseSound = loadSound('./src/assets/sounds/loseSound.mp3')

  imagePanorama = loadImage('./src/assets/images/panoramas/florest.png')
  imagePlayer = loadImage('./src/assets/images/player/runner.png')
  imageOpponent = loadImage('./src/assets/images/opponents/droplets.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  panorama = new Panorama(imagePanorama, 10)
  player = new Player(matrizPlayer, imagePlayer, 40, 20, 220, 270, 220, 270)
  opponent = new Opponent(
    matrizOpponent,
    imageOpponent,
    width,
    20,
    100,
    100,
    104,
    104
  )
  backgroundSound.loop()

  frameRate(40)
}
function keyPressed() {
  jump++
  console.log(jump)

  if (key === 'ArrowUp' && jump < 3) {
    player.jump()
    jumpSound.play()
  }
}

function draw() {
  panorama.show()
  panorama.move()

  player.show()
  player.applyGravity()

  opponent.show()
  opponent.move()

  if (player.collision(opponent)) {
    damageSound.play()
    backgroundSound.stop()
    //loseSound.play()
    noLoop()
  }
}
