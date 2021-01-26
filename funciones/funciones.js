function areaCirc (r){
    let area = Math.PI * r* r
return area
}

function volEsfera (r){
    let vol  = Math.PI * 4/3  * r*r*r  
return vol
}

function Max (a, b ){
    if (a>b) {
        return a
    } else {
        return b
    } 
}

function masLarga (palabra1, palabra2){
    if (palabra1.length >palabra2.length ) {
        return palabra1
    } else {
       return  palabra2 
    }
}

let palabra1 =prompt ("Ingrese la palabra 1")
let palabra2 =prompt ("Ingrese la palabra 2")
alert (`La palabra más larga es ${masLarga(palabra1,palabra2)}` )

function ImprimirmasLarga (palabra3, palabra4){
    if (palabra3.length >palabra4.length ) {
        return palabra3
    } else {
       return  palabra4
    }
}

let palabra1 =prompt ("Ingrese la palabra 3")
let palabra2 =prompt ("Ingrese la palabra 4")
console.log (`La palabra más larga es ${ImprimirmasLarga(palabra3,palabra4)}` )

function fibonacci (n){
    n= n-1+n+2
    return n 
}
