var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

//cuadrado
ctx.fillStyle = "rgba(125,136,229)";
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = "rgba(205,0,9)";
ctx.fillRect(80, 80, 100, 100);
ctx.fillStyle = "rgba(255,150,255,0.8)";
ctx.fillRect(150, 150, 100, 100);

//linea
ctx.moveTo(50,20);
ctx.lineTo(180,100);
ctx.stroke();

//triangulo
ctx.moveTo(100,150);
ctx.lineTo(50,50);
ctx.lineTo(200,150);
ctx.lineTo(100,150);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.fillStyle = ("rgba(255,150,255)");
ctx.fill();


//arc
ctx.beginPath();
ctx.arc(250,250,100,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();

ctx.beginPath();
ctx.arc(550,250,100,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,0,0)");
ctx.fill();

