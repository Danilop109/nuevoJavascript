// Calzado.js

// importamos la clase Producto (clase padre)
import Producto from './producto.js';

//exportamos la clase Calzado
export default class Calzado extends Producto {
constructor(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento, tallaCalzado) {
super(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento);
//agregamos el nuevo parametro de la clase y lo inicializamos  despues definimos el set y get
this._tallaCalzado = tallaCalzado;
}

get tallaCalzado() {
return this._tallaCalzado;
}

set tallaCalzado(nuevaTallaCalzado) {
this._tallaCalzado = nuevaTallaCalzado;
}

// creamos la instancia a sobreescribir sobre la clase producto
mostrar() {
  // usamos this para referirnos de la clase calzado y acceder a las propiedades especificas de
  console.log(`Código: ${this.codigo}`);
  console.log(`Descripción: ${this.descripcion}`);
  console.log(`Precio de compra: ${this.precioCompra}`);
  console.log(`Precio de venta: ${this.precioVenta}`);
  console.log(`Cantidad en bodega: ${this.canBodega}`);
  console.log(`Cantidad mínima: ${this.canMinima}`);
  console.log(`Cantidad máxima: ${this.canMaxima}`);
  console.log(`Descuento: ${this.descuento}`);
  console.log(`Talla de calzado: ${this.tallaCalzado}`);
  console.log("gris");
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
        cardTitle.textContent = "PRODUCTO A MANEJAR CALZADO";
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
        cardText.innerHTML += `<span>TALLA: ${this.tallaCalzado}</span><br>`;

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
        cardTitle.textContent = "PRODUCTO A MANEJAR CALZADO";
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
        cardText.innerHTML += `<span>TALLA: ${this._tallaCalzado}</span><br>`;

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

