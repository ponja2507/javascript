let validacion1 = true;
let validacion2 = true;
let otro = 0;
let arrayProductos = [];

const bdProductos = [
        {
        nombre:"Producto 1",
        precio: 1000,
        descripcion: "Descripción de Producto 1",
        stock: true
        },
        {
        nombre:"Producto 2",
        precio: 1500,
        descripcion: "Descripción de Producto 2",
        stock: true
        },
        {
        nombre:"Producto 3",
        precio: 2000,
        descripcion: "Descripción de Producto 3",
        stock: true
        },
        {
        nombre:"Producto 4",
        precio: 2500,
        descripcion: "Descripción de Producto 4",
        stock: true
        }
]

//Clases constructoras//

class Productos{
    constructor(nombre, precio, descripcion, stock){
        this.nombre = nombre;
        this.precio  = precio;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}

//Variables constructoras//

function Cliente(obj){
    this.nombre = obj.nombreCliente;
    this.direccion = obj.direccionCliente;
    this.saludaCliente = function()
        {
            alert(`Bienvenido ${cliente.nombre}`)
        }
}

//Agregamos los productos//

function agregaProductos() {
    for (const producto of bdProductos){
        arrayProductos.push(new Productos(producto.nombre, producto.precio, producto.descripcion, producto.stock))
    }
}

agregaProductos();


alert("Bienvenido a Negocio");

//Agregar Cliente//
const cliente = new Cliente(
    {
        nombreCliente: prompt("Ingrrese su nombre"),
        direccionCliente: prompt ("Ingrese su dirección")
    }
)
cliente.saludaCliente()

function iniciarPrograma(){
    while (validacion1 == true){
        let choice1 = Number(prompt(`Que desea realizar?\n1 - Comprar\n2 - Ver Productos\n3 - Buscar Productos por Precio\n4 - Salir`));
        switch(choice1){
            case 1:
                validacion1 = false;
                while (validacion2 == true){
                    let choice = Number(prompt(`Elige una opción:\n1 - Producto 1 $${arrayProductos[0].precio}\n2 - Producto 2 $${arrayProductos[1].precio}\n3 - Producto 3 $${arrayProductos[2].precio}\n4 - Producto 4 $${arrayProductos[3].precio}\n5 - Salir`));
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
                            validacion2 = false
                            break;
                        default:
                            continue;
                    }
                    if (choice != 5){
                        otro = Number(prompt("Desea agregar otro producto?\n1 - Si\n2 - No"))
                        switch (otro){
                            case 1:
                                continue;
                            case 2:
                                alert("Por el momento sólo aceptamos pago en efectivo");
                                alert(`Gracias por elegir Negocio, pronto estará recibiendo su pedido en ${cliente.direccion}`)
                                validacion2 = false
                                break;
                            default:
                                alert ("Por favor ingrese una opción válida")
                                break;
                        }
                    }else{
                        break;
                    }
                }
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProductosPrecio();
                break;
            case 4:
                alert(`Muchas gracias por visitar Negocio`);
                validacion1 = false
                break;
            default:
                continue;
        }
    }
}




function mostrarProductos() {
    for (const producto of arrayProductos){
        alert (`${producto.nombre}\n$ ${producto.precio}\n${producto.descripcion}`)
    }
}

function buscarProductosPrecio(){
    let precioMin = Number(prompt("Ingrese el precio mínimo:"))
    let precioMax = Number(prompt("Ingrese el precio máximo:"))
    let busquedaPrecio = arrayProductos.filter((producto => {
        return (producto.precio <= precioMax && producto.precio >= precioMin)}));
    busquedaPrecio.forEach(producto => {
        alert (`${producto.nombre}\n$ ${producto.precio}\n${producto.descripcion}`)
    });
}





iniciarPrograma();
