// INICIO PRE-ENTREGA 1
// Sumar totales de productos seleccionados y calcular descuento segun promocion de segunda unidad en ofertas.html
// let cantidad = parseInt(prompt("Ingresa la cantidad de conjuntos que deseas adquirir:"));
// let precioConjunto = 15000;
// let porcentaje = 15;
// let descuento = 0;
// let total = 0;

// if (cantidad >= 2) {
//   total = cantidad * precioConjunto;
//   descuento = total * (porcentaje/100);
//   total = total - descuento;
//   alert("Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de $" + total);
//   console.log("Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de $" + total);
// } else {
//   total = cantidad * precioConjunto;
//   alert("El total por la cantidad que deseas adquirir es $" + total)
//   console.log("El total por la cantidad que deseas adquirir es $" + total);
// }

// Calcular la cantidad de unidades en stock restante segun la cantidad que vaya a adquirir el usuario 
// El valor de la variante cantidad se debe restar del total del stock 
// let stock = 20;
// let unidadesAReducir = cantidad;

// for (let i = stock; i > 0; i--) {
//   if (i >= unidadesAReducir) {
//     stock = stock - unidadesAReducir;
//     if (stock == 1) {
//       console.log("Queda 1 unidad en stock");
//     } else {
//       console.log("Quedan " + stock + " unidades en stock");
//     }
//     break;
//   } else {
//     console.log("No hay unidades suficientes en stock");
//   }
// }

// FIN PRE-ENTREGA 1

// INICIO PRE-ENTREGA 2
// Calcular a travez del metodo reduce la suma total de los productos a adquirir incluidos dentro del array misProductos

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = parseInt(precio);
  }

  toString = function () {
    return this.nombre + "( $" + this.precio + ")";
  };
}

// Supuesta cantidad de productos seleccionados: 6
let misProductos = [
  new Producto(1, "Conjunto Monocrome", 15000),
  new Producto(2, "Conjunto Military Green", 15000),
  new Producto(3, "Conjunto Green Classic", 15000),
  new Producto(4, "Conjunto White", 15000),
  new Producto(5, "Conjunto Onboard", 15000),
  new Producto(6, "Conjunto Blue", 15000),
];

let precioTotal = misProductos.reduce(
  (acumulador, unProducto) => acumulador + unProducto.precio,
  0
);

console.log(
  "--> El total por la cantidad de conjuntos seleccionados es " + precioTotal.toFixed(2)
);

// Calcular una fecha mínima de días para retirar un producto teniendo en cuenta el día que fue adquirido

let fechaActual = new Date();
const milisegundosPorDia = 24 * 60 * 60 * 1000;
let cantidadDeDias = 3
let fechaResultante = new Date(fechaActual.getTime() + milisegundosPorDia * cantidadDeDias);

console.log("Podras retirar tus productos a partir del día", fechaResultante.toLocaleDateString());


// FIN PRE-ENTREGA 2

