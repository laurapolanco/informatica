
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
let y = 100;
let x = 500;
let r = 30;
let color = "red";

let vY = 0;
let dT = 30;
let vX = 0

function fondo (){
    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (420,20)
    ctx.lineTo (1300,20)
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1300,20)
    ctx.lineTo (1300,660)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1300,660)
    ctx.lineTo (740,660)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (740,660)
    ctx.lineTo (740,820)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (740,820)
    ctx.lineTo (580,820)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (580,820)
    ctx.lineTo (580,500)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (580,500)
    ctx.lineTo (1140,500)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1140,500)
    ctx.lineTo (1140,420)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1140,420)
    ctx.lineTo (500,420)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (500,420)
    ctx.lineTo (500,260)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (500,260)
    ctx.lineTo (1220,260)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1220,260)
    ctx.lineTo (1220,180)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (1220,180)
    ctx.lineTo (420,180)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.moveTo (420,180)
    ctx.lineTo (420,20)
    ctx.stroke();
    ctx.fill();

}

function pared(){
    if (y<50)
    {
        y=100 
        x= 500
    }
    if (x>1270){
        y=100 
        x= 500
    }

    if (y>630 && x>710 ) {
        y=100 
        x= 500

    }   

    if(x>710 && y>630){
        y=100 
        x= 500

    }

    if(y>790){
        y=100 
        x= 500

    }
    if(x<610 && y>470){
        y=100 
        x= 500

    }

    if(x<1140 && x>550 && y>460 && y<530 ){
        y=100 
        x= 500
      
    }

    if(x<1170 && y<480 && y>390){
        y=100 
        x= 500

    }

    if(x<610 && y>470){
        y=100 
        x= 500

    }

    if(x>530 && x<1170 && y>390 && y<420 ){
        y=100 
        x= 500

    }

    if(x<530 && y<390 && y>230){
        y=100 
        x= 500

    }
    if(x>530 && x<1250 && y<290 && y>250){
        y=100 
        x= 500

    }
    if(y<290 && y>210 && x<1250){
        y=100 
        x= 500

    }
    if(x<1250 && x>390 && y>150 && y<200 ){
        y=100 
        x= 500

    }
    if(x<450){
        y=100 
        x= 500

    }
}

let levi = 0


function moverYDibujar(){
    ctx.clearRect(0,0, 2000, 2000);
    let dy = dT/1000 *vY
    y = y + dy;
    
    ctx.clearRect(0,0, 2000, 2000);
    let dx = dT/1000 *vX
    x = x + dx;
    dibujarPelota(x, y, r, color);
    
    pared ()
    fondo ()
    Dpuntos()
    Spuntos()
    Ganar()
    
   
   Score.innerHTML=levi
}

dibujarPelota(x, y, r, color);

window.setInterval(moverYDibujar, dT);


window.onkeydown = function(event){
  
    console.log(event.code);
   
        
    
       
     
    {   if (event.key == "ArrowRight") {
        vX = 400
    }
   if (event.key == "ArrowLeft") {
       vX = -400
   }
      
    }  if (event.key == "ArrowUp")
    {
        vY= -400;
    }  if (event.key == "ArrowDown")
    {
        vY= 400;
    }
    window.onkeyup = function(event){
        vX = 0
        vY= 0
        }
}
let n1 = 1240
let n2 = 200
let n3 = 580
let n4 = 330
let n5 = 1220
let n6 = 580
let n7 = 660
let n8 = 740
function Dpuntos (){
    ctx.beginPath()
    ctx.fillStyle="orange"
    ctx.strokeStyle="black"
    ctx.fillRect(n1, n2, 20, 20)
    ctx.strokeRect(n1,n2,20,20)

    ctx.beginPath()
    ctx.fillStyle="orange"
    ctx.strokeStyle="black"
    ctx.fillRect(n3, n4, 20, 20)
    ctx.strokeRect(n3,n4,20,20)

    ctx.beginPath()
    ctx.fillStyle="orange"
    ctx.strokeStyle="black"
    ctx.fillRect(n3, n4, 20, 20)
    ctx.strokeRect(n3,n4,20,20)

    ctx.beginPath()
    ctx.fillStyle="orange"
    ctx.strokeStyle="black"
    ctx.fillRect(n5, n6, 20, 20)
    ctx.strokeRect(n5,n6,20,20)

    ctx.beginPath()
    ctx.fillStyle="purple"
    ctx.strokeStyle="black"
    ctx.fillRect(n7, n8, 20, 20)
    ctx.strokeRect(n7,n8,20,20)




   

}



function Spuntos (){
   
    
if(Math.sqrt(Math.pow((x-(n1+10)),2)+Math.pow((y-(n2+10)),2) )<=40){
        
        levi=levi+1
        n1= 2000
        n2= 2000
    
    }
    
    if(Math.sqrt(Math.pow((x-(n3+10)),2)+Math.pow((y-(n4+10)),2) )<=40){
        levi=levi+1
        n3= 2000
        n4= 2000 
    }

    if(Math.sqrt(Math.pow((x-(n5+10)),2)+Math.pow((y-(n6+10)),2) )<=40){
        levi=levi+1
        n5= 2000
        n6= 2000 
    }

    if(Math.sqrt(Math.pow((x-(n7+10)),2)+Math.pow((y-(n8+10)),2) )<=40){
        levi=levi+1
        n7= 2000
        n8= 2000 
        
    }

   
   
}

function Ganar (){
    if (levi==4){

        n1= 2000
        n2= 2000
        n3= 2000
        n4= 2000
        n5= 2000
        n6= 2000
        n7= 2000
        n8= 2000

    alert ("Has ganado, recarga la página para volver a jugar")

    }
}
   

  
    

  
    
       
   

