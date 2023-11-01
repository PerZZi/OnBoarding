let numero = prompt("Ingrese un numero del 1 al 100")
if (numero > 0 && numero < 100) {
    for (i = numero; i > 0; i--) {
        console.log(i)
    }
}
else {
    console.log("Numero fuera de rango")
}

let numero2 = Number(prompt("Ingresa un numero del 1 al 10"))
for (let i = 0; i <=10; i++) {
    console.log(i*numero2)
}

let acumulador = 0
let numeroIngresado = Number(prompt("Ingrese los numeros"))
while (numeroIngresado !== 0) {
    acumulador = acumulador + numeroIngresado
    numeroIngresado = Number(prompt("Ingrese los numeros"))
}
console.log(acumulador)

let acumulador2=0
let numeroIngre=Number(prompt("Ingrese numero"))
do {
    acumulador2=acumulador2+numeroIngre
    numeroIngre=Number(prompt("Ingrese numero"))
    console.log(acumulador2)
} while (numeroIngre!==0);

let guardado=10
let nuevoNumero=Number(prompt("Ingresa un numero"))
while (nuevoNumero!==guardado) {
    nuevoNumero=Number(prompt("Ingresa un numero"))
    if(nuevoNumero>10){
        alert("El numero es mayor al guardado")
    }
    else{
        nuevoNumero<10
        alert("El numero es menor al guardado")
    }
}
alert("Encontraste el numero")
console.log("El numero es igual "+ guardado)

let guardarDivisor=1
let numeroDivisor=Number(prompt("Ingre el numero"))
while (guardarDivisor<=numeroDivisor) {
    if(numeroDivisor%guardarDivisor==0){
        console.log(guardarDivisor)
    }
    guardarDivisor++;
}

function sonarCampana(){
    console.log("Ding Dong")
    return "Ding Dong"
}

let acumular=" "
for (let i = 0; i <5; i++) {
    acumular=acumular+" Ding dong"
}
console.log(acumular)

const fechaLimite= " 1997-8-3"
const fechas=["1984-18-2", "1998-3-2", "1973-15-7", "2024-21-18", "2081-1-9"]

for (let i = 0; i < fechas.length; i++) {
    if(fechas>=fechaLimite){
        console.log(fechas[i])
    }
}

const colores=["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

// for (const color of colores) {
//     console.log(color)
// }

function nombrarColor(colores){
    console.log(colores)
}

const numeros=[5,7,10,13,17]

for (const doble of numeros) {
    console.log("El doble de: "+doble+" es "+doble*2)
}

let papa={
    nombre: "Jorge",
    apellido: "Fernandez",
    edad: 33,
    integrante: "padre",
}

let mama={
    nombre:"Nancy",
    apellido: "Perez",
    edad: 30,
    integrante: "madre",
}

let hijo={
    nombre:"Julian",
    apellido: "Fernandez",
    edad: 12,
    integrante: "hijo",
}

let mascota={
    nombre:"Chocolate",
    apellido: "Fernandez",
    edad: 4,
    integrante: "mascota",
}

let personas=[papa,mama,hijo,mascota]

function presentacionFamiliar(){
    for (const propiedades of personas) {
        console.log("Hola soy: "+propiedades.nombre+" tengo "+propiedades.edad)
    }
}
presentacionFamiliar()

let casa={
    habitaciones: 4,
    color: "Blanca",
    tamaño: "Grande",
    pisos : 2,
}

for (const key in casa) {
    console.log(key)
}

let casa2 = {
    habitaciones: 8,
    color: "Gris",
    tamaño: "Grande",
    pisos: 1,
}

for (const key in casa2) {
    console.log(casa2[key])
}

let sumaPar=0
let sumaImpar=0
let numerosIngresados=Number(prompt("Ingrese los numeros"))

while (numerosIngresados!==0) {
    if(numerosIngresados%2==0){
        sumaPar=sumaPar+numerosIngresados
    }
    else{
        sumaImpar=sumaImpar+numerosIngresados
    }
    numerosIngresados=Number(prompt("Ingrese los numeros"))
}
console.log("La suma de los pares es: "+sumaPar," y "+" La suma de los impares es: "+sumaImpar)

let numeroGrande=0
let arregloNumeros=[1,20,3,5,58,6,7,8,9,15]

for (const indice of arregloNumeros) {
    if(numeroGrande<indice){
        numeroGrande=indice
    }
}
console.log(numeroGrande)