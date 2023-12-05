var ball = document.getElementById('ball');
var velocity = 5;
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;

var Xmin = 0;
var Xmax = window.innerWidth - ball.clientWidth;
var Ymin = 0;
var Ymax = window.innerHeight - ball.clientHeight;

function moveBall() {
  if (!reverseX) {
    positionX += velocity;
  } else {
    positionX -= velocity;
  }

  if (!reverseY) {
    positionY += velocity;
  } else {
    positionY -= velocity;
  }

  // Check for collisions with the screen edges and reverse direction if necessary
  if (positionX >= Xmax || positionX <= Xmin) {
    reverseX = !reverseX;
    changeColor(); // Change color when reversing
  }

  if (positionY >= Ymax || positionY <= Ymin) {
    reverseY = !reverseY;
    changeColor(); // Change color when reversing
  }

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
}

function changeColor() {
  // Generate a random color
  var randomColor = getRandomColor();
  ball.style.backgroundColor = randomColor;
}

function getRandomColor() {
  // Generate a random color in hexadecimal format
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(moveBall, 16);
