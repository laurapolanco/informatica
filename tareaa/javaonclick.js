let boton = document.querySelector("#color")
let parrafo = document.querySelector("#p1")
boton.onclick = cambiarColor
function cambiarColor(){     
     let a = Math.floor(Math.random() * 226)
    let b = Math.floor(Math.random() * 226)
    let c = Math.floor(Math.random() * 226)
    parrafo.style.color = `rgb(${a},${b},${c})`}
    let boton2 = document.querySelector("#ocultar")
let parrafo2 = document.querySelector("#p2")
boton2.onclick = mostrar
function mostrar(){
    if (parrafo2.innerHTML == ""){
        parrafo2.innerHTML ="En 2008, Hisaishi compuso la banda sonora de Okuribito (おくりびと, en inglés Departures), película japonesa dirigida por Yōjirō Takita y ganadora de un Premio Óscar en 2009 como mejor película de habla no inglesa."
    }
    else{
        parrafo2.innerHTML = ""
    }
}
let boton3 = document.querySelector("#mostrar")
let p3 = document.querySelector("#p3")
boton3.onclick = ocultar 
function ocultar(){
    p3.style.display = "none"
    setTimeout(aparecer, 3000);
}
function aparecer(){
    p3.style.display = "block"
}