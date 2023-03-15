function Box(x, y) {
  this.boxWidth = 12;
  this.boxHeight = 12;
  this.isConnected = false;
  this.xSpeed = random(random(-2, -1), random(1, 2));
  this.ySpeed = random(random(-2, -1), random(1, 2));

  this.xPos = random(0, width - this.boxWidth);
  this.yPos = random(0, height - this.boxHeight);

  this.setColor = function (randomColor) {
    fill(randomColor);
    return randomColor;
  };

  this.setRandomColor = function () {
    let deepRed = color(255, 0, 102);
    let deeperRed = color(102, 0, 51);
    let pastelPink = color(255, 102, 153);
    let cyan = color(0, 255, 255);
    let deepBlue = color(0, 153, 255);
    let yellow = color(255,255,0);
    let blue = color(0,0,255);
    let black = color(233,233,233);
    let grey = color(126,126,126);
    let colors = [yellow,cyan,deepRed];
    let index = Math.floor(Math.random() * colors.length);
    let colorSelect = colors[index];
    return colorSelect;
  };

  this.color = this.setRandomColor();

  this.show = function () {
    this.color.setAlpha(255);
    fill(this.color);
    noStroke();
    rect(this.xPos, this.yPos, this.boxWidth, this.boxHeight);
  };

  this.intersects = function (other) {
    var d = dist(
      this.xPos + this.boxWidth,
      this.yPos + this.boxHeight,
      other.xPos + this.boxWidth,
      other.yPos + this.boxHeight
    );
//240
    if (d <= 240) {
      return true;
    }
  };

  this.update = function () {
    this.xPos = this.xPos + this.xSpeed;
    this.yPos = this.yPos + this.ySpeed;

    if (this.xPos >= width - this.boxWidth || this.xPos < 0) {
      this.xSpeed = this.xSpeed * -1;
    }

    if (this.yPos >= height - this.boxHeight || this.yPos < 0) {
      this.ySpeed = this.ySpeed * -1;
    }
  };
}
