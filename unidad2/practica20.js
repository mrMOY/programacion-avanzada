var canvas = null;
var ctx = null;
var pressed = false;
var r, g, b;
var ultraX = 0, ultraY = 0;
// generateRandomColor();
var fig = "arc";



document.addEventListener("keydown", function(e){
    console.log(e);
    if(e.key == "w" || e.key =="ArrowUp"){
        ultraY-=10;
    }
    if(e.key == "s" || e.key =="ArrowDown"){
        ultraY+=10;
    }
    if(e.key == "a" || e.key =="ArrowLeft"){
        ultraX-=10;
    }
    if(e.key == "d" || e.key =="ArrowRight"){
        ultraX+=10;
    }
    pintarCuadrado();
});

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

function run(){
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d")

    pintarCuadrado();
}


function pintarCuadrado(){
    window.requestAnimationFrame(pintarCuadrado);
    ctx.fillStyle = "rgb(230,230,255)";
    ctx.fillRect(0, 0, 1000,1000);

    ctx.fillStyle = "rgba(255,30,30,0.8)";
    ctx.fillRect(ultraX, ultraY, 70,70);

    ultraX +=10;
    if(ultraX==600){
        ultraX=0;
    }
}

window.addEventListener("load",run,false);