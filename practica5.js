var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.font = "Bold italic 40px Agency FB";
ctx.fillText("Hola mundo",40,100);

ctx.strokeStyle = "red";
ctx.font = "Bold italic 40px Agency FB";
ctx.strokeText('Hola mundo', 40, 150);

//triangulo
ctx.moveTo(270,150);
ctx.lineTo(250,50);
ctx.lineTo(350,150);
ctx.lineTo(270,150);
ctx.stroke();
ctx.fillStyle = ("white");
ctx.fill();


//linea
ctx.moveTo(240,10);
ctx.lineTo(330,100);
ctx.strokeStyle = "black";
ctx.stroke();
