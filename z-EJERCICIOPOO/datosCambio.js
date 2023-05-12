const selector= document.getElementById("selector");
const prendaVestir= document.getElementById("prenda");
const calzado= document.getElementById("calzado");

selector.addEventListener("change", (e)=>{
    e.preventDefault();

    if(e.target.value==="1"){
        prendaVestir.style.display= "block";
        calzado.style.display="none";
    }
    else if (e.target.value==="2"){
        calzado.style.display= "block";
        prendaVestir.style.display="none";
    }
    else {
        calzado.style.display= "none";
        prendaVestir.style.display="none";
    }
})



let boton = document.getElementById("enviar");
        let vectorPro = [];
        boton.addEventListener("click", (el) => {
            el.preventDefault()
            let codigo = Number(document.getElementById("codigo").value);
            let descripcion=document.getElementById("descripcion").value;
            let precioCompra = Number(document.getElementById("precioCompra").value);
            let precioVenta = Number(document.getElementById("precioVenta").value);
            let cantidadBodega = Number(document.getElementById("cantidadBodega").value);
            let cantidadMin = Number(document.getElementById("minima").value);
            let cantidadMax = Number(document.getElementById("maxima").value);
            let descuento= Number(document.getElementById("descuento").value);
            let solicita = new Producto(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMin, cantidadMax, descuento)
            vectorPro.push(solicita);
            
            if (solicita.mostrar()) {
                mostrar(solicita);
            }
            console.log(vectorPro);

           
            document.getElementById("codigo").value = ""
            document.getElementById("descripcion").value = ""
            document.getElementById("precioCompra").value =""
            document.getElementById("precioVenta").value =""
            document.getElementById("cantidadBodega").value=""
            document.getElementById("minima").value =""
            document.getElementById("maxima").value =""
            document.getElementById("descuento").value= ""
        })