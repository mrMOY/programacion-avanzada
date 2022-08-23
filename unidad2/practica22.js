var canvas = null;
var ctx = null;
var pressed = false;
var r, g, b;
// generateRandomColor();
var fig = "arc";
var player1= null;
var player2=null;
var direccion= "right";
var score=0;
var speed=1;

function getrandom( num){
    return Math.floor(Math.random()*num)
}

function cuadro(x,y,w,h,c){
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
    pintarCuadrado();
});

function run(){
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d")
    player1 = new cuadro(0,0,40,40,"red");
    player2 = new cuadro(getrandom(600),getrandom(600),40,40,"green");


    pintarCuadrado();
}



function pintarCuadrado(){
    window.requestAnimationFrame(pintarCuadrado);
    ctx.fillStyle = "pink";
    ctx.fillRect(0,0,600,600);
    ctx.fillRect(0, 0, 70,70);
    ctx.fillStyle="black";
    ctx.font="50px Arial";
    ctx.fillText("SCORE: "+score,80,80);
    
    player1.pintarCuadrado(ctx);
    player2.pintarCuadrado(ctx);
    update();
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

    if(player1.se_tocan(player2)){
        player2.x = getrandom(600);
        player2.y = getrandom(600);

        score+=1;
        speed+=1;
    }
}

window.addEventListener("load",run,false);