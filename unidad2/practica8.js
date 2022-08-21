var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');


var grd = ctx.createRadialGradient(210,140,20,170,140,210);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");


ctx.fillStyle = grd;
ctx.fillRect(40,40,300,200);