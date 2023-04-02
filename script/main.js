// Sumar totales de productos seleccionados y calcular descuento segun promocion de segunda unidad en ofertas.html

let cantidad = parseInt(prompt("Ingresa la cantidad de conjuntos que deseas adquirir:"));
let precioConjunto = 15000;
let porcentaje = 15;

if (cantidad >= 2) {
  let total = cantidad * precioConjunto;
  let descuento = total * (porcentaje/100);
  total = total - descuento;
  alert("Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de: " + total);
  console.log("Debido a la cantidad de conjuntos que deseas adquirir obtienes un 15% de descuento, el precio final es de: " + total);
} else {
  let total = cantidad * precioConjunto;
  alert("El total por la cantidad que deseas adquirir es: " + total)
  console.log("El total por la cantidad que deseas adquirir es: " + total);
}


