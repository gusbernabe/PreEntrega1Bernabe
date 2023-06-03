// Variables, clases y array de productos a exportar para ser utilizados por los carritos de compra
export let unidades = 0;
export let porcentaje = 15;
export let descuento = 0;
export let total = 0;

export class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = parseInt(precio);
    this.cantidad = parseInt(cantidad);
  }

  toString() {
    return this.nombre + "( $" + this.precio + ")";
  }
}

export let misProductos = [
  new Producto(1, "Conjunto Monocrome", 15000, 1),
  new Producto(2, "Conjunto Military Green", 15000, 1),
  new Producto(3, "Conjunto Green Classic", 15000, 1),
  new Producto(4, "Conjunto White", 15000, 1),
  new Producto(5, "Conjunto Onboard", 15000, 1),
  new Producto(6, "Conjunto Blue", 15000, 1),
];









