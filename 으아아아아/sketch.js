var boxSize;
var boxX, boxY;

var velX, velY;

var boxDirection;

function setup() {
  createCanvas(1200, 600);
  
  boxSize = 20;

  boxX = 0;
  boxY = 0;

  velX = 0;
  velY = 0;

  boxDirection = 0;

}

function draw() {
  background(50);
  noStroke();
  drawBox();
  
  
  moveBox(velX, velY);
  
}


function mousePressed() {
    if (mouseButton === LEFT) {
        velX = velX +2, velY = 0;
    }
}

//마우스
function keyPressed(){
  if (keyCode === 32) {
    velY = velY+2, velX = 0;
  }
}


// 상자를 그려주는 함수
function drawBox() {
  rect(boxX, boxY, boxSize, boxSize);
}

// 상자의 위치를 amount만큼 움직이는 함수
function moveBox(amountX, amountY) {
  boxX += amountX;
  boxY += amountY;
}

// 방향 전환이 필요하다면 상자의 방향을 전환하는 함수
function switchBoxDirectionIfNeeded() {
  if (boxX >= width * (3 / 4) - boxSize / 2) {
      boxDirection = 1;
  } else if (boxX <= width / 4 - boxSize / 2) {
      boxDirection = 0;
  }
}

function handleboxEdge() {
  if (boxX > width || boxX + boxSize < 0) {
    velX = -velX;
  }

  if (boxY > width || boxY + boxSize < 0) {
    velY = -velY;
  }
}