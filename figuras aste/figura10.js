let aste;
do {
   aste = parseFloat(prompt(" Ingrese el número de asteriscos"));
} while (isNaN(aste) || aste < 1);



let nLinea = 0;
while (nLinea < aste) {
    let linea = "";
    let nColumna = 0;
    
    while (nColumna < nLinea+1) {
        if(nColumna==0 || nColumna==nLinea || nLinea==aste-1){
            linea = linea + "*";
        }
        else{
            linea=linea+" ";

        }           
        nColumna=nColumna+1;
        
    }
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
 }