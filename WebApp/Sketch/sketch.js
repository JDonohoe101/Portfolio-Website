var canvas;
canvasWidth = 1400
canvasHeight = 685
function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(0,100)
  canvas.style('z-index','-1')
  
  boxPop = 24;
  boxes = [];
  for (i = 0; i < boxPop; i++) {
    boxes[i] = new Box(width, height);
  }
}

function draw() {
  //background(255,255,255)
  background(0, 38, 77);
  //background(255);
  for (i = 0; i < boxPop; i++) {
    boxes[i].update();
    boxes[i].show();
    //boxes[i].setAlpha(50);

  }

  for (i = 0; i < boxPop; i++) {
    for (j = 0; j < boxPop; j++) {
      for (k = 0; k < boxPop; k++) {
        if (
          i != j &&
          i != k &&
          k != j &&
          boxes[i].intersects(boxes[j]) &&
          boxes[i].intersects(boxes[k]) &&
          boxes[k].intersects(boxes[j])
        ) {
          triangleCol = boxes[k].color;
          triangleCol.setAlpha(30);

          fill(triangleCol);
          triangle(
            boxes[i].xPos + boxes[i].boxWidth / 2,
            boxes[i].yPos + boxes[i].boxHeight / 2,
            boxes[j].xPos + boxes[j].boxWidth / 2,
            boxes[j].yPos + boxes[j].boxHeight / 2,
            boxes[k].xPos + boxes[k].boxWidth / 2,
            boxes[k].yPos + boxes[k].boxHeight / 2
          );
        }
      }
    }
  }
}
