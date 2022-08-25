var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.arc(434, 560,100,0,2*Math.PI);
ctx.strokeStyle = ("rgba(251, 248, 44 )");
ctx.stroke();
ctx.fillStyle = ("rgba(251, 248, 44 )");
ctx.fill();

//montanas
ctx.beginPath();
ctx.arc(134, 865,400,0,2*Math.PI);
ctx.strokeStyle = ("rgba(129, 231, 14 )");
ctx.stroke();
ctx.fillStyle = ("rgba(129, 231, 14 )");
ctx.fill();
ctx.beginPath();
ctx.arc(733, 865,400,0,2*Math.PI);
ctx.strokeStyle = ("rgba(129, 231, 14 )");
ctx.stroke();
ctx.fillStyle = ("rgba(129, 231, 14  )");
ctx.fill();

//Pasto
ctx.beginPath();
ctx.fillStyle = "rgba(29, 214, 7)";
ctx.fillRect(0, 875, 900, 25);

//casa
ctx.beginPath();
ctx.fillStyle = "rgba(244,225,76)";
ctx.fillRect(118, 577, 400, 300);
//puerta
ctx.lineTo(329,877);
ctx.lineTo(329, 800);
ctx.lineTo(418, 800);
ctx.lineTo(418, 877);
ctx.moveTo(374, 877);
ctx.lineTo(374, 800);
ctx.strokeStyle = "rgba(98,32,22,0.9)";
ctx.stroke();
ctx.beginPath();
ctx.arc(393, 844,5,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(172,53,59)");
ctx.fill();
ctx.beginPath();
ctx.arc(355, 844,5,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(172,53,59)");
ctx.fill();

//techo
ctx.moveTo(118,577);
ctx.lineTo(317, 405);
ctx.lineTo(517, 577);
ctx.lineTo(118,577);
ctx.strokeStyle = ("rgba(98,32,22)");
ctx.fillStyle = ("rgba(98,32,22)");
ctx.fill();
ctx.stroke();

//ventana 157, 650
ctx.beginPath();
ctx.moveTo(157, 635);
ctx.lineTo(238, 635);
ctx.lineTo(238, 702);
ctx.lineTo(157, 702);
ctx.lineTo(157, 635);
ctx.strokeStyle = ("rgba(98,32,22)");
ctx.stroke();
ctx.fillStyle = ("rgba(153,217,234)");
ctx.fill();
ctx.beginPath();
ctx.moveTo(197, 702);
ctx.lineTo(197, 635);
ctx.moveTo(157, 670);
ctx.lineTo(239, 670);
ctx.strokeStyle = ("rgba(98,32,22)");
ctx.stroke();

//nube
ctx.beginPath();
ctx.arc(150, 163,40,0,2*Math.PI);
ctx.strokeStyle = ("rgba(255,255,255)");
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.arc(196, 134,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.arc(196, 134,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.arc(197, 186,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.arc(241, 139,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.arc(239, 183,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();
ctx.beginPath();
ctx.arc(269, 161,40,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(255,255,255)");
ctx.fill();

//arbol 
ctx.beginPath();
ctx.fillStyle = "rgba(120, 40, 0)";
ctx.fillRect(797, 571, 400, 310);
ctx.arc(845, 359,300,0,2*Math.PI);
ctx.strokeStyle = ("rgba(13, 120, 0)");
ctx.stroke();
ctx.fillStyle = ("rgba(13, 120, 0 )");
ctx.fill();


ctx.beginPath();
ctx.arc(845, 359,25,0,2*Math.PI);
ctx.strokeStyle = ("rgba(214, 7, 7 )");
ctx.stroke();
ctx.fillStyle = ("rgba(214, 7, 7  )");
ctx.fill();
ctx.beginPath();
ctx.arc(727, 244,25,0,2*Math.PI);
ctx.strokeStyle = ("rgba(214, 7, 7 )");
ctx.stroke();
ctx.fillStyle = ("rgba(214, 7, 7  )");
ctx.fill();
ctx.beginPath();
ctx.arc(703, 487,25,0,2*Math.PI);
ctx.strokeStyle = ("rgba(214, 7, 7 )");
ctx.stroke();
ctx.fillStyle = ("rgba(214, 7, 7  )");
ctx.fill();
ctx.beginPath();
ctx.arc(847, 162,25,0,2*Math.PI);
ctx.strokeStyle = ("rgba(214, 7, 7 )");
ctx.stroke();
ctx.fillStyle = ("rgba(214, 7, 7  )");
ctx.fill();



 canvas.addEventListener("click", function(e){
     alert(e.offsetX + ", " + e.offsetY);
 });