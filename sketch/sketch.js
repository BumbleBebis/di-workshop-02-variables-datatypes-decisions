var position = 100
var name = 'Emma'
var moving = true

function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100)
  if (moving){
    position = position  +1
  }
  rect(position, 50, 10, 10)
  text('My name is' + ' ' + name, 10, 30)
  console.log(moving)
}

  function mousePressed() {
    moving = !moving
  }

