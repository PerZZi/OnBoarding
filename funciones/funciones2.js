function sumar(){
    console.log(100*20)
}
sumar()

function sumar2(nume1,nume2){
    console.log(100*20)
}
sumar2()

function sumar3(nume1,nume2){
    let numeA=100
    let numeB=20
    resultado=numeA*numeB
    console.log(resultado)
}
sumar3()

function sumar4(nume1,nume2){
    let numeA=100
    let numeB=20
    console.log(numeA*numeB)
}
sumar4()

function sumarConRetorno(nume1,nume2){
    let resultado=nume1*nume2
    return resultado
}
console.log(sumarConRetorno(100,20))

// funcion anonima//

// const anonima=function sumarAnon(nume1,nume2){
//     let resu=100*20
//     return resu
// }
// console.log(sumarAnon())

//funcion flecha//




function saludar(nombre){
    console.log("Hola soy: " + nombre)
}
saludar("Emiliano")



// otra funcion anonima para hacer//




function area(base,altura){
    let areaTriangulo=base*altura
    return areaTriangulo
}
console.log(area(3,5))

function perimetro(lado1,lado2,lado3){
    let perimetroTrian=lado1+lado2+lado3
    return perimetroTrian
}
console.log(perimetro(3,5,8))

const calcularTotal= (precio,cantidad) => {
    let total=precio*cantidad
    if(cantidad>=10){
        let descuentoDel10=total*0.10
        return descuentoDel10
    }
    else{
        cantidad>=20
        descuentoDel20=total*0.20
        return descuentoDel20
    }
}

function calcularImpuesto(ingreso){
    if(ingreso<=10000){
        let impuestoDel10=ingreso*0.10
        return "Impuesto con el 10% de descuento: "+impuestoDel10
    }
    else if(ingreso>10000 && ingreso<20000){
        let impuestoDel15=ingreso*0.15
        return "Impuesto con el 15% de descuento: "+impuestoDel15
    }
    else{
        let impuestoDel20=ingreso*0.20
        return "Impuesto con el 20% de descuento: "+impuestoDel20
    }
}
console.log(calcularImpuesto(15000))