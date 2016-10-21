window.onload = function () {
      let x = 20;
      let y = 20;
      let speed = 2;

      let square=document.getElementById("square");
      let contextSquare=square.getContext("2d");
      contextSquare.beginPath();
      contextSquare.moveTo(10, 10);
      contextSquare.lineTo(10, 80);
      contextSquare.lineTo(80, 80);
      contextSquare.lineTo(80, 10);
      contextSquare.closePath();
      contextSquare.lineWidth = 10;
      contextSquare.strokeStyle = getRndColor();
      contextSquare.stroke();
      contextSquare.fillStyle = getRndColor();
      contextSquare.fill();

      let triangle = document.getElementById('triangle');
      let contextTriangle = triangle.getContext('2d');
      contextTriangle.beginPath();
      contextTriangle.moveTo(10, 10);
      contextTriangle.lineTo(10, 80);
      contextTriangle.lineTo(80, 80);
      contextTriangle.closePath();
      contextTriangle.lineWidth = 10;
      contextTriangle.strokeStyle = getRndColor();
      contextTriangle.stroke();
      contextTriangle.fillStyle = getRndColor();
      contextTriangle.fill();

      let Rectangle = document.getElementById('rectangle');
      let contextRectangle = Rectangle.getContext('2d');
      contextRectangle.beginPath();
      contextRectangle.moveTo(10, 10);
      contextRectangle.lineTo(10, 50);
      contextRectangle.lineTo(100, 50);
      contextRectangle.lineTo(100, 10);
      contextRectangle.closePath();
      contextRectangle.lineWidth = 10;
      contextRectangle.strokeStyle = getRndColor();
      contextRectangle.stroke();
      contextRectangle.fillStyle = getRndColor();
      contextRectangle.fill();
          function animate() {
            reqAnimFrame = window.mozRequestAnimationFrame    ||
                          window.webkitRequestAnimationFrame ||
                          window.msRequestAnimationFrame     ||
                          window.oRequestAnimationFrame
                          ;

              reqAnimFrame(animate);

              x += speed;

              if(x <= 0 || x >= 475){
                  speed = -speed;
              }
                    draw();
          }
          function draw(){
              console.log("entro");
              let animatedRectangle = document.getElementById('animatedRectangle');
              let contextAnimatedRectangle = animatedRectangle.getContext('2d');
              contextAnimatedRectangle.fillRect(50, 50, 100, 100);
              contextAnimatedRectangle.lineWidth = 10;
              contextAnimatedRectangle.strokeStyle = getRndColor();

              contextAnimatedRectangle.fillStyle = getRndColor();
              }
          animate();
  }

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
