class Producto{
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantBodega;
    #cantMin;
    #cantMax;
    #descuento;
    static cantidad=0
    constructor(codigo,descripcion,precioCompra,precioVenta,cantBodega,cantMin,cantMax,descuento){
        this.#codigo = codigo;
        this.#descripcion= descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta=precioVenta;
        this.#cantBodega = cantBodega;
        this.#cantMin = cantMin;
        this.#cantMax= cantMax;
        this.#descuento=descuento;
        ++Producto.cantidad
    }
    set codigo(nuevoCodigo) {
        this.#codigo = nuevoCodigo
    }
    get codigo() {
        return this.#codigo
    }
    set descripcion(nuevaDescripcion){
        this.#descripcion=nuevaDescripcion
    }
    get descripcion(){
        return this.#descripcion;
    }
    set precioCompra(nuevoPrecioCompra) {
        this.#precioCompra = nuevoPrecioCompra
    }
    get precioCompra() {
        return this.#precioCompra;
    }
    set precioVenta(nuevoPrecioVenta) {
        this.#precioVenta = nuevoPrecioVenta
    }
    get precioVenta() {
        return this.#precioVenta;
    }
    set cantBodega(nuevaCantBodega) {
        this.#cantBodega = nuevaCantBodega
    }
    get cantBodega() {
        return this.#cantBodega
    }
    set cantMin(NuevaCantMin) {
        this.#cantMin = NuevaCantMin
    }
    get cantMin() {
        return this.#cantMin
    }
    set cantMax(NuevaCantMax) {
        this.#cantMax = NuevaCantMax
    }
    get cantMax() {
        return this.#cantMax
    }
    set descuento(NuevoDescuento) {
        this.#descuento = NuevoDescuento
    }
    get descuento() {
        return this.#descuento
    }

    solicitarPedido() {
        if (this.#cantBodega <= this.#cantMin) {
            return true
        }
        else {
            return false
        }
    }
    totalPagar(){
        return this.#precioCompra*this.#cantBodega
    }
    mostrar(solicita){
        let solicita=solicita
        let div = document.createElement("div");

        if (solicita.solicitarPedido()) {
            div.classList.add("styleGris");
        }
        else {
            div.classList.add("styleBlanco");
        }

        // let titulo = document.createElement("h1");
        // titulo.textContent = "Carta del producto";
        // div.appendChild(titulo);

        // let parrafo = document.createElement("p");
        // parrafo.textContent = `El codigo del producto es: ${this.#codigo}`
        // div.appendChild(parrafo);

        // let parrafoDescripcion = document.createElement("p");
        // parrafoDescripcion.textContent = `El tipo de prenda es: ${this.#descripcion}`
        // div.appendChild(parrafoDescripcion);

        // let parrafo2 = document.createElement("p");
        // parrafo2.textContent = `El precio de la compra del producto es: ${this.#precioCompra}`
        // div.appendChild(parrafo2);

        // let parrafoVenta = document.createElement("p");
        // parrafoVenta.textContent = `El precio de la venta del producto es: ${this.#precioVenta}`
        // div.appendChild(parrafoVenta);

        // let parrafo3 = document.createElement("p");
        // parrafo3.textContent = `La cantidad en bodega es: ${this.#cantBodega}`
        // div.appendChild(parrafo3);

        // let parrafo4 = document.createElement("p");
        // parrafo4.textContent = `La cantidad minima es: ${this.#cantMin}`
        // div.appendChild(parrafo4);

        // let parrafoMax = document.createElement("p");
        // parrafoMax.textContent = `La cantidad minima es: ${this.#cantMax}`
        // div.appendChild(parrafoMax);

        // let parrafoDescuento = document.createElement("p");
        // parrafoDescuento.textContent = `La cantidad minima es: ${this.#descuento}`
        // div.appendChild(parrafoDescuento);

        document.getElementById("cards").innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Información Carta</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">El codigo del producto es: ${this.#codigo}</p>
          <p class="card-text">El tipo de prenda es: ${this.#descripcion}</p>
          <p class="card-text">El precio de la compra del producto es: ${this.#precioCompra}</p>
          <p class="card-text">El precio de la venta del producto es: ${this.#precioVenta}</p>
          <p class="card-text">La cantidad en bodega es: ${this.#cantBodega}</p>
          <p class="card-text">La cantidad minima es: ${this.#cantMin}</p>
          <p class="card-text">La cantidad minima es: ${this.#cantMax}</p>
          <p class="card-text">La cantidad minima es: ${this.#descuento}</p>

        </div>
      </div>`;
        cards.appendChild(div);   
    }
}