//variables
let miNombre="Emiliano"
console.log(miNombre)

let miApellido="Esteban Diaz"
console.log(miApellido)

let edad=23
console.log(edad)

let miMascota="Capitan"
console.log(miMascota)

let edadMascota=4
console.log(edadMascota)

let nombreCompleto= miNombre + " " + miApellido
console.log(nombreCompleto)

let textodePresentacion="Hola me llamo"+" "+ miNombre+" "+miApellido+" "+"tengo"+" "+ edad +" "+"mi perro se llama"+ " "+miMascota+" "+"tiene"+" "+ edadMascota+" años"
console.log(textodePresentacion)

let sumaEdades= edad+edadMascota
console.log(sumaEdades)

let restaEdades= edad-edadMascota
console.log(restaEdades)

let productoEdades=edad*edadMascota
console.log(productoEdades)


let divisionEdades= edad/edadMascota
console.log(divisionEdades)

//objetos//
let alumno={
    nombre: "Roberto",
    apellido: "Esteban",
    edad: 59, 
    altura: 1.87,
    pelo: "Negro"
}

console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.edad)
console.table(alumno.altura)
console.table(alumno.pelo)

let mascota={
    nombre: "Capitan",
    edad: 4,
    colorPelo: "Rubio",
    raza: "Mestizo",
    tamaño:"mediano",
}

console.table(mascota.nombre)
console.table(mascota.edad)
console.table(mascota.colorPelo)
console.table(mascota.raza)
console.table(mascota.tamaño)

//arreglos//
let array=["Manzana","Banana","Pera","Naranja","Uva"]

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

//metodo pompt//
let soyMayorDeEdad=prompt("Ingresa tu edad")


console.log(soyMayorDeEdad >= 18)

// arrays//
let numeros=[5,5,64,11,10,23]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])

let familia=["Papa","Mama","Hermana","Hermano","Mascota"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

// igualdades//
let primerEdad=prompt("ingresa tu edad")
let segundaEdad=prompt("Ingresa tu edad")

let igualdad= primerEdad==segundaEdad
console.log(igualdad+" Tenemos la misma edad")

let mayor= primerEdad>segundaEdad
console.log(mayor+" Yo soy el mayor")

let menor= primerEdad<segundaEdad
console.log(menor+" Soy el menor")


let edadPersona=prompt("Ingresa su edad")
let alturaPersona=prompt("Ingresa su altura")

let puedeSubir= edadPersona>6 && alturaPersona>"120cm"
console.log(puedeSubir+" Puede subir")

let noPuedeSubir= edadPersona<=6 && alturaPersona<"120cm"
console.log(puedeSubir+" No puede subir")


