do {
    masa= parseFloat (prompt("Ingrese su masa (también conocida como peso) em Kg"));

} while (isNaN(masa)|| masa < 0 );

do { altura = parseFloat(prompt("Ingrese su altura en metros"));

}while (isNaN(altura)|| altura <0 );

Mci = masa/(altura*altura)
console.log(`Su índice de masa corporal ${Mci} `);

if(Mci<18.5 ) {
    alert(`Bajo de peso ( underweight) `)
}

 else if(  Mci<24.99 ) {
    alert (`Normal (normal)`)
}
 else if(  Mci <= 29.9 ) {
    alert (`Sobrepeso (overweight)`)
}
else if(Mci>30  ) {
    alert (`Obeso ( obese) `)
}