
// importar la clase producto
import Producto from './producto.js';
// importar localStorage.js
import * as save from './localStorage.js';
// importar la clase Calzado
import Calzado from './calzado.js';
// importar la clase Prendas
import Prendas from './prendas.js';


const selector = document.getElementById('selector');
const prenda = document.getElementById('prenda');
const calzado = document.getElementById('calzado');

selector.addEventListener('change', (event) => {
  if (event.target.value === '1') {
    prenda.style.display = 'block';
    calzado.style.display = 'none';
  } else if (event.target.value === '2') {
    prenda.style.display = 'none';
    calzado.style.display = 'block';
  } else {
    prenda.style.display = 'none';
    calzado.style.display = 'none';
  }
});

// llamar los datos del formulario


let formulario = document.getElementById("miFormulario")


formulario.addEventListener("submit",(event)=>{
  event.preventDefault()

  // Obtener valores del formulario

  const tallaCalzado = formulario.elements.tallaCalzado.value;
  const codigo = formulario.elements.codigo.value;
  const descripcion = formulario.elements.descripcion.value;
  const precioCompra = formulario.elements.precioCompra.value;
  const precioVenta = formulario.elements.precioVenta.value;
  const canBodega = formulario.elements.canBodega.value;
  const canMinima = formulario.elements.canMinima.value;
  const canMaxima = formulario.elements.canMaxima.value;
  const descuento = formulario.elements.descuento.value;

  // Crear instancia de Producto o Calzado según corresponda

  let producto;

  if (prenda.style.display === 'block') {
    const tallaPrenda = formulario.elements.tallaPrenda.value;
    const planchar = formulario.elements.planchar.value;
    producto = new Prendas(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento, tallaPrenda, planchar);
    producto.mostrar()
    

  }
   else if (calzado.style.display === 'block') {
    producto = new Calzado(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento, tallaCalzado);
    producto.mostrar()
    console.log();
  }
  else{
    console.log("seleccione alguno");
  }

  // Mostrar instancia en consola y guardar en local storage
  console.log(producto);
  save.guardado(producto);

  // Limpiar formulario

  formulario.reset();

  // Calcular necesidad de compra y margen de ganancia

  const necesitaComprar = Producto.solicitar(producto.canBodega, producto.canMinima);
  console.log("necesita comprar? "+necesitaComprar);

  const margenGanancia = Producto.calcular(Number(producto.precioCompra), Number(producto.precioVenta));
  console.log("diferencia "+margenGanancia);
})

window.addEventListener("load",()=>{
  save.recuperar()
})

export default formulario