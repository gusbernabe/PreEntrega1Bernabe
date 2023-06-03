Esta aplicacion esta destinada a funcionar como sitio e-comerce de la marca Vit Indumentaria.
En una primera instancia el usuario ingresa la cantidad de productos a adquirir y luego mediante el evento que escucha el boton "agregar al carrito" realiza la funcion "sumar", la cual nos detalla el total segun la cantidad, un descuento si se desea adquirir 2 o mas productos, y modifica el archivo html a travez del DOM para mostrar los mensajes del total, de si hay otros productos agregados al carrito, del descuento si corresponde aplicarlo y calcula una fecha de retiro.
Los datos del producto los obtiene del array "misProductos" alojado en el archivo main, accede a cada uno a travez de su posicion, los importa, los utiliza para la funcion sumar y almacena los resultados del carrito individual en el local storage, los cuales tambien se pueden eliminar con el evento asociado al boton "limpiar carrito".
Estos totales de los carritos individuales luego van a ser recuperados por el carrito general, este archivo se encarga de sumar los totales acumulados y modificar elementos a travez del DOM para que muestre los mensajes de si hay elementos agregados al carrito general, cuantos son, de que tipo de unidad fueron agregados y el total con el descuento aplicado.
A su vez modifica el archivo html para dejar ver los botones "finalizar compra" y "limpiar carrito" solo si es que se agregaron productos al mismo.
Al hacer click en el boton "finalizar compra" los elementos guardados en el carrito se eliminan (unicamente por ser parte de la simulacion) y nos redirecciona al simulador de pago con tarjeta de credito, el cual se vacia luego de presionar el boton para confirmar la compra y nos muestra una notificacion de sweet alert simulando una respuesta a una compra exitosa.
Tambien hay otro archivo que opera como formulario de contacto, el cual nos permite consultar una API externa a travez del metodo fetch para el envio de la informacion cargada en el mismo. Una vez que la consutla es enviada a travez del evento asociado al boton "enviar" los datos del formulario se resetean y se muestra vacio, y tambien nos muestra una notificacion de sweet alert dejando saber al usuario que la consulta fue enviada correctamente.