let suma3 = 0;
let i3 = 3;

while (i3 <=10000) {
  suma3 = suma3 + i3;
  i3 = i3 + 3;
}

let suma4 = 0;
let i4 = 3;

while (i4 <=10000) {
  suma4 = suma4 + i4;
  i4 = i4 + 3;
}

sumatotal= suma4+suma3

alert(`La suma de todos los números menores o iguales que 10000 que sean múltiplos de 3 y múltiplos de 5 es igual a ${sumatotal}`);