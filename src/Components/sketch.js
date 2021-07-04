export default function Sketch(p) {
  const balls = [];

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.frameRate(15);
    for (let i = 0; i < 15; i++) {
      balls.push(new Ball());
    }
  };

  p.draw = () => {
    p.background(250);
    for (let i = 0; i < balls.length; i++) {
      balls[i].getMouseCoordinates(p.mouseX, p.mouseY);
    }
  };

  p.mouseClicked = () => {
    balls.push(new Ball(p.mouseX, p.mouseY));
  };

  class Ball {
    constructor(coordinateX = p.random(0, p.width), coordinateY = p.random(0, p.height)) {
      this.x = coordinateX;
      this.y = coordinateY;
      this.size = p.random(5, 100);
      this.angle = 0;
      this.redColorValue = 0;
    }

    getMouseCoordinates = (mX, mY) => {
      this.calculateAngle(mX, mY);
      this.mapRedColorValue(mX);
      this.display();
    };

    calculateAngle = (mX, mY) => {
      this.angle = p.atan2(mY - this.y, mX - this.x);
    };

    mapRedColorValue = mX => {
      this.redColorValue = p.map(mX, 0, p.width, 100, 225);
    };

    display = () => {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.angle);
      p.fill(this.redColorValue, 40, 225, 160);
      p.noStroke();
      p.ellipse(10, 10, this.size, this.size);
      p.pop();
    };
  }
}
