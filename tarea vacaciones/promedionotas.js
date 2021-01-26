let nnotas
let nota

do{
   nnotas=parseFloat(prompt("Ingrese el numero de notas"))
}while (nnotas<=0 || nnotas%1!=0)

let ninicial = 0
let notas = [0]

do{
   nota= parseFloat(prompt("Ingrese sus notas"))
   ninicial=ninicial+1 
   notas.push (nota)
} while (nota>10 || nota<0 || ninicial !=  nnotas)
console.log (notas)

let n=0 
let suma=0
while (n<= nnotas){
   suma= suma + notas [n]
   n=n+1
}
console.log (suma/nnotas)