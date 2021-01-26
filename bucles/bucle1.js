let suma = 0;
let i = 3;

while (i <=10000) {
  suma = suma + i;
  i = i + 3;
}
alert( ` La suma de todos los múltiplos de 3  menores o iguales que 10000: 3 + 6 + 9 + 12 + ... + 9999 es igual a ${suma} `);