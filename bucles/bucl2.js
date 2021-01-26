let suma2 = 0;
let i2 = 5;

while (i2 <= 10000) {
  suma2 = suma2 + i2;
  i2 = i2 + 5;
}
alert(` La suma de todos los múltiplos de 5 menores o iguales que 10000: 5 + 10 +  15 + 20 + ... + 10000 es igual a  ${ suma2}` );