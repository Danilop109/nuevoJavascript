// class Producto{
//     #codigo;
//     #descripcion;
//     #precioCompra;
//     #precioVenta;
//     #cantBodega;
//     #cantMin;
//     #cantMax;
//     #descuento;
//     static cantidad=0
//     constructor(codigo,descripcion,precioCompra,precioVenta,cantBodega,cantMin,cantMax,descuento){
//         this.#codigo = codigo;
//         this.#descripcion= descripcion;
//         this.#precioCompra = precioCompra;
//         this.#precioVenta=precioVenta;
//         this.#cantBodega = cantBodega;
//         this.#cantMin = cantMin;
//         this.#cantMax= cantMax;
//         this.#descuento=descuento;
//         ++Producto.cantidad
//     }
//     set codigo(nuevoCodigo) {
//         this.#codigo = nuevoCodigo
//     }
//     get codigo() {
//         return this.#codigo
//     }
//     set descripcion(nuevaDescripcion){
//         this.#descripcion=nuevaDescripcion
//     }
//     get descripcion(){
//         return this.#descripcion;
//     }
//     set precioCompra(nuevoPrecioCompra) {
//         this.#precioCompra = nuevoPrecioCompra
//     }
//     get precioCompra() {
//         return this.#precioCompra;
//     }
//     set precioVenta(nuevoPrecioVenta) {
//         this.#precioVenta = nuevoPrecioVenta
//     }
//     get precioVenta() {
//         return this.#precioVenta;
//     }
//     set cantBodega(nuevaCantBodega) {
//         this.#cantBodega = nuevaCantBodega
//     }
//     get cantBodega() {
//         return this.#cantBodega
//     }
//     set cantMin(NuevaCantMin) {
//         this.#cantMin = NuevaCantMin
//     }
//     get cantMin() {
//         return this.#cantMin
//     }
//     set cantMax(NuevaCantMax) {
//         this.#cantMax = NuevaCantMax
//     }
//     get cantMax() {
//         return this.#cantMax
//     }
//     set descuento(NuevoDescuento) {
//         this.#descuento = NuevoDescuento
//     }
//     get descuento() {
//         return this.#descuento
//     }

//     solicitarPedido() {
//         if (this.#cantBodega <= this.#cantMin) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     totalPagar(){
//         return this.#precioCompra*this.#cantBodega
//     }
//     mostrar(solicita){
//         let solicita=solicita
//         let div = document.createElement("div");

//         if (solicita.solicitarPedido()) {
//             div.classList.add("styleGris");
//         }
//         else {
//             div.classList.add("styleBlanco");
//         }

//         let titulo = document.createElement("h1");
//         titulo.textContent = "Carta del producto";
//         div.appendChild(titulo);

//         let parrafo = document.createElement("p");
//         parrafo.textContent = `El codigo del producto es: ${this.#codigo}`
//         div.appendChild(parrafo);

//         let parrafoDescripcion = document.createElement("p");
//         parrafoDescripcion.textContent = `El tipo de prenda es: ${this.#descripcion}`
//         div.appendChild(parrafoDescripcion);

//         let parrafo2 = document.createElement("p");
//         parrafo2.textContent = `El precio de la compra del producto es: ${this.#precioCompra}`
//         div.appendChild(parrafo2);

//         let parrafoVenta = document.createElement("p");
//         parrafoVenta.textContent = `El precio de la venta del producto es: ${this.#precioVenta}`
//         div.appendChild(parrafoVenta);

//         let parrafo3 = document.createElement("p");
//         parrafo3.textContent = `La cantidad en bodega es: ${this.#cantBodega}`
//         div.appendChild(parrafo3);

//         let parrafo4 = document.createElement("p");
//         parrafo4.textContent = `La cantidad minima es: ${this.#cantMin}`
//         div.appendChild(parrafo4);

//         let parrafoMax = document.createElement("p");
//         parrafoMax.textContent = `La cantidad minima es: ${this.#cantMax}`
//         div.appendChild(parrafoMax);

//         let parrafoDescuento = document.createElement("p");
//         parrafoDescuento.textContent = `La cantidad minima es: ${this.#descuento}`
//         div.appendChild(parrafoDescuento);

//         const cards = document.getElementById("cards");
//         cards.appendChild(div);   
//     }
// }



// class prendaVestir extends Producto{
//     #talla
//     #planchado
//     static cantidad=0
//     constructor(talla,planchado){
//         super(codigo,descripcion,precioCompra,precioVenta,cantBodega,cantMin,cantMax,descuento)
//         this.#talla=talla;
//         this.#planchado=planchado
//         ++prendaVestir.cantidad
//     }

//     set talla(nuevaTalla){
//         this.#talla=nuevaTalla;
//     }
//     get talla(){
//         return this.#talla
//     }

//     set planchado(NuevoPlanchado){
//         this.#planchado=NuevoPlanchado;
//     }
//     get planchado(){
//         return this.#planchado
//     }

//     mostrar(solicita){
//         let solicita=solicita
//         let div = document.createElement("div");

//         if (solicita.solicitarPedido()) {
//             div.classList.add("styleGris");
//         }
//         else {
//             div.classList.add("styleBlanco");
//         }

//         let titulo = document.createElement("h1");
//         titulo.textContent = "Carta del producto";
//         div.appendChild(titulo);

//         let parrafo = document.createElement("p");
//         parrafo.textContent = `El codigo del producto es: ${this.Producto.codigo}`
//         div.appendChild(parrafo);

//         let parrafoDescripcion = document.createElement("p");
//         parrafoDescripcion.textContent = `El tipo de prenda es: ${this.Producto.descripcion}`
//         div.appendChild(parrafoDescripcion);

//         let parrafoTalla = document.createElement("p");
//         parrafoTalla.textContent = `El tipo de prenda es: ${this.#talla}`
//         div.appendChild(parrafoTalla);

//         let parrafoPlanchado = document.createElement("p");
//         parrafoPlanchado.textContent = `El tipo de prenda es: ${this.#planchado}`
//         div.appendChild(parrafoPlanchado);

//         let parrafo2 = document.createElement("p");
//         parrafo2.textContent = `El precio de la compra del producto es: ${this.Producto.precioCompra}`
//         div.appendChild(parrafo2);

//         let parrafoVenta = document.createElement("p");
//         parrafoVenta.textContent = `El precio de la venta del producto es: ${this.Producto.precioVenta}`
//         div.appendChild(parrafoVenta);

//         let parrafo3 = document.createElement("p");
//         parrafo3.textContent = `La cantidad en bodega es: ${this.Producto.cantBodega}`
//         div.appendChild(parrafo3);

//         let parrafo4 = document.createElement("p");
//         parrafo4.textContent = `La cantidad minima es: ${this.Producto.cantMin}`
//         div.appendChild(parrafo4);

//         let parrafoMax = document.createElement("p");
//         parrafoMax.textContent = `La cantidad minima es: ${this.Producto.cantMax}`
//         div.appendChild(parrafoMax);

//         let parrafoDescuento = document.createElement("p");
//         parrafoDescuento.textContent = `La cantidad minima es: ${this.Producto.descuento}`
//         div.appendChild(parrafoDescuento);

//         const cards = document.getElementById("cards");
//         cards.appendChild(div);   
//     }
// }

// class Calzado extends Producto{
//     #tallaCalzado
//     constructor(tallaCalzado){
//         super(codigo,descripcion,precioCompra,precioVenta,cantBodega,cantMin,cantMax,descuento)
//         this.#tallaCalzado=tallaCalzado;
//     }
//     set talla(nuevaTalla){
//         this.#talla=nuevaTalla;
//     }
//     get talla(){
//         return this.#talla
//     }
//     mostrar(solicita){
//         let solicita=solicita
//         let div = document.createElement("div");

//         if (solicita.solicitarPedido()) {
//             div.classList.add("styleGris");
//         }
//         else {
//             div.classList.add("styleBlanco");
//         }

//         let titulo = document.createElement("h1");
//         titulo.textContent = "Carta del producto";
//         div.appendChild(titulo);

//         let parrafo = document.createElement("p");
//         parrafo.textContent = `El codigo del producto es: ${this.Producto.codigo}`
//         div.appendChild(parrafo);

//         let parrafoDescripcion = document.createElement("p");
//         parrafoDescripcion.textContent = `El tipo de prenda es: ${this.Producto.descripcion}`
//         div.appendChild(parrafoDescripcion);

//         let parrafoTalla = document.createElement("p");
//         parrafoTalla.textContent = `El tipo de prenda es: ${this.#tallaCalzado}`
//         div.appendChild(parrafoTalla);

//         let parrafo2 = document.createElement("p");
//         parrafo2.textContent = `El precio de la compra del producto es: ${this.Producto.precioCompra}`
//         div.appendChild(parrafo2);

//         let parrafoVenta = document.createElement("p");
//         parrafoVenta.textContent = `El precio de la venta del producto es: ${this.Producto.precioVenta}`
//         div.appendChild(parrafoVenta);

//         let parrafo3 = document.createElement("p");
//         parrafo3.textContent = `La cantidad en bodega es: ${this.Producto.cantBodega}`
//         div.appendChild(parrafo3);

//         let parrafo4 = document.createElement("p");
//         parrafo4.textContent = `La cantidad minima es: ${this.Producto.cantMin}`
//         div.appendChild(parrafo4);

//         let parrafoMax = document.createElement("p");
//         parrafoMax.textContent = `La cantidad minima es: ${this.Producto.cantMax}`
//         div.appendChild(parrafoMax);

//         let parrafoDescuento = document.createElement("p");
//         parrafoDescuento.textContent = `La cantidad minima es: ${this.Producto.descuento}`
//         div.appendChild(parrafoDescuento);

//         const cards = document.getElementById("cards");
//         cards.appendChild(div);   
//     }
// }


// let boton = document.getElementById("enviar");
//         let vectorPro = [];
//         boton.addEventListener("click", (el) => {
//             el.preventDefault()
//             let codigo = Number(document.getElementById("codigo").value);
//             let descripcion=document.getElementById("descripcion").value;
//             let precioCompra = Number(document.getElementById("precioCompra").value);
//             let precioVenta = Number(document.getElementById("precioVenta").value);
//             let cantidadBodega = Number(document.getElementById("cantidadBodega").value);
//             let cantidadMin = Number(document.getElementById("minima").value);
//             let cantidadMax = Number(document.getElementById("maxima").value);
//             let descuento= Number(document.getElementById("descuento").value);
//             let solicita = new Producto(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMin, cantidadMax, descuento)
//             vectorPro.push(solicita);
            
//             if (solicita.mostrar()) {
//                 mostrar(solicita);
//             }
//             console.log(vectorPro);

           
//             document.getElementById("codigo").value = ""
//             document.getElementById("descripcion").value = ""
//             document.getElementById("precioCompra").value =""
//             document.getElementById("precioVenta").value =""
//             document.getElementById("cantidadBodega").value=""
//             document.getElementById("minima").value =""
//             document.getElementById("maxima").value =""
//             document.getElementById("descuento").value= ""
//         })