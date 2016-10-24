window.onload = function () {

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
      let start = null;
      let animatedRectangle = document.getElementById("animatedRectangle");
      animatedRectangle.style.position = 'absolute';
      function step(timestamp) {
          if (!start) start = timestamp;
          let progress = timestamp - start;
          animatedRectangle.style.left = Math.min(progress/25, 200) + "px";
          if (progress < 2000) {
              window.requestAnimationFrame(step);
          }
      }
      window.requestAnimationFrame(step);

}


function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
