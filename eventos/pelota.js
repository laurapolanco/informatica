let canvas = document.querySelector("#miCanvas")


let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
 
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;

    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let y = 0;
let x = 500;
let r = 30;
let color = "red";

let vY = 10;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 1000, 1000);
    let dy = dT/1000 *vY
    y = y + dy;
  
    dibujarPelota(x, y, r, color);
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){
  
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }  if (event.key == "+")
    {
        r= r+1;
    }  if (event.key == "-")
    {
        r= r-1;
    }

}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

window.onclick = function(event){

    let ClickX= event.offsetX 
    let ClickY = event.offsetY
  distancia = Math.sqrt (Math.pow (ClickX - x,2) + Math.pow (ClickY - y,2))
    if (distancia <= r){

        cambiarColorPelota()

    }
    else {  vY = -vY }


}