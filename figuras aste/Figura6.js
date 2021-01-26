let aste;
do {
    aste = parseFloat(prompt("Ingrese el número de  asteriscos "));
} while (isNaN(aste) || aste < 1);



        let nLinea = 0;
        while (nLinea < aste) {
        let linea = "";
        let nColumna = 0;
        while(nColumna<nLinea){
            nColumna=nColumna+1;
            linea = linea + " ";

        }
        nColumna = 0;
        while (nColumna < aste) {

            nColumna=nColumna+1;
            linea = linea + "*";
        }
        linea=linea+" ";
        console.log(linea);
        nLinea = nLinea + 1;
        }