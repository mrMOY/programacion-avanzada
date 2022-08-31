var canvas = null;
var ctx = null;
var pressed = false;
var r, g, b;
// generateRandomColor();
var player1= null;
var meta=null;
var direccion= "";
var score=0;
var pause= false;
var Success = false;
var speed=1;
var paredes = [];
var isaac = new Image();
var piedraH = new Image();
var piedraV = new Image();
var fondito = new Image();
var salida = new Image();
var limites = new Image();
var mAmbiental = new Audio();
var mSuccess = new Audio();


canvas1.addEventListener("click", function(e){
    alert(e.offsetX + ", " + e.offsetY);
});

function getrandom( num){
    return Math.floor(Math.random()*num)
}

function jugador(x,y,w,h,c){
    this.x =x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.c =c;

    this.pintarCuadrado = function(ctx){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.strokeRect(this.x,this.y,this.w,this.h);
    }
    this.se_tocan = function (target) { 

        if(this.x < target.x + target.w &&
           this.x + this.w > target.x && 
           this.y < target.y + target.h && 
           this.y + this.h > target.y)
        {
            return true;	 
        }  
         

    };
}

function pared(x,y,w,h,tipo){
    this.x =x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.tipo =tipo; 

    this.pintarPared = function(ctx){
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.strokeRect(this.x,this.y,this.w,this.h);
    }
    this.se_tocan = function (target) { 

        if(this.x < target.x + target.w &&
           this.x + this.w > target.x && 
           this.y < target.y + target.h && 
           this.y + this.h > target.y)
        {
            return true;	 
        }  
         

    };
}


window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

document.addEventListener("keydown", function(e){
    console.log(e);
    if(e.key == "w" || e.key =="ArrowUp"){
        //ultraY-=10;
        direccion = "up";
    }
    if(e.key == "s" || e.key =="ArrowDown"){
        //ultraY+=10;
        direccion="down" ;
    }
    if(e.key == "a" || e.key =="ArrowLeft"){
        //ultraX-=10;
        direccion="left";
    }
    if(e.key == "d" || e.key =="ArrowRight"){
        //ultraX+=10;
        direccion="right";

    }
    if(e.keyCode == 32 ){
        //ultraX+=10;
        pause= (pause)?false:true;

    }
    
});

window.addEventListener("load",run,false);

function run(){
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d")
    player1 = new jugador(158, 237,20,20,"red"); //67,73
    meta = new jugador(717, 680,30,30,"green");
    isaac.src = "img/isaac.png";
    fondito.src = "img/fondo.png";
    piedraH.src = "img/paredH.png";
    piedraV.src = "img/pared.png";
    salida.src = "img/trampilla.png";
    limites.src = "img/limite.png";

    mSuccess.src = "music/DepthsBelow.mp3";
    mAmbiental.src = "music/Tomes.mp3";

    //tipo 1= vert  | tipo 2= hori  | tipo 3= limite
    //limites
    paredes[0] = new pared(0,0,60,800,1);
    paredes[1] = new pared(0, 0,800, 60,1);
    paredes[2] = new pared(740,0,60,800,1);
    paredes[3] = new pared(0, 710,800, 60,1); 
    //paredes
    paredes[4] = new pared(97, 55,10,70,1);
    paredes[5] = new pared(60, 160,130, 10,2);
    paredes[6] = new pared(134, 90,10, 80,2);
    paredes[7] = new pared(134, 90,100, 10,2);
    paredes[8] = new pared(227, 90,10, 80,2);
    paredes[9] = new pared(286, 58,10, 80,2);
    paredes[10] = new pared(288, 128,40, 10,2);
    paredes[11] = new pared(228, 166,70, 10,2);
    paredes[12] = new pared(323, 129,10, 70,2);
    paredes[13] = new pared(290, 171,10, 70,2);
    paredes[14] = new pared(324, 193,62, 10,2);    //  377, 274
    paredes[15] = new pared(255, 230,50, 10,2);
    paredes[16] = new pared(340, 230,10, 50,2);
    paredes[17] = new pared(377, 195,10, 50,2);
    paredes[17] = new pared(342, 273,40, 10,2);
    paredes[18] = new pared(380, 197,10, 40,2);
    paredes[19] = new pared(382, 234,40, 10,2);
    paredes[20] = new pared(377, 274,10, 170,2);
    paredes[21] = new pared(411, 234,10, 100,2);
    paredes[22] = new pared(413, 324,50, 10,2);
    paredes[23] = new pared(456, 325,10, 160,2);
    paredes[24] = new pared(426, 400,40, 10,2);
    paredes[25] = new pared(377, 366,50, 10,2);
    paredes[26] = new pared(377, 440,50, 10,2);
    paredes[27] = new pared(340, 475,115, 10,2);
    paredes[28] = new pared(340, 311,10, 165,2);
    paredes[29] = new pared(295, 231,50, 10,2);  
    paredes[30] = new pared(135, 200,90, 10,2);
    paredes[31] = new pared(185, 126,10, 80,2);
    paredes[32] = new pared(220, 203,10, 80,2);  //159, 309
    paredes[33] = new pared(220, 274,80, 10,2);
    paredes[34] = new pared(159, 311, 185, 10,2);
    paredes[35] = new pared(190, 254,10, 250,2);
    paredes[36] = new pared(125,201,10, 158,2);
    paredes[37] = new pared(125, 272,40, 10,2);
    paredes[38] = new pared(91, 350, 70, 10,2);
    paredes[39] = new pared(155, 351,10, 120,2);  
    paredes[40] = new pared(155, 499,45, 10 ,2);
    paredes[41] = new pared(100, 460,60, 10 ,2);
    paredes[42] = new pared(120, 466,10, 40 ,2);
    paredes[43] = new pared(155, 501,10, 50 ,2);
    paredes[44] = new pared(92, 540,70, 10 ,2);
    paredes[45] = new pared(85, 504,10, 40 ,2);
    paredes[46] = new pared(59, 422,60, 10 ,2); 
    paredes[47] = new pared(120, 395,10, 37 ,2);
    paredes[48] = new pared(85, 351,10, 38 ,2);
    paredes[49] = new pared(59, 314,40, 10 ,2);
    paredes[50] = new pared(90, 252,40, 10 ,2); 
    paredes[51] = new pared(90, 222,10, 40 ,2);  
    paredes[52] = new pared(306, 380,40, 10 ,2);  
    paredes[53] = new pared(190, 389,90, 10 ,2);
    paredes[54] = new pared(270, 344,10, 100 ,2);
    paredes[55] = new pared(230, 344,80, 10 ,2);
    paredes[56] = new pared(270, 438,40, 10 ,2);
    paredes[57] = new pared(231, 476,110, 10 ,2);
    paredes[58] = new pared(231, 442,10, 60 ,2);




























    





    

    pintarCuadrado();
}



function pintarCuadrado(){
    window.requestAnimationFrame(pintarCuadrado);
    ctx.drawImage(fondito, 0, 0,800,800);
    ctx.fillStyle="white";
    ctx.font="30px Arial";
    ctx.fillText("SCORE: "+score,30,30);

    
    //player1.pintarCuadrado(ctx);
    //meta.pintarCuadrado(ctx);

    ctx.drawImage(isaac,player1.x,player1.y,player1.w,player1.h);
    ctx.drawImage(salida,meta.x,meta.y,meta.w,meta.h);
    for (var index = 0; index < paredes.length; index++) {
        //paredes[index].pintarCuadrado(ctx);
        //tipo 1= vert  | tipo 2= hori 
        // if (paredes[index].tipo == 2) {
        //     ctx.drawImage(piedraH, paredes[index].x,paredes[index].y,paredes[index].w,paredes[index].h)
        // } 
        // if (paredes[index].tipo == 1) {
        //     ctx.drawImage(piedraV, paredes[index].x,paredes[index].y,paredes[index].w,paredes[index].h)
        // }
        ctx.drawImage(piedraV, paredes[index].x,paredes[index].y,paredes[index].w,paredes[index].h)
    }
    

    if (true) {
        if(pause){
            ctx.fillStyle ="rgba(0,0,0,0.5)";
            ctx.fillRect(0,0,800,800);
    
            ctx.fillStyle = "white";
            ctx.fillText("P A U S E",300,350);
            mAmbiental.pause();
        }else{
    
            if (Success) {
                ctx.fillStyle ="rgba(0,0,0,0.5)";
                ctx.fillRect(0,0,800,800);
    
                ctx.fillStyle = "white";
                ctx.fillText("S U C C E S S",300,350);
                mAmbiental.pause();
            } else {
                update();
                //mAmbiental.play();
            }
            
        }
    }
    


}


function update(){ 
    if(direccion=="up"){
        player1.y -=speed;
        
    }
    if(direccion=="down"){
        player1.y+=speed;
        
    }
    if(direccion=="left"){
        player1.x -=speed;
        
    }
    if(direccion=="right"){
        player1.x +=speed;
        
    }



    if(player1.se_tocan(meta)){
        
        meta.x = getrandom(600);
        meta.y = getrandom(600);
        Success= (Success)?false:true;
        mSuccess.play();
        score +=1;

    }

    for (var i = 0; i< paredes.length; i++) {
        if(player1.se_tocan(paredes[i])){
            if(direccion=="up"){
                player1.y +=speed;
    
            }
            if(direccion=="down"){
                player1.y-=speed;
    
            }
            if(direccion=="left"){
                player1.x +=speed;
                
            }
            if(direccion=="right"){
                player1.x -=speed;
                
            }
        }
        
    }
 
}

