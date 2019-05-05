var position = 50
var name = 'Emma'
var moving = true
var direction = '+'
var score = 0



function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100)
  if (moving){
    if (direction === '+') {
      position = position + 1
    } else if (direction === '-') {
      position = position - 1
    }
  }

  rect(position, 100, 10, 10)
  text('My name is ' + name, 10, 30)
  text('Score: ' + score , 10, 60)
  console.log(moving)


  if (position > 390){
    direction = '-'
    score++
  }

  if (position < 0){
    direction = '+'
    score++
  }
}


function mousePressed() {
  moving = !moving
}
