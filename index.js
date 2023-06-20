let validar = false;
let producto1 = 0;
let producto2 = 0;
let producto3 = 0;
let producto4 = 0;
let carrito = [{
    cantProducto1: 0,
    cantProducto2: 0,
    cantProducto3: 0,
    cantProducto4: 0,
    precioProducto1: 0,
    precioProducto2: 0,
    precioProducto3: 0,
    precioProducto4: 0,
}];
let inputs = [];
let calcProd1 = 0;
let calcProd2 = 0;
let calcProd3 = 0;
let calcProd4 = 0;
let total = 0;
let bdClientes = [];
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

const urlProductos = "https://6490c83a2f2c7ee6c2c77e0a.mockapi.io/productos";
const urlClientes = "https://6490c83a2f2c7ee6c2c77e0a.mockapi.io/clientes";

const form = document.getElementById("form");
const inputsForm = document.querySelectorAll('.inputForm');
const comprar = document.getElementById("btnCompra");
const agregaProd1 = document.getElementById("btnAgregaProducto1");
const agregaProd2 = document.getElementById("btnAgregaProducto2");
const agregaProd3 = document.getElementById("btnAgregaProducto3");
const agregaProd4 = document.getElementById("btnAgregaProducto4");
const muestraCarrito = document.getElementById('muestraCarrito');




agregaProd1.addEventListener('click', (e) => {
    e.preventDefault();
    producto1 += 1;
    carrito[0] = producto1
    carrito[4] = bdProductos[0].precio;
    localStorage.setItem('Producto 1', JSON.stringify(carrito[0]))
    localStorage.setItem('Precio 1', JSON.stringify(carrito[4]))
    renderizarCarrito();
})

agregaProd2.addEventListener('click', (e) => {
    e.preventDefault();
    producto2 += 1;
    carrito[1] = producto2
    carrito[5] = bdProductos[1].precio;
    localStorage.setItem('Producto 2', JSON.stringify(carrito[1]))
    localStorage.setItem('Precio 2', JSON.stringify(carrito[5]))
    renderizarCarrito();
})

agregaProd3.addEventListener('click', (e) => {
    e.preventDefault();
    producto3 += 1;
    carrito[2] = producto3
    carrito[6] = bdProductos[2].precio;
    localStorage.setItem('Producto 3', JSON.stringify(carrito[2]))
    localStorage.setItem('Precio 3', JSON.stringify(carrito[6]))
    renderizarCarrito();
})

agregaProd4.addEventListener('click', (e) => {
    e.preventDefault();
    producto4 += 1;
    carrito[3] = producto4
    carrito[7] = bdProductos[3].precio;
    localStorage.setItem('Producto 4', JSON.stringify(carrito[3]))
    localStorage.setItem('Precio 4', JSON.stringify(carrito[7]))
    renderizarCarrito();
})


function renderizarCarrito(arrayCarrito){
    muestraCarrito.innerHTML = "";
    arrayCarrito = Object.values(carrito);
    muestraCarrito.innerHTML += `
    <p>Producto 1: ${JSON.parse(localStorage.getItem('Producto 1'))} Costo: $ ${calculoProducto1()}</p>
    <p>Producto 2: ${JSON.parse(localStorage.getItem('Producto 2'))} Costo: $ ${calculoProducto2()}</p>
    <p>Producto 3: ${JSON.parse(localStorage.getItem('Producto 3'))} Costo: $ ${calculoProducto3()}</p>
    <p>Producto 4: ${JSON.parse(localStorage.getItem('Producto 4'))} Costo: $ ${calculoProducto4()}</p>
    <p>TOTAL: $ ${calculoTotal()}</p>
    `;
};

function calculoProducto1(){
    calcProd1 = JSON.parse(localStorage.getItem('Producto 1')) * JSON.parse(localStorage.getItem('Precio 1'))
    return calcProd1;
}

function calculoProducto2(){
    calcProd2 = JSON.parse(localStorage.getItem('Producto 2')) * JSON.parse(localStorage.getItem('Precio 2'));
    return calcProd2;
}

function calculoProducto3(){
    calcProd3 = JSON.parse(localStorage.getItem('Producto 3')) * JSON.parse(localStorage.getItem('Precio 3'));
    return calcProd3
}

function calculoProducto4(){
    calcProd4 = JSON.parse(localStorage.getItem('Producto 4')) * JSON.parse(localStorage.getItem('Precio 4'));
    return calcProd4
}

function calculoTotal(){
    total = JSON.parse(localStorage.getItem('Producto 1')) * JSON.parse(localStorage.getItem('Precio 1')) + JSON.parse(localStorage.getItem('Producto 2')) * JSON.parse(localStorage.getItem('Precio 2')) + JSON.parse(localStorage.getItem('Producto 3')) * JSON.parse(localStorage.getItem('Precio 3')) + JSON.parse(localStorage.getItem('Producto 4')) * JSON.parse(localStorage.getItem('Precio 4'))
    return total;
}

inputsForm.forEach(input => {
    input.addEventListener('input', () => {
        if (inputsForm[0].values && inputsForm[0].values && inputsForm[1].values && inputsForm[2].values && inputsForm[3].values){
            validar = true;
        }else{
            validar = false;
        }
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    enviaDatos();
    // if (validar){
    // }else{
    //     alert("faltan datos");
    // }
})

function enviaDatos(){
    const nombre = inputsForm[0].value;
    const apellido = inputsForm[1].value;
    const direccion = inputsForm[2].value;
    const telefono = inputsForm[3].value;
    const datos = {
        nombre,
        apellido,
        direccion,
        telefono,
    }
    
    inputs.push(datos);
    localStorage.setItem('inputs', JSON.stringify(inputs))
    

    Swal.fire({
        title: (`Muchas gracias ${nombre}, tu pedido será enviado a ${direccion}, el costo total será $ ${calculoTotal()}`),
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })

}

function importaClientes(){
    fetch(urlClientes).then((res) => res.json()).then((data) => 
    bdClientes.push(...data)
    )
    console.log(bdClientes)
}

importaClientes();

function verClientes(e){
    e.preventDefault();
    const nombre = inputsForm[0].value;
    const apellido = inputsForm[1].value;
    const direccion = inputsForm[2].value;
    const telefono = inputsForm[3].value;
    const datos = {
        nombre,
        apellido,
        direccion,
        telefono,
    }
    bdClientes.push(datos);
    importaClientes()
}


// renderizarCarrito();

// console.log(carrito)


// {
//     cantProducto1: localStorage.setItem('carrito', JSON.stringify(producto1)),
// }



//Clases constructoras//

// class Productos{
//     constructor(nombre, precio, descripcion, stock){
//         this.nombre = nombre;    
//         this.precio  = precio;
//         this.descripcion = descripcion;
//         this.stock = stock;
//     }
// }

// //Variables constructoras//

// function Cliente(obj){
//     this.nombre = obj.nombreCliente;    
//     this.direccion = obj.direccionCliente;
//     this.saludaCliente = function()
//         {
//             alert(`Bienvenido ${cliente.nombre}`)    
//         }
// }

// //Agregamos los productos//

// function agregaProductos() {
//     for (const producto of bdProductos){
//         arrayProductos.push(new Productos(producto.nombre, producto.precio, producto.descripcion, producto.stock))    
//     }
// }

// agregaProductos();


// alert("Bienvenido a Negocio");

//Agregar Cliente//
// const cliente = new Cliente(
//     {
//         nombreCliente: prompt("Ingrrese su nombre"),    
//         direccionCliente: prompt ("Ingrese su dirección")
//     }
// )
// cliente.saludaCliente()

// function iniciarPrograma(){
//     while (validacion1 == true){
//         let choice1 = Number(prompt(`Que desea realizar?\n1 - Comprar\n2 - Ver Productos\n3 - Buscar Productos por Precio\n4 - Salir`));    
//         switch(choice1){
//             case 1:    
//                 validacion1 = false;
//                 while (validacion2 == true){
//                     let choice = Number(prompt(`Elige una opción:\n1 - Producto 1 $${arrayProductos[0].precio}\n2 - Producto 2 $${arrayProductos[1].precio}\n3 - Producto 3 $${arrayProductos[2].precio}\n4 - Producto 4 $${arrayProductos[3].precio}\n5 - Salir`));    
//                     switch(choice){
//                         case 1:    
//                             alert(`Felicidades elegiste Producto 1!!`);
//                             break;
//                         case 2:
//                             alert(`Felicidades elegiste Producto 2!!`);
//                             break;
//                         case 3:
//                             alert(`Felicidades elegiste Producto 3!!`);
//                             break;
//                         case 4:
//                             alert(`Felicidades elegiste Producto 4!!`);
//                             break;
//                         case 5:
//                             alert(`Muchas gracias por visitar Negocio`);
//                             validacion2 = false
//                             break;
//                         default:
//                             continue;
//                     }
//                     if (choice != 5){
//                         otro = Number(prompt("Desea agregar otro producto?\n1 - Si\n2 - No"))    
//                         switch (otro){
//                             case 1:    
//                                 continue;
//                             case 2:
//                                 alert("Por el momento sólo aceptamos pago en efectivo");
//                                 alert(`Gracias por elegir Negocio, pronto estará recibiendo su pedido en ${cliente.direccion}`)
//                                 validacion2 = false
//                                 break;
//                             default:
//                                 alert ("Por favor ingrese una opción válida")
//                                 break;
//                         }
//                     }else{
//                         break;    
//                     }
//                 }
//                 break;
//             case 2:
//                 mostrarProductos();
//                 break;
//             case 3:
//                 buscarProductosPrecio();
//                 break;
//             case 4:
//                 alert(`Muchas gracias por visitar Negocio`);
//                 validacion1 = false
//                 break;
//             default:
//                 continue;
//         }
//     }
// }




// function mostrarProductos() {
//     for (const producto of arrayProductos){
//         alert (`${producto.nombre}\n$ ${producto.precio}\n${producto.descripcion}`)    
//     }
// }

// function buscarProductosPrecio(){
//     let precioMin = Number(prompt("Ingrese el precio mínimo:"))    
//     let precioMax = Number(prompt("Ingrese el precio máximo:"))
//     let busquedaPrecio = arrayProductos.filter((producto => {
//         return (producto.precio <= precioMax && producto.precio >= precioMin)}));    
//     busquedaPrecio.forEach(producto => {
//         alert (`${producto.nombre}\n$ ${producto.precio}\n${producto.descripcion}`)    
//     });
// }





// iniciarPrograma();

