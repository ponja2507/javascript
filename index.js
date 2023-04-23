const precio1 = 1000;
const precio2 = 1500;
const precio3 = 2000;
const precio4 = 2500;

alert("Bienvenido a Negocio");
let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombre}`);

let validacion = true;
let otro = 0;

while (validacion == true){
    let choice = Number(prompt(`Elige una opción:\n1 - Producto 1 $${precio1}\n2 - Producto 2 $${precio2}\n3 - Producto 3 $${precio3}\n4 - Producto 4 $${precio4}\n5 - Salir`));
    switch(choice){
        case 1:
            alert(`Felicidades elegiste Producto 1!!`);
            break;
        case 2:
            alert(`Felicidades elegiste Producto 2!!`);
            break;
        case 3:
            alert(`Felicidades elegiste Producto 3!!`);
            break;
        case 4:
            alert(`Felicidades elegiste Producto 4!!`);
            break;
        case 5:
            alert(`Muchas gracias por visitar Negocio`);
            validacion = false
            break;
        default:
            continue;
    }
    if (choice != 5){
        otro = Number(prompt("Desea agregar otro producto?\n1 - Si\n2 - No"))
            if(otro == 2){
                alert("Por el momento sólo aceptamos pago en efectivo");
                let direccion = prompt("Ingrese su dirección así le llevamos el producto a su domicilio")
                alert(`Gracias por elegir Negocio, pronto estará recibiendo su pedido en ${direccion}`)
                validacion = false
                break;
            }else if(otro == 1){
                continue;
            }else{
                continue;
            }
    }else{
        break;
    }
}























// class Persona{
//     constructor(obj){
//         this.nombre = obj.nombre.toUpperCase()
//         this.apellido = obj.apellido.toUpperCase()
//         this.edad = parseInt(obj.edad)
//         this.edadEn10Anios 
//     }
//     edadNew = () => this.edadEn10Anios = this.edad + 10
//     verPersona = () => {
//         return `Nombre: ${this.nombre}\n Apellido: ${this.apellido}\n Edad: ${this.edad}\n La edad en 10 años: ${this.edadEn10Anios}`
//     }
// }

// let trueOfalse = true

// const nombre = prompt("Ingrese Nombre:");
// const apellido = prompt("Ingrese Apellido:");
// const edad = prompt("Ingese Edad: ");


// function nuevaPersona(){
//     while(trueOfalse){
//         if (nombre === "" || apellido === "" || edad === ""){
//             alert("Debes ingresar todos los datos")
//             nombre = prompt("Ingrese Nombre:");
//             apellido = prompt("Ingrese Apellido:");
//             edad = prompt("Ingese Edad: ");
//             trueOfalse = true
//         }
//         else{
//             const person = new Persona({
//                 nombre: nombre,
//                 apellido: apellido,
//                 edad: edad
//             })
//             console.log(person);
//             person.edadNew()
//             alert(person.verPersona())
//             trueOfalse = false
//         }
//     }
// }
// nuevaPersona()