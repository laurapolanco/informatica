let tareas= [
    {materia:"Música",descripción:"Completar los dictados rítmicos y melódicos",fecha:"01-05-21"},
    {materia:"Italiano",descripción:"Estudiar los poemas de Francesco Petrarca",fecha:"11-09-21"},
    {materia:"Física",descripción:"Completar los ejercicios de la velocidad angular",fecha:"12-07-21"},
    {materia:"Español",descripción:"Terminar de leer Don Quijote",fecha:"02-10-21"},
    {materia:"Ciencias",descripción:"Realizar un video sobre las enzimas",fecha:"02-12-21"},
    {materia:"Arte",descripción:"Terminar assonometria monometrica de un objeto",fecha:"02-05-21"},



]
let tabla=document.querySelector("#tareas")

function llenarTabla (){
    let contenido= "<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>"
    for (tarea of tareas){
        contenido= contenido + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenido
}
let form=document.querySelector("form")

function nuevaTarea(){
    let nuevamateria= document.querySelector("input[name=materia]").value
    let nuevadescripcion = document.querySelector("input[name=descripción]").value
    let nuevafecha = document.querySelector("input[name=fecha]").value
    let nuevatarea = {materia:nuevamateria, descripción:nuevadescripcion, fecha:nuevafecha}
    console.log(nuevatarea)
    tareas.push(nuevatarea)
    llenarTabla();
    return false;

}
form.onsubmit = nuevatarea;
