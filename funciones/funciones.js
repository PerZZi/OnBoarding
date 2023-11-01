function sumar(nume1,nume2){
    let resu=nume1*nume2
    return resu
}

console.log(sumar(100,20))


function saludar(nombre){
    console.log("Hola mi nombre es: "+nombre)
}
saludar("Rubi")

function suma(x,y){
    let resultado=x + y
    return resultado
}
console.log(suma(4,10))

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

function calcularTotal(precio,cantidad){
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
console.log(calcularTotal(200,15))

function mayorDeEdad(edad){
    if(edad>=18){
        console.log("Soy mayor")
    }
    else{
        console.log("Soy menor")
    }
}
mayorDeEdad(18)

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