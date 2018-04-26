
      const balls = [];

      function setup() {
        const canvas = createCanvas(windowWidth, windowHeight);
        frameRate(15)
        for (i = 0; i < 15; i++) {
          balls.push(new Ball());
        }
      }
      
      function draw() {
        background(250);
        for (i = 0; i < balls.length; i++) {
          balls[i].getMouseCoordinates(mouseX, mouseY);
        }
      }
      
      function mouseClicked() {
        balls.push(new Ball(mouseX, mouseY));
      }
      
      class Ball {
        constructor(
          coordinateX = random(0, width),
          coordinateY = random(0, height)
        ) {
          this.x = coordinateX;
          this.y = coordinateY;
          this.size = random(5, 100);
          this.angle = 0;
          this.redColorValue = 0;
        }
      
        getMouseCoordinates(mX, mY) {
          this.calculateAngle(mX, mY);
          this.mapRedColorValue(mX);
          this.display();
        }
      
        calculateAngle(mX, mY) {
          this.angle = atan2(mY - this.y, mX - this.x);
        }
      
        mapRedColorValue(mX) {
          this.redColorValue = map(mX, 0, width, 100, 225);
        }
            
      
        display() {
          push()
          // blendMode(MULTIPLY);
          translate(this.x, this.y);
          rotate(this.angle);
          fill(this.redColorValue, 40, 225, 160);
          noStroke();
          ellipse(10, 10, this.size, this.size);
          pop()
        }
      }