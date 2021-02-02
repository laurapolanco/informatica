let comidas=[
    {nombre:"Arroz" },
    {nombre:"Huevos" },
    {nombre:"Carne" },
    {nombre:"Pescado" },
    {nombre: "Pan"}
]

let lista =document.querySelector('#comidas')
let contenidoLista = '<ul> </ul>'
for (comida of comidas)
{contenidoLista= contenidoLista + `<li>${comida.nombre}</li> `
}
lista.innerHTML=contenidoLista

