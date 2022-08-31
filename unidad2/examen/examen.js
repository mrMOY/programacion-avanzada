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
var mAmbiental = new Audio();
var mSuccess = new Audio();


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
    player1 = new jugador(216, 329,40,40,"red");
    meta = new jugador(getrandom(600),getrandom(600),20,10,"green");
    isaac.src = "img/isaac.png";
    fondito.src = "img/fondo.png";
    piedraH.src = "img/paredH.png";
    piedraV.src = "img/paredV.png";

    mSuccess.src = "music/DepthsBelow.mp3";
    mAmbiental.src = "music/Tomes.mp3";
    // paredes[0] = new jugador(40,120,30,300,"gray");
    // paredes[1] = new jugador(225, 51,300, 30,"blue");
    // paredes[2] = new jugador(550,120,30,300,"gray");
    // paredes[3] = new jugador(225, 500,300,30,"yellow");
    paredes[0] = new pared(40,120,30,300,1);
    paredes[1] = new pared(225, 51,300, 30,2);

    pintarCuadrado();
}



function pintarCuadrado(){
    window.requestAnimationFrame(pintarCuadrado);
    ctx.drawImage(fondito, 0, 0,700,700);
    ctx.fillStyle="white";
    ctx.font="30px Arial";
    ctx.fillText("SCORE: "+score,30,30);

    
    //player1.pintarCuadrado(ctx);
    meta.pintarCuadrado(ctx);
    ctx.drawImage(isaac,player1.x,player1.y,player1.w,player1.h)
    for (var index = 0; index < paredes.length; index++) {
        //paredes[index].pintarCuadrado(ctx);
        //tipo 1= vert  | tipo 2= hori 
        if (paredes[index].tipo == 2) {
            ctx.drawImage(piedraH, paredes[index].x,paredes[index].y,paredes[index].w,paredes[index].h)
        } 
        if (paredes[index].tipo == 1) {
            ctx.drawImage(piedraV, paredes[index].x,paredes[index].y,paredes[index].w,paredes[index].h)
        }
    }
    

      
    
    if(pause){
        ctx.fillStyle ="rgba(0,0,0,0.5)";
        ctx.fillRect(0,0,700,700);

        ctx.fillStyle = "white";
        ctx.fillText("P A U S E",300,350);
        mAmbiental.pause();
    }else{

        if (Success) {
            ctx.fillStyle ="rgba(0,0,0,0.5)";
            ctx.fillRect(0,0,700,700);

            ctx.fillStyle = "white";
            ctx.fillText("S U C C E S S",300,350);
            mAmbiental.pause();
        } else {
            update();
            mAmbiental.play();
        }
        
    }

}


function update(){ 
    if(direccion=="up"){
        player1.y -=speed;
        if(player1.y ==0){
            player1.y =600;
        }
    }
    if(direccion=="down"){
        player1.y+=speed;
        if(player1.y ==600){
            player1.y =0;
        }
    }
    if(direccion=="left"){
        player1.x -=speed;
        if(player1.x<0){
            player1.x =600;
        }
    }
    if(direccion=="right"){
        player1.x +=speed;
        if(player1.x >600){
            player1.x =0;
        }
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

