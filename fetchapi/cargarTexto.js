export default function cargarTexto(elemeHTML){
    fetch("archivo.csv")
    .then(datos => datos.text())
    .then(data=> {
        console.log(data);
        elemeHTML.innerHTML = data
    })
}