var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var img = document.getElementById("imagen");



//cuello 
ctx.beginPath();
ctx.moveTo(435, 345);
ctx.lineTo(435, 385 );
ctx.lineWidth=55;
ctx.strokeStyle = ("rgba(252, 184, 138)");
ctx.stroke();


//cabeza

ctx.beginPath();
ctx.lineWidth=1;
ctx.arc(436, 252,100,0,2*Math.PI);
ctx.strokeStyle= ("rgba(0, 0, 0)");
ctx.stroke();
ctx.fillStyle = ("rgba(252, 184, 138)");
ctx.fill();

//gorra  
ctx.beginPath();
ctx.arc(436, 220,100,3* Math.PI, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = ("rgba(119, 76, 0)");
ctx.fill();
ctx.fillStyle = "rgba(0,0,0)";
ctx.fillRect(523, 200, 150, 20);


//lentes 
ctx.beginPath();
ctx.moveTo(365, 259);
ctx.lineTo(335, 255);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(415, 259);
ctx.lineTo(453, 259);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(503, 259);
ctx.lineTo(537, 255);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(390, 259, 25, 12, 0, 0, Math.PI * 2);
ctx.fillStyle = ("rgba(255, 255, 255)");
ctx.strokeStyle= ("rgba(0,0,0)");
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.ellipse(478, 259, 25, 12, 0, 0, Math.PI * 2);
ctx.fillStyle = ("rgba(255, 255, 255)");
ctx.strokeStyle= ("rgba(0,0,0)");
ctx.fill();
ctx.stroke();

//brazo izq  
ctx.beginPath();
ctx.lineWidth=35;
ctx.moveTo(344, 405);
ctx.lineTo(194, 473);
ctx.lineTo(328, 597);
ctx.strokeStyle = ("rgba(42, 45, 141)");
ctx.stroke();

//brazo der
ctx.beginPath();
ctx.lineWidth=35;
ctx.moveTo(536, 405);
ctx.lineTo(627, 405);
ctx.lineTo(474, 300);
ctx.strokeStyle = ("rgba(42, 45, 141)");
ctx.stroke();



//camisa 
ctx.fillStyle = "rgba(42, 45, 141)";
ctx.fillRect(332, 385, 210, 300);
ctx.beginPath();
ctx.moveTo(392, 385);
ctx.lineTo(433, 443);
ctx.lineTo(478, 385);
ctx.lineTo(392, 385);
ctx.fillStyle = ("rgba(252, 184, 138)");
ctx.fill();
ctx.beginPath();

ctx.drawImage(img,470, 410, 60,60);


// ctx.fillStyle = "red";
// ctx.font = "Bold italic 40px Agency FB";
// ctx.fillText("Hola mundo",379, 475);

//manos
ctx.beginPath();
ctx.lineWidth=1;
ctx.arc(326, 596,25,0,2*Math.PI);
ctx.strokeStyle= ("rgba(0, 0, 0)");
ctx.stroke();
ctx.fillStyle = ("rgba(252, 184, 138)");
ctx.fill();

ctx.beginPath();
ctx.lineWidth=1;
ctx.arc(477, 300,25,0,2*Math.PI);
ctx.strokeStyle= ("rgba(0, 0, 0)");
ctx.stroke();
ctx.fillStyle = ("rgba(252, 184, 138)");
ctx.fill();

//pantalon  
ctx.beginPath();
ctx.moveTo(332, 637);
ctx.lineTo(326, 831);
ctx.lineTo(383, 831);
ctx.lineTo(425, 727);
ctx.lineTo(486, 831);
ctx.lineTo(541, 831);
ctx.lineTo(542, 637);
ctx.lineTo(332, 637);
ctx.strokeStyle = ("rgba(186, 154, 98 )");
ctx.stroke();
ctx.fillStyle =("rgba(186, 154, 98 )");
ctx.fill();

//zapatos 
ctx.beginPath(); //izq
ctx.fillStyle = "rgba(0,0,0)";
ctx.fillRect(281, 830, 105, 30);
ctx.beginPath(); //der
ctx.fillStyle = "rgba(0,0,0)";
ctx.fillRect(486, 830, 105, 30);




canvas.addEventListener("click", function(e){
    alert(e.offsetX + ", " + e.offsetY);
});