// Obtén una referencia al formulario y al botón de envío
let formulario = document.getElementById('miFormulario');
let botonEnvio = document.getElementById('botonEnviar');

// Agrega un evento al botón de envío para manejar el envío del formulario
botonEnvio.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores ingresados por el usuario desde el formulario
    let campo1 = document.getElementById('campo1').value;
    let campo2 = document.getElementById('campo2').value;
    let campo3 = document.getElementById('campo3').value;

    // Crea un objeto con los datos del formulario
    let datosFormulario = {
        campo1: campo1,
        campo2: campo2,
        campo3: campo3,
    };

    // Realiza la solicitud POST a la API utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
    .then(function (response) {
        if (response.ok) {
            return response.json(); // Si la respuesta es exitosa, convierte los datos en formato JSON
        } else {
            throw new Error('Error en la solicitud a la API.');
        }
    })
    .then(function (data) {
        // Maneja la respuesta de la API según tus necesidades
        console.log('La consulta se envió correctamente a la API.');
        console.log(data);
        
        // Limpia el formulario
        formulario.reset();
        
        // Muestra una alerta de éxito
        Swal.fire(
            'ENVIADO',
            'Tu consulta fue enviada con exito!',
            'success'
          )
    })
    .catch(function (error) {
        // Maneja los errores que puedan ocurrir durante la solicitud
        console.error(error);
    });
});

