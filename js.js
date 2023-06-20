let validar = false;
let inputs = [];
let total = 0;
const bdProductos = [];

const urlProductos = "https://6490c83a2f2c7ee6c2c77e0a.mockapi.io/productos";

const form = document.getElementById("form");
const inputsForm = document.querySelectorAll('.inputForm');
const comprar = document.getElementById("btnCompra");
const muestraCarrito = document.getElementById('muestraCarrito');
const listaProd = document.getElementById("listaProd");

addEventListener("DOMContentLoaded", () => {
    importaProductos();
});

function renderizarProductos(bdProductos){
    listaProd.innerHTML = "";
    if (bdProductos.length > 0){
        bdProductos.forEach((producto) => {
            console.log(producto)
        const {nombre, precio, descripcion, stock, id} = producto;
        listaProd.innerHTML += `
            <h3>${nombre}</h3>
            <h6>${precio}</h6>
            <p>${descripcion}</p>
            <p>${stock}</p>
            <button id=${id}>Comprar</button>
            <button id=${id}>Editar</button> 
            `;
        });
    }else{
        listaProd.innerHTML = `<p>No hay prod</p>`
    }
}

function importaProductos(){
    fetch(urlProductos).then((res) => res.json()).then((data) => 
    bdProductos.push(...data)
    )
    // fetch(urlProductos)
    // .then((res) => res.json())
    // .then((data) => {
    //     data.forEach((producto) => {
    //         console.log(producto)
    //         bdProductos.push(producto);
    //     })}) 
        renderizarProductos(bdProductos);
    };


async function crearProd (producto){
    const resp = await fetch(urlProductos, {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await resp.json();
    bdProductos.push(data);
    renderizarProductos(bdProductos);
}