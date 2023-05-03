let unidades = 0;
let porcentaje = 15;
let descuento = 0;
let total = 0;

class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = parseInt(precio);
    this.cantidad = parseInt(cantidad);
  }

  toString = function () {
    return this.nombre + "( $" + this.precio + ")";
  };
}

let misProductos = [
  new Producto(1, "Conjunto Monocrome", 15000, 1),
  new Producto(2, "Conjunto Military Green", 15000, 1),
  new Producto(3, "Conjunto Green Classic", 15000, 1),
  new Producto(4, "Conjunto White", 15000, 1),
  new Producto(5, "Conjunto Onboard", 15000, 1),
  new Producto(6, "Conjunto Blue", 15000, 1),
];

function sumar() {
  const producto = misProductos[0];
  const cantidad = unidades;
  const precio = producto.precio;
  if (cantidad >= 2) {
    total = cantidad * precio;
    descuento = cantidad >= 2 ? total * (porcentaje / 100) : 0;
    total -= descuento;    
    const mensaje =
      "Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de $" +
      total;
    document.querySelector(".respuesta").innerText = mensaje;
    document.querySelector(".total").innerText = `Total: $${total}`;

    let fechaActual = new Date();
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    let cantidadDeDias = 3
    let fechaResultante = new Date(fechaActual.getTime() + milisegundosPorDia * cantidadDeDias);
    const mensajeEntrega = "Podras retirar tus productos a partir del día " + fechaResultante.toLocaleDateString();
    document.querySelector(".entrega").innerText = mensajeEntrega;

    localStorage.setItem(
      "carrito",
      JSON.stringify({
        nombre: producto.nombre,
        cantidad: cantidad,
        total: total,
        fecha: fechaResultante.getTime(),
      })
    );
  } else {
    total = cantidad * precio;
    const mensaje = "El total por la cantidad que deseas adquirir es $" + total;
    document.querySelector(".respuesta").innerText = mensaje;
    document.querySelector(".total").innerText = `Total: $${total}`;

    let fechaActual = new Date();
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    let cantidadDeDias = 3
    let fechaResultante = new Date(fechaActual.getTime() + milisegundosPorDia * cantidadDeDias);
    const mensajeEntrega = "Podras retirar tus productos a partir del día " + fechaResultante.toLocaleDateString();
    document.querySelector(".entrega").innerText = mensajeEntrega;
    
    localStorage.setItem(
      "carrito",
      JSON.stringify({
        nombre: producto.nombre,
        cantidad: cantidad,
        total: total,
        fecha: fechaResultante.getTime(),
      })
    );
  }

  const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
  limpiarCarritoBtn.style.display = "block";
}

const inputUnidades = document.querySelector(".contador");
inputUnidades.addEventListener("change", () => {
  unidades = inputUnidades.value;
});

const btnagregar = document.getElementById("agregar");
btnagregar.addEventListener("click", sumar);

// Mostrar los datos del carrito de compras al cargar la página
window.addEventListener("load", () => {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    const carrito = JSON.parse(carritoGuardado);
    const mensaje =
      "Tienes " +
      carrito.cantidad +
      " unidades del " +
      carrito.nombre +
      " en tu carrito de compras, con un total de $" +
      carrito.total;
    document.querySelector(".respuesta").innerText = mensaje;
    document.querySelector(".total").innerText = `Total: $${carrito.total}`;
    const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
    limpiarCarritoBtn.style.display = "block";

    if (carrito.fecha) {
      const fechaResultante = new Date(carrito.fecha);
      const mensajeEntrega = "Podras retirar tus productos a partir del día " + fechaResultante.toLocaleDateString();
      document.querySelector(".entrega").innerText = mensajeEntrega;
    }
  }
});

if (localStorage.getItem("carrito") !== null) {
  const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
  limpiarCarritoBtn.style.display = "block";
}

const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
limpiarCarritoBtn.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  localStorage.removeItem("fechaEntrega"); // Borrar fecha del Local Storage
  limpiarCarritoBtn.style.display = "none";
  document.querySelector(".respuesta").innerText = "";
  document.querySelector(".total").innerText = "";
  document.querySelector(".entrega").innerText = ""; // Limpiar mensaje de entrega
});









