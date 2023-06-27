//funciones - expresiones

let vida = 100

//escribir una funcion que redusca la vida de un valor determinado

// function recibirGolpe() {
//     // vida = vida - 30
//     vida -= 30
// }  


// recibirGolpe()


// console.log(vida)




// const recibirGolpe = (damadge) => {
//     vida -= damadge
// }

// recibirGolpe(30)
// recibirGolpe(20)
// recibirGolpe(10)

// console.log(vida)






const recibirGolpe = (damadge) => {
    vida -= damadge
}

recibirGolpe(30)
recibirGolpe(817889798)

const sumar = (a, b) =>{
    return a + b
}

// const resultado = sumar(10, 15)
// // console.log(resultado)

// console.log(sumar(10, 15))


//objetos y desestructuracion

// const user = {
//     nombre: "salva",
//     edad: 18,
//     curso: "reactjs",
// }

// let nombre = user.nombre
// let edad = user.edad

// nombre = "alumno:" + nombre
// edad += 1

// // user.nombre = "alumno salva"
// console.log(user.nombre)
// console.log(edad)
// console.log(user)



const user = {
    full_name: "salva",
    age: 18,
    curso: "reactjs",
    phone:{
        home:12345,
        mobile: 3672,
    }
}

// const {prop1,prop2, ...p} = Object


//sintaxis des
//const {prop1, prop2, ...p} = obj


// const { full_name: nombre, age:edad } = user
// console.log(nombre, edad)


// const {age, phone: {home, mobile}} = user

// console.log(age, home, mobile)

const usuarios = ["jus", "cami", "juan","nico"]

const [a,,b] = usuarios

// console.log(a,b)

// const arr = [32, "reactjs", "fede berone"]

// const [age, curso, name] = arr

// console.log(name)
// console.log(age)
// console.log(curso)


//op. tenerario

// const temperatura = 11

// let mensaje 

// if (temperatura > 20) {
//     console.log("dia caluroso")
// }else {
//     console.log("dia fresco")
// }



const temperatura = 11

// let mensaje 

// if (temperatura > 20) {
//     mensaje = ("dia caluroso")
// }else {
//     mensaje = ("dia fresco")
// }

// console.log(mensaje)

//condicional ? caso1 : caso2 

// temperatura >= 20 ? console.log("dia caluroso") : console.log("dia fresco")


const mensaje = temperatura >= 20 ? "dia caluroso" : "dia fresco"

console.log(mensaje)



console.log(document)
// falsy: false, null, undefined, NaN, 0, ''


//AND &&
// console.log (true && "hola mundo")
console.log (null && "hola mundo")
//OR ||
console.log(true || "otra cosa")
console.log(null || "otra cosa")