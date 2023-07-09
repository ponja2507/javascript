let inputs = [];
let total = [];
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

function renderizarProductos(bdProductos) {
	listaProd.innerHTML = "";
	if (bdProductos.length > 0) {
		bdProductos.forEach((producto) => {
			const { nombre, precio, descripcion, cantidad, id } = producto;
			listaProd.innerHTML += `
            <div class="prod">
            <h3>${nombre}</h3>
            <h6>${precio}</h6>
            <p>${descripcion}</p>
            <button class = "btnCompra-${id}" id=${id}>Comprar</button>
            </div>
            `;
		});
		bdProductos.forEach((producto) => {
			const btnCompra = document.querySelector(`.btnCompra-${producto.id}`);
			btnCompra.addEventListener("click", (e) => {
                const productoCarrito = carrito.find((prod) => {
                    return prod.id == producto.id;
            });
            if(productoCarrito){
                productoCarrito.cantidad ++;
            }else{
                carrito.push({...producto, cantidad:1})
            }
            renderizarCarrito();
        });
		});
	} else {
		listaProd.innerHTML = `<p>No hay prod</p>`;
	}
}



function importaProductos(){
    fetch(urlProductos)
    .then((res) => res.json())
    .then((data) => {
        bdProductos.push(...data);
        renderizarProductos(bdProductos);
    })
};


function renderizarCarrito(){
    muestraCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const {nombre, precio, descripcion, cantidad} = producto;
        muestraCarrito.innerHTML += `
            <h3>Producto: ${nombre}</h3>
            <h6>Precio: $ ${precio}</h6>
            <p>Cantidad: ${cantidad}</p>
            <p>Total: $ ${precio*cantidad}</p>
        `;
    })
};


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
        
    
        Swal.fire({
            title: (`Muchas gracias ${nombre}, tu pedido será enviado a ${direccion}`),
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    
    }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    enviaDatos();

})