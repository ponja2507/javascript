let validar = false;
let inputs = [];
let total = 0;
const bdProductos = [];
const carrito = [];

const urlProductos = "https://6490c83a2f2c7ee6c2c77e0a.mockapi.io/productos";

const form = document.getElementById("form");
const inputsForm = document.querySelectorAll('.inputForm');
const comprar = document.getElementById("btnCompra");
const muestraCarrito = document.getElementById('muestraCarrito');
const listaProd = document.getElementById("listaProd");

addEventListener("DOMContentLoaded", () => {
    importaProductos();
    renderizarCarrito();
});

function renderizarProductos(bdProductos){
    listaProd.innerHTML = "";
    if (bdProductos.length > 0){
        bdProductos.forEach((producto) => {
        const {nombre, precio, descripcion, stock, id} = producto;
        listaProd.innerHTML += `
            <div class="prod">
            <h3>${nombre}</h3>
            <h6>${precio}</h6>
            <p>${descripcion}</p>
            <button class = "btnCompra" id=${id}>Comprar</button>
            </div>
            `;
        const btnCompra = document.querySelectorAll(".btnCompra")
    });
}else{
    listaProd.innerHTML = `<p>No hay prod</p>`
}
}

function importaProductos(){
    fetch(urlProductos)
    .then((res) => res.json())
    .then((data) => {
        bdProductos.push(...data),
        renderizarProductos(bdProductos);
    })
};

addEventListener("click", (e) => {
    const producto = bdProductos.find((producto => {
        return producto.id == e.target.id;
    }))
    const {nombre, precio, cantidad} = producto;
    carrito.nombre = nombre;
    carrito.precio = precio;
    carrito.cantidad += cantidad;
    renderizarCarrito();
});
// btnCompra.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     seleccion == btnCompra.id;
//     console.log(seleccion)
    // carrito[0] = producto1
    // carrito[4] = bdProductos[0].precio;
    // localStorage.setItem('Producto 1', JSON.stringify(carrito[0]))
    // localStorage.setItem('Precio 1', JSON.stringify(carrito[4]))
    // renderizarCarrito();
// })


// function comprar (){
//     querySelector.forEach((btn) => {
//         btn.addEventListener("click", (e) => {
//             const producto = producto.find((producto) => {
//                 return producto.id == e.target.id;
//             });
//             const {nombre, precio, cantidad} = producto;
//             producto.nombre = nombre;
//             producto.precio = precio;
//             producto.cant = cantidad;
//             carrito.push(producto);
//             renderizarCarrito();
//             })
//         })
//     };


// async function carrito (producto){
//     const resp = await fetch(urlProductos, {
//         method: "POST",
//         body: JSON.stringify(producto),
//         headers: {
//             "Content-Type": "application/json",
//         }
//     })
//     const data = await resp.json();
//     carrito.push(data);
//     renderizarCarrito(carrito);
// }

function renderizarCarrito(){
    muestraCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const {nombre, precio, cantidad} = producto;
        muestraCarrito.innerHTML += `
            <h3>${nombre}</h3>
            <h6>${precio}</h6>
            <p>${cantidad}</p>
            <p>${total}</p>)
        `;
    })
};

// renderizarCarrito();
console.log(carrito)