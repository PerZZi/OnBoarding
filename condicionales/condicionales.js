let num1 = 4
let num2 = 5
if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2)
}

let igual=7
let distinto=10

if(igual==distinto){
    console.log("Son iguales")
}
else{
    console.log("Son distintos")
}


//ejercicio fechas

let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"
if (fecha1 > fecha2) {
    console.log("La fecha " + fecha1 + " es mayor")
}
else if (fecha1 < fecha2) {
    console.log("La fecha " + fecha1 + " es menor")
}
else {
    console.log("Son iguales")
}

fecha1 = "2018-10-7"
fecha2 = "2018-2-17"
if (fecha1 > fecha2) {
    console.log(fecha1 + " Es mayor")
}
else {
    console.log(fecha2 + " Es mayor")
}

let dato1 = 5
let dato2 = 7
let dato3 = 9

if (dato1 > dato2 && dato1 > dato3) {
    console.log(dato1 + " Es el mayor")
}
else if (dato2 > dato1 && dato2 > dato3) {
    console.log(dato2 + " Es el mayor")
}
else {
    console.log(dato3 + " Es el mayor")
}
// ejercicio switch

let color = prompt("Ingrese un color")

switch (color) {
    case "Rojo":
        alert("El color de la pasion")
        break
    case "Azul":
        alert("El color del mar")
        break
    case "Verde":
        alert("El color de la naturaleza")
        break
        default:
        alert("No se encontro el color")
        break
}

let valorNum1=Number(prompt("Ingrese un valor del 1 al 100")) //se castea para convertir de candena a number
let valorNum2=Number(prompt("Ingrese un segundo valor del 1 al 100"))
if(valorNum1>=1 && valorNum1<=100 || valorNum2>=1 && valorNum2<=100){
    let operacion=prompt("Ingresa el caso")

switch(operacion){
    case "Suma":
    alert(valorNum1+valorNum2)
    break

    case "Resta":
    alert(valorNum1-valorNum2)
    break

    case "Multiplicacion": 
    alert(valorNum1*valorNum2)
    break

    case "Division":
    alert(valorNum1/valorNum2)
    break

    default:
        alert("No existe esa operacion")
        break
}
}
else{
    alert("Numero fuera de rango")
}

// objeto con condicionales
let persona1={
    nombre: "Jorge",
    edad: 30,
    altura: 1.65,
}
let persona2={
    nombre: "Roberto",
    edad: 59,
    altura: 1.87,
}

if(persona1.altura>persona2.altura){
    console.log("Jorge es mas alto")
}
else{
    console.log("Roberto es mas alto")
}

// let miNombre=prompt("Ingrese su nombre")
// let miEdad=Number(prompt("Ingrese su edad"))
// let miAltura=Number(prompt("Ingrese su altura"))
// let miVision=Number(prompt("Ingrese su vision"))

if(miEdad>=18){ 
    alert("Cumple con la edad minima")
}
else{
    alert("No tiene la edad suficiente")
}

if(miAltura>=150){
    alert("Tiene la altura suficiente")
}
else{
    alert("No tiene la altura suficiente")
}

if(miVision>=8 && miVision<=10){
    alert("Tiene la suficiente vision")
}
else{
    alert("No tiene la suficiente vision")
}


let clasiEdad=prompt("Ingresa una edad")

if(clasiEdad>=0 && clasiEdad<=12){
    alert("Eres un infante")
}
else if(clasiEdad>=13 && clasiEdad<=18){
    alert("Eres un adolecente")
}
else if(clasiEdad>=19 && clasiEdad<=45){
    alert("Eres mayor joven")
}
else{
    alert("Eres un anciano")
}

let numero=Number(prompt("Ingresa un numero del 1 al 3"))
let cualquierNumero=Number(prompt("Ingrese cualquier numero"))
switch(numero){
    case 1:
        alert("El numero ingresado es 1: " + cualquierNumero)
    break
    case 2:
        alert("El doble del numero ingresado es: " + cualquierNumero*2)
    break
    case 3:
        alert("El triple del numero ingresado es: " + cualquierNumero*3)
    break
    default:
    alert("Ese valor no esta permitido")
}


let nombreCliente=prompt("Ingrese el nombre del cliente")
let pase=prompt("¿Que tipo de pase tiene?")
let entrada=prompt("¿Tiene entrada?")

if(nombreCliente=="Emiliano" || pase=="VIP"){
    alert("Bienvenido")
}
else if(entrada=="si"){
    let entrada2=prompt("Desea utilizarla?")
    if(entrada2=="si"){
        alert("Bienvenido")
    }
    else{
        alert("No puedes ingresar")
    }
}
else if(nombreCliente && pase && entrada){
    let comprar=prompt("Desea comprar?")
    if(comprar=="si"){
        let dinero=prompt("Ingresa tu dinero")
    }
    else if(dinero>1000){
        alert("Vendido")
    }
    else if(dinero<1000){
        alert("No se puede comprar")
    }
    else{
        alert("No tienes dinero suficiente")
    }
}




