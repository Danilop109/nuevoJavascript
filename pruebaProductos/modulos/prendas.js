// prendas.js

// importamos la clase Producto (clase padre)
import Producto from './producto.js';

export default class Prendas extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento, tallaPrenda, Planchar) {
        super(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento);

        this._tallaPrenda = tallaPrenda;
        this._planchar = Planchar;
    }
    get tallaPrenda() {
        return this._tallaPrenda;
    }
    get planchar() {
        return this._Planchar;
    }
    set tallaPrenda(nuevoTallaPrenda) {
        this._tallaPrenda = nuevoTallaPrenda;
    }
    set planchar(nuevoPlanchar) {
        this._Planchar = nuevoPlanchar;
    }

    mostrar() {
        /* super.mostrar(); */
        console.log(`Talla prenda: ${this.tallaPrenda}`);
        console.log(`Planchar: ${this._planchar}`);
        if (Producto.solicitar(this.canBodega,this.canMinima)=== true) {
            console.log("gris");
           
                const card = document.createElement("div");
              
                card.style.marginBottom="auto"
                card.style.backgroundColor="gray"
                card.style.color="white"
                card.style.padding="20px"
                card.style.borderRadius="10px"
                card.style.width="300px"
                const cardTitle = document.createElement("h2");
                cardTitle.textContent = "PRODUCTO A MANEJAR PRENDA";
                card.appendChild(cardTitle);
              
                const linea = document.createElement("hr")
                card.appendChild(linea)
                
                const cardText = document.createElement("div");
                cardText.innerHTML += `<span>CODIGO: ${this.codigo}</span><br>`;
                cardText.innerHTML += `<span>DESCRIPCION: ${this.descripcion}</span><br>`;
                cardText.innerHTML += `<span>PRECIO COMPRA: ${this.precioCompra}</span><br>`;
                cardText.innerHTML += `<span>PRECIO VENTA: ${this.precioVenta}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD BODEGA: ${this.canBodega}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD MINIMA: ${this.canMinima}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD MAXIMA: ${this.canMaxima}</span><br>`;
                cardText.innerHTML += `<span>DESCUENTO: ${this.descuento}</span><br>`;
                cardText.innerHTML += `<span>TALLA: ${this._tallaPrenda}</span><br>`;
                cardText.innerHTML += `<span>SE PUEDE PLANCHAR: ${this._planchar}</span><br>`;

                cardText.style.flexDirection="column";
                cardText.style.fontSize= "17px";
                cardText.style.fontFamily="monospace";
                cardText.style.marginTop= "14px";
                cardText.style.display="flex"
                cardText.style.alignSelf="center"
                card.appendChild(cardText);
              
                const cardContainer = document.getElementById("cartas");
                cardContainer.appendChild(card);
              
        }
        else {
            console.log("rojo");

            const card = document.createElement("div");
              
                card.style.marginBottom="auto"
                card.style.backgroundColor="#ebd5d5"
                card.style.color="black"
                card.style.padding="20px"
                card.style.borderRadius="10px"
                card.style.borderColor="black"
                card.style.borderStyle="lightgray"
                card.style.borderWidth="2px"
                card.style.width="300px"
                const cardTitle = document.createElement("h2");
                cardTitle.textContent = "PRODUCTO A MANEJAR PRENDA";
                card.appendChild(cardTitle);
              
                const linea = document.createElement("hr")
                card.appendChild(linea)
                
                const cardText = document.createElement("div");
                cardText.innerHTML += `<span>CODIGO: ${this.codigo}</span><br>`;
                cardText.innerHTML += `<span>DESCRIPCION: ${this.descripcion}</span><br>`;
                cardText.innerHTML += `<span>PRECIO COMPRA: ${this.precioCompra}</span><br>`;
                cardText.innerHTML += `<span>PRECIO VENTA: ${this.precioVenta}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD BODEGA: ${this.canBodega}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD MINIMA: ${this.canMinima}</span><br>`;
                cardText.innerHTML += `<span>CANTIDAD MAXIMA: ${this.canMaxima}</span><br>`;
                cardText.innerHTML += `<span>DESCUENTO: ${this.descuento}</span><br>`;
                cardText.innerHTML += `<span>TALLA: ${this._tallaPrenda}</span><br>`;
                cardText.innerHTML += `<span>SE PUEDE PLANCHAR: ${this._planchar}</span><br>`;

                cardText.style.flexDirection="column";
                cardText.style.fontSize= "17px";
                cardText.style.fontFamily="monospace";
                cardText.style.marginTop= "14px";
                cardText.style.display="flex"
                cardText.style.alignSelf="center"
                card.appendChild(cardText);
              
                const cardContainer = document.getElementById("cartas");
                cardContainer.appendChild(card);
        }
    }

}

