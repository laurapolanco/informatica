let n1=0
let suma1=0 

function promedio (notas1)
{while (n1 <=(notas1.length-1))
suma1= suma1 +notas1 [n1]
    n1=n1+1
    console.log(n1)
    console.log(suma1)

}

console.log (notas1.length)
console.log (suma1/ (notas1.length-1))

let nnotas1
let nota1

do {
    nnotas1 = parseFloat(prompt("Ingresa el numero de tus notas"))
} while (nnotas1<=0 || nnotas1%1!=0);

let ninicialnotas1 = 0
let notas1=[0]
do {
    nota1=parseFloat(prompt("Ingresa tus notas"))
    ninicialnotas1= ninicialnotas1+1
    notas1.push(nota1)
} while (ninicialnotas1!=nnotas1);
console.log(notas1)

promedio (notas1)

let cantidadPalabras;
do {
    cantidadPalabras= parseFloat(prompt("Ingrese la cantidad de palabras"))
} while (isNaN(cantidadPalabras)|| cantidadPalabras<1 );
let palabras= [ ];
let t=0;
while (t< cantidadPalabras) {
    let palabra = prompt("Ingresa la palabra")
    t= t+1;
    palabras.push (palabra)
}

let largo=0
largo= palabras.length
let i =0;
let concatenar="";
while (i<largo) {
    concatenar+=palabras [i]+ " ";
i=i+1
}
alert(`Concatenación:${concatenar}`);