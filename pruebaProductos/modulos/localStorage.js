// importar la clase producto
import Producto from './producto.js';


export function guardado(producto) {
    // obtener los valores del localStorage en objeto JS
    let productosJSON = JSON.parse(localStorage.getItem('datosAlmacenados')) || [];
    // hacer un array con productosJSON y que tenga los valores de la clase Producto por eso se coloca el or []
    productosJSON.push(producto);
    // almaceno en localStorage en objeto JSON
    localStorage.setItem('datosAlmacenados', JSON.stringify(productosJSON));
    // devuelvo el array
    return productosJSON;
}

export function recuperar() {
    // obtener los valores del localStorage en objeto JS
    let productos = JSON.parse(localStorage.getItem('datosAlmacenados')) || [];
    // mapeo los productos y los transformo a un objeto de la clase producto utilizando el contructor de la clase
    return productos.map(producto => new Producto(
      producto.codigo,
      producto.descripcion,
      producto.precioCompra,
      producto.precioVenta,
      producto.canBodega,
      producto.canMinima,
      producto.canMaxima,
      producto.descuento,
      producto.tallaPrenda,
      producto.planchar,
      producto.tallaCalzado
    ));
}
// localStorage.clear()
