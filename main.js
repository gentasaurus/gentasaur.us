/*
* Main Javascript file.
* Gent Semaj, GPLv3.
* 4/27/2020
*/

function resizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

var stars = [];

function initialize(xSize, ySize) {
  // Create stars
  for(var i = 0; i < 400; i++) {
    var starX = Math.random() * 2 * xSize - (xSize / 2);
    var starY = Math.random() * 2 * ySize - (ySize / 2);
    stars.push({x:starX, y:starY});
  }
}

/*
*
*/
function reset(ctx) {
  ctx.resetTransform();
  ctx.translate(0, 0.5);
  ctx.lineWidth = 1;
}

function paint(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(-10, -10, canvas.width + 20, canvas.height + 20);
  ctx.fillStyle = "#FFFFFF";
  for(var s = 0; s < stars.length; s++) {
    var star = stars[s];
    if(star.x > -10 && star.x < canvas.width + 10 && star.y > -10 && star.y < canvas.height + 10) {
      ctx.fillRect(star.x - 2, star.y - 2, 4, 4);
    }
  }
}

var canvas = document.getElementById("canvas");
resizeCanvas(canvas);
initialize(canvas.width, canvas.height);
paint(canvas);
