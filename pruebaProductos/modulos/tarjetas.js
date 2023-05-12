
export function targetaGris() {

  const card = document.createElement("div");

  card.style.marginBottom="auto"
  const cardTitle = document.createElement("h3");
  cardTitle.textContent = "productos a manejar";
  card.appendChild(cardTitle);

  const linea = document.createElement("hr")
  card.appendChild(linea)
  
  const cardText = document.createElement("p");
  cardText.textContent = `CODIGO: ${this._codigo} `;
  cardText.textContent = `DESCRIPCION: ${this._descripcion}`
  cardText.textContent = `PRECIO COMPRA: ${this._precioCompra}`
  cardText.textContent = `PRECIO VENTA: ${this._precioVenta}`
  cardText.textContent = `CANTIDAD BODEGA: ${this._canBodega}`
  cardText.textContent = `CANTIDAD MINIMA: ${this._canMinima}`
  cardText.textContent = `CANTIDAD MAXIMA: ${this._canMaxima}`
  cardText.textContent = `DESCUENTO: ${this._descuento}`
  cardText.textContent = `talla: ${this.tallaPrenda}`
  cardText.textContent = `se puede planchar: ${this.planchar}`



  cardText.style.display="flex"
  cardText.style.alignSelf="center"
  card.appendChild(cardText);

  const cardContainer = document.getElementById("cartas");
  cardContainer.appendChild(card);
}
