class prendaVestir extends Producto{
    #talla
    #planchado
    static cantidad=0
    constructor(talla,planchado){
        super(codigo,descripcion,precioCompra,precioVenta,cantBodega,cantMin,cantMax,descuento)
        this.#talla=talla;
        this.#planchado=planchado
        ++prendaVestir.cantidad
    }

    set talla(nuevaTalla){
        this.#talla=nuevaTalla;
    }
    get talla(){
        return this.#talla
    }

    set planchado(NuevoPlanchado){
        this.#planchado=NuevoPlanchado;
    }
    get planchado(){
        return this.#planchado
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

        let titulo = document.createElement("h1");
        titulo.textContent = "Carta del producto";
        div.appendChild(titulo);

        let parrafo = document.createElement("p");
        parrafo.textContent = `El codigo del producto es: ${this.Producto.codigo}`
        div.appendChild(parrafo);

        let parrafoDescripcion = document.createElement("p");
        parrafoDescripcion.textContent = `El tipo de prenda es: ${this.Producto.descripcion}`
        div.appendChild(parrafoDescripcion);

        let parrafoTalla = document.createElement("p");
        parrafoTalla.textContent = `El tipo de prenda es: ${this.#talla}`
        div.appendChild(parrafoTalla);

        let parrafoPlanchado = document.createElement("p");
        parrafoPlanchado.textContent = `El tipo de prenda es: ${this.#planchado}`
        div.appendChild(parrafoPlanchado);

        let parrafo2 = document.createElement("p");
        parrafo2.textContent = `El precio de la compra del producto es: ${this.Producto.precioCompra}`
        div.appendChild(parrafo2);

        let parrafoVenta = document.createElement("p");
        parrafoVenta.textContent = `El precio de la venta del producto es: ${this.Producto.precioVenta}`
        div.appendChild(parrafoVenta);

        let parrafo3 = document.createElement("p");
        parrafo3.textContent = `La cantidad en bodega es: ${this.Producto.cantBodega}`
        div.appendChild(parrafo3);

        let parrafo4 = document.createElement("p");
        parrafo4.textContent = `La cantidad minima es: ${this.Producto.cantMin}`
        div.appendChild(parrafo4);

        let parrafoMax = document.createElement("p");
        parrafoMax.textContent = `La cantidad minima es: ${this.Producto.cantMax}`
        div.appendChild(parrafoMax);

        let parrafoDescuento = document.createElement("p");
        parrafoDescuento.textContent = `La cantidad minima es: ${this.Producto.descuento}`
        div.appendChild(parrafoDescuento);

        const cards = document.getElementById("cards");
        cards.appendChild(div);   
    }
}
