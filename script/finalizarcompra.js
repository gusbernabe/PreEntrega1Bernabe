function pagar(event) {
    event.preventDefault();

    // Realizar las acciones necesarias al finalizar la compra
    Swal.fire({
        icon: 'success',
        title: 'COMPRA REALIZADA',
        text: 'Tu compra fue realizada con éxito!',
        footer: '<a href="productos.html">¿Quieres seguir comprando?</a>',
    });
    
    // Limpiar los campos
    const campos = document.getElementsByClassName("casilla");
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = "";
    }
}

const btnPagar = document.getElementById("btnPagar");
btnPagar.addEventListener("click", pagar);


