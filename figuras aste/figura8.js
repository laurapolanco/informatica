let aste;
do {
    aste = parseFloat(prompt("Ingrese el número de asteriscos"));
} while (isNaN(cantidad) || aste < 1);



let nLinea = 0;
while (nLinea < aste) {
    let linea = "";
    let nColumna = nLinea
    
    while (nColumna < aste-1) {
       
        linea = linea + " ";
        nColumna=nColumna+1;

    }
    nColumna=0
    while (nColumna <= nLinea){
        if(nLinea==aste-1||nColumna==0||nColumna==nLinea){
            linea = linea + "*";
        }
        else{
           linea = linea + " ";

        }
        nColumna=nColumna+1
       
    }
    
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
 }
