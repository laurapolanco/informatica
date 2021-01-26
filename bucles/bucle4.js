let i5= 3
let i6= 5
let suma5 = 0
let suma6 = 0

while (i5 <=10000 || i6 <= 10000) {
if(i5%5==0){
    suma5=suma5
}
else{suma5=i5+suma5}
i5= i4+3
if(i6%3==0){
    suma6=suma6
}
else{suma6= i6+ suma6}
i6= i6+5;
}
sumatotal2= suma5 + suma6
 alert (`La suma de todos los números menores o iguales que 10000 que sean múltiplos de 3 o múltiplos de cinco, pero no múltiplos de 3 y múltiplos de 5 a la vez es igual a${sumatotal2}`)