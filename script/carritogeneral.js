let carritoGeneral = [];

function actualizarCarritoGeneral() {
    const carritoGeneralContainer = document.getElementById("carritoGeneral");
    carritoGeneralContainer.innerHTML = "";

    if (carritoGeneral.length > 0) {
        let totalGeneral = 0;

        for (let i = 0; i < carritoGeneral.length; i++) {
            const producto = carritoGeneral[i];
            const subtotal = producto.precio * producto.cantidad;
            totalGeneral += subtotal;

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container");

            const itemNombre = document.createElement("span");
            itemNombre.innerText = "Producto: " + producto.nombre + " ";

            const itemCantidad = document.createElement("span");
            itemCantidad.innerText = "Cantidad: " + producto.cantidad + " ";

            const itemSubtotal = document.createElement("span");
            itemSubtotal.innerText = "Subtotal: $" + subtotal + " ";

            itemContainer.appendChild(itemNombre);
            itemContainer.appendChild(itemCantidad);
            itemContainer.appendChild(itemSubtotal);

            carritoGeneralContainer.appendChild(itemContainer);
        }

        const descuento = totalGeneral > 2 ? totalGeneral * 0.15 : 0;
        const totalFinal = totalGeneral - descuento;

        const totalGeneralContainer = document.createElement("div");
        totalGeneralContainer.classList.add("total-general");
        totalGeneralContainer.innerText = "Total Final: $" + totalFinal;

        carritoGeneralContainer.appendChild(totalGeneralContainer);

        // Mostrar u ocultar el botón "Limpiar Carrito" según la cantidad de elementos en el carrito
        const btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito");
        btnLimpiarCarrito.style.display = carritoGeneral.length > 0 ? "block" : "none";
    } else {
        const mensajeNoProductos = document.createElement("p");
        mensajeNoProductos.innerText = "No hay productos agregados al carrito general.";

        carritoGeneralContainer.appendChild(mensajeNoProductos);

        // Ocultar el botón "Limpiar Carrito" si no hay elementos en el carrito
        const btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito");
        btnLimpiarCarrito.style.display = "none";
    }

    // Mostrar u ocultar el botón "Finalizar Compra" según la cantidad de elementos en el carrito
    const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
    btnFinalizarCompra.style.display = carritoGeneral.length > 0 ? "block" : "none";
}

function finalizarCompra() {
    // Limpiar el carrito general
    carritoGeneral = [];
    localStorage.removeItem("carritoGeneral");
    localStorage.removeItem("carrito");

    // Actualizar el carrito general en el HTML
    actualizarCarritoGeneral();

    // Redireccionar a formulariodepago.html
    window.location.href = "formulariodepago.html";
}

function limpiarCarrito() {
    // Limpiar el carrito general
    carritoGeneral = [];
    localStorage.removeItem("carritoGeneral");
    localStorage.removeItem("carrito");

    // Actualizar el carrito general en el HTML
    actualizarCarritoGeneral();
}

window.addEventListener("load", () => {
    const carritoGeneralGuardado = localStorage.getItem("carritoGeneral");
    if (carritoGeneralGuardado) {
        carritoGeneral = JSON.parse(carritoGeneralGuardado);
        actualizarCarritoGeneral();
    }

    // Agregar evento click al botón "Finalizar Compra"
    const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
    btnFinalizarCompra.addEventListener("click", finalizarCompra);

    // Agregar evento click al botón "Limpiar Carrito"
    const btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito");
    btnLimpiarCarrito.addEventListener("click", limpiarCarrito);

    actualizarCarritoGeneral();
});







