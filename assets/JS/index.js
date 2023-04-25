// Inyección de HTML

let tituloApresurese = document.querySelector("#titulo")

tituloApresurese.innerHTML = "¡Apresúrese!"

let cuerpoAdvertencia = document.querySelector("#parrafo")

cuerpoAdvertencia.innerHTML =  "El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:"

// Fecheo

let fecha = new Date()

let año = fecha.getFullYear()
let mes = fecha.getMonth() +1
let dia = fecha.getDate()

let fechaActual = [dia, mes, año].join(" / ")

let fechaDeHoy = document.querySelector("#fechaDeHoy")

fechaDeHoy.innerHTML = fechaActual