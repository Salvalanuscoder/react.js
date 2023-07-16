// funciones - expresiones

let vida = 100

// escribir una funcion que reduzca la vida en un valor determinado

// function recibirGolpe() {
//     // vida = vida - 30
//     vida -= 30
// }

const recibirGolpe = (danio) => {
    vida -= danio

    if (vida < 0) {
        vida = 0
    }
}

recibirGolpe(30)
recibirGolpe(12124321542150)

// console.log(vida)

// const sumar = (a, b) => {
//    return a + b
// }

                // return
const sumar = (a, b) => a + b

// const resultado = sumar(10, 15)

// console.log( sumar(10, 15) )

// objetos - desestructuracion

const user = {
    full_name: "John Doe",
    age: 30,
    curso: "ReactJS",
    phone: {
        home: 12345,
        mobile: 43897523
    }
}

// sintaxis des
// const {prop1, prop2, ...p} = obj


// const { nombre, edad } = user
// const { full_name: nombre, age: edad } = user
// const { age: edad, phone: { mobile } } = user

// console.log(edad, mobile)

const usuarios = ["Jorge", "Raul", "Julieta", "Matias"]

const [,, a, b] = usuarios

// console.log(a, b)

// const arr = [24, "ReactJS", "Fede Blautzik"]

// const [age, curso, name] = arr

// console.log(name)
// console.log(age)
// console.log(curso)

// op. ternario


const temperatura = 11

// let mensaje

// if (temperatura > 20) {
//     mensaje = "Día caluroso"
// } else {
//     mensaje = "Día fresco"  
// }

// console.log(mensaje)


// condicion ? caso1 : caso2

// temperatura >= 20 ? console.log("Día caluroso") : console.log("Día fresco")


const mensaje = temperatura >= 20 ? "Día caluroso" : "Día fresco"
console.log(mensaje)

// falsy: false, null, undefined, NaN, 0, ''


// AND &&
// console.log( true && "Hola mundo" )
// OR ||
// console.log( null || "Otra cosa" )