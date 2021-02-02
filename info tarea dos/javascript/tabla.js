let instrumentos= [
    {nombre:"Violín", familia:"cuerdas",orquesta:"si", imagen:"https://m.media-amazon.com/images/I/71Kh-7P8h7L._AC_SY879_.jpg"},
    {nombre:"Viola", familia:"cuerdas",orquesta:"si", imagen:"https://previews.123rf.com/images/3drenderings/3drenderings1604/3drenderings160401249/55898349-representaci%C3%B3n-3d-de-la-viola-instrumento-musical.jpg"},
    {nombre:"Violoncello", familia:"cuerdas",orquesta:"si", imagen:"https://www.el-atril.com/orquesta/Instrumentos/imagenes/violonchelo.gif"},
    {nombre:"Contrabajo", familia:"cuerdas",orquesta:"si", imagen:"https://img.clasf.co/2020/01/05/Contrabajo-Cremona-Sb-3-20200105051039.3179330015.jpg"},
    {nombre:"Piano", familia:"cuerdas percutidas ",orquesta:"para concertos, pero comúnmente no", imagen:"https://www.thomann.de/thumb/opengraph/pics/prod/467790.jpg"},
    {nombre:"Clavicordio", familia:"cuerdas percutidas ",orquesta:"si", imagen:"https://www.ecured.cu/images/f/f8/Clavicordio.jpg"},
    {nombre:"Flauta", familia:"vientos",imagen:"https://www.sanganxa.com/wp-content/uploads/2014/05/flauta-jupiter-511.jpg", orquesta:"si" },
    {nombre:"Oboe", familia:"vientos", imagen:"https://www.sanganxa.com/wp-content/uploads/2014/05/oboer_buffet_orfeo.jpg", orquesta:"si",},

]

let tabla = document.querySelector('#instrumentos')
let contenidoTabla = '<tr><th>Nombre</th><th>Familia</th><th>Imagen</th></th><th>Orquesta</th></tr>'
for (instrumento of instrumentos)
{contenidoTabla = contenidoTabla + `<tr><td>${instrumento.nombre}</td><td>${instrumento.familia}</td>
<td><img width="300px" src="${instrumento.imagen}" alt=""></td></td><td>${instrumento.orquesta}</td>
<td> `
}
tabla.innerHTML = contenidoTabla;


