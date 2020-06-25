let imagePanorama
let imagePlayer
let panorama
let player

let soundGame = document.getElementById('audio-game')

function preload() {
  imagePanorama = loadImage('https://i.imgur.com/xvkD8af.jpg')
  imagePlayer = loadImage('https://i.imgur.com/ElSipa2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  panorama = new Panorama(imagePanorama, 10)
  player = new Player(imagePlayer)

  frameRate(25)
  soundGame.volume = 0.01
  soundGame.loop = true
  soundGame.play()
}

function draw() {
  panorama.show()
  panorama.move()

  player.show()
}
