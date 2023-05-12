// Producto.js



class Producto {
    // #codigo
    // #descripcion
    // #precioCompra
    // #precioVenta
    // #canBodega
    // #canMinima
    // #canMaxima
    // #descuento
    // #tallaPrenda
    // #planchar
    // #tallaCalzado
    constructor(codigo, descripcion, precioCompra, precioVenta, canBodega, canMinima, canMaxima, descuento, tallaPrenda, planchar, tallaCalzado) {
      this._codigo = codigo;
      this._descripcion = descripcion;
      this._precioCompra = precioCompra;
      this._precioVenta = precioVenta;
      this._canBodega = canBodega;
      this._canMinima = canMinima;
      this._canMaxima = canMaxima;
      this._descuento = descuento;
      // this._tallaPrenda = tallaPrenda;
      // this._planchar = planchar;
      // this._tallaCalzado = tallaCalzado;
    }

    get codigo() {
      return this._codigo;
    }
  
    set codigo(nuevoCodigo) {
      this._codigo = nuevoCodigo;
    }
  
    get descripcion() {
      return this._descripcion;
    }
  
    set descripcion(nuevoDescripcion) {
      this._descripcion = nuevoDescripcion;
    }
  
    get precioCompra() {
      return this._precioCompra;
    }
  
    set precioCompra(nuevoPrecioCompra) {
      this._precioCompra = nuevoPrecioCompra;
    }
  
    get precioVenta() {
      return this._precioVenta;
    }
  
    set precioVenta(nuevoPrecioVenta) {
      this._precioVenta = nuevoPrecioVenta;
    }
  
    get canBodega() {
      return this._canBodega;
    }
  
    set canBodega(nuevoCanBodega) {
      this._canBodega = nuevoCanBodega;
    }
  
    get canMinima() {
      return this._canMinima;
    }
  
    set canMinima(nuevoCanMinima) {
      this._canMinima = nuevoCanMinima;
    }
  
    get canMaxima() {
      return this._canMaxima;
    }
  
    set canMaxima(nuevoCanMaxima) {
      this._canMaxima = nuevoCanMaxima;
    }
  
    get descuento() {
      return this._descuento;
    }
  
    set descuento(nuevoDescuento) {
      this._descuento = nuevoDescuento;
    }
  
    // get tallaPrenda() {
    //   return this._tallaPrenda;
    // }
  
    // set tallaPrenda(nuevoTallaPrenda) {
    //   this._tallaPrenda = nuevoTallaPrenda;
    // }
  
    // get planchar() {
    //   return this._planchar;
    // }
  
    // set planchar(nuevoplanchar) {
    //   this._planchar = nuevoplanchar;
    // }
  
    // get tallaCalzado() {
    //   return this._tallaCalzado;
    // }
  
    // set tallaCalzado(nuevotallaCalzado) {
    //   this._tallaCalzado = nuevotallaCalzado;
    // }
  
    static solicitar(canBodega,canMinima) {
      if (canBodega <= canMinima) {
        console.log("bien");
        return true;
      }
      return false;
    }
    static calcular(precioCompra,precioVenta){
      if (this.solicitar() == false){
          return precioVenta - precioCompra
      }
      else{
      return console.log("estas al dia :)");
      }
    }
     mostrar(){
      
    }
}
// exportar la clase Producto
export default Producto;


  

  