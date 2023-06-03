import {
  unidades,
  porcentaje,
  descuento,
  total,
  Producto,
  misProductos,
} from './main.js';

// Variables locales
let unidadesLocal = unidades;
let porcentajeLocal = porcentaje;
let descuentoLocal = descuento;
let totalLocal = total;
let carritoGeneral = [];

// Función para sumar productos al carrito
function sumar() {
  const cantidad = unidadesLocal;
  if (cantidad > 0) {
    const producto = misProductos[2];
    const precio = producto.precio;

    totalLocal = cantidad * precio;
    descuentoLocal = 0; // Inicialmente establece el descuento en 0

    if (cantidad >= 2) {
      // Calcula el descuento si la cantidad es mayor o igual a 2
      descuentoLocal = totalLocal * (porcentajeLocal / 100);
      totalLocal -= descuentoLocal;

      const mensaje =
        "Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de $" +
        totalLocal;
      document.querySelector(".respuesta").innerText = mensaje;
    } else {
      document.querySelector(".respuesta").innerText = "";
    }

    document.querySelector(".total").innerText = `Total: $${totalLocal}`;

    let fechaActual = new Date();
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    let cantidadDeDias = 3;
    let fechaResultante = new Date(fechaActual.getTime() + milisegundosPorDia * cantidadDeDias);
    const mensajeEntrega = "Podrás retirar tus productos a partir del día " + fechaResultante.toLocaleDateString();
    document.querySelector(".entrega").innerText = mensajeEntrega;

    // Recuperar el carrito general existente del localStorage
    let carritoGuardado = localStorage.getItem("carritoGeneral");
    if (carritoGuardado) {
      carritoGeneral = JSON.parse(carritoGuardado);
    }

    // Verificar si el producto ya está en el carrito general
    const productoEnCarritoIndex = carritoGeneral.findIndex(item => item.nombre === producto.nombre);
    if (productoEnCarritoIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      carritoGeneral[productoEnCarritoIndex].cantidad = cantidad;
    } else {
      // Si el producto no está en el carrito, agregarlo al carrito general
      carritoGeneral.push({
        nombre: producto.nombre,
        cantidad: cantidad,
        precio: precio,
      });
    }

    // Guardar el carrito general en el almacenamiento local
    localStorage.setItem("carritoGeneral", JSON.stringify(carritoGeneral));

    // Actualizar el carrito general en el HTML
    actualizarCarritoGeneral();
  } else {
    const mensajeError = "Debes agregar al menos un producto al carrito";
    document.querySelector(".respuesta").innerText = mensajeError;
  }
}

// Actualiza la cantidad de unidades locales al cambiar el valor en el contador
const inputUnidades = document.querySelector(".contador");
inputUnidades.addEventListener("change", () => {
  unidadesLocal = inputUnidades.value;
});

// Evento click para sumar productos al carrito
const btnagregar = document.getElementById("agregar");
btnagregar.addEventListener("click", sumar);

// Carga inicial de la página
window.addEventListener("load", () => {
  const carritoGuardado = JSON.parse(localStorage.getItem("carritoGeneral"));
  if (carritoGuardado && carritoGuardado.length > 0) {
    const carrito = carritoGuardado[0];
    const mensaje =
      "Tienes " +
      carrito.cantidad +
      " unidades del " +
      carrito.nombre +
      " en tu carrito de compras, con un total de $" +
      carrito.precio * carrito.cantidad;
    document.querySelector(".respuesta").innerText = mensaje;
    document.querySelector(".total").innerText = `Total: $${carrito.precio * carrito.cantidad}`;
    const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
    limpiarCarritoBtn.style.display = "block";

    if (carrito.fecha) {
      const fechaResultante = new Date(carrito.fecha);
      const mensajeEntrega = "Podrás retirar tus productos a partir del día " + fechaResultante.toLocaleDateString();
      document.querySelector(".entrega").innerText = mensajeEntrega;
    }
  }
});

// Verifica si hay un carrito guardado al cargar la página y muestra los botones correspondientes
if (localStorage.getItem("carritoGeneral") !== null) {
  const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
  limpiarCarritoBtn.style.display = "block";
  const irACarritobtn = document.getElementById("irACarrito");
  irACarritobtn.style.display = "block";
}

// Limpia el carrito al hacer clic en el botón correspondiente
const limpiarCarritoBtn = document.getElementById("limpiarCarrito");
limpiarCarritoBtn.addEventListener("click", () => {
  localStorage.removeItem("carritoGeneral");
  limpiarCarritoBtn.style.display = "none";
  document.querySelector(".respuesta").innerText = "";
  document.querySelector(".total").innerText = "";
  document.querySelector(".entrega").innerText = "";
});