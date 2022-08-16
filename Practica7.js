var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');


var grd = ctx.createLinearGradient(50, 50, 270, 50);
grd.addColorStop(0, "#f59042");
grd.addColorStop(1, "#77009c");


ctx.fillStyle = grd;
ctx.fillRect(20, 30, 300, 200);