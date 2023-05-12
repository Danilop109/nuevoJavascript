import cargarTexto from "./cargarTexto.js";


const cargarTxt= document.getElementById("cargarTxt");
const btnCargarTxt= document.getElementById("btnTexto");

btnCargarTxt.addEventListener("click", (e)=>{
    cargarTexto(cargarTxt);

    e.stopPropagation();
});

const btnCargarJSON= document.getElementById("btnjson");
const tblBody= document.getElementById("bodyData");

btnCargarJSON.addEventListener("click", (e)=>{
    cargarJson(tblBody);
    e.stopPropagation();

});

function cargarJson(elemHTML){
    fetch("_archivo.json")
    .then(response => response.json())
    .then(datos => {
        console.table(datos);
        buildTable(elemHTML, datos);

    })
}

function buildTable(elemeHTML, datos){
    let fila= "" ;
    for(let valor of datos){
        fila += `
        <tr>
        <td>${valor.NOMBRE}</td>
        <td >${valor.EQUIPO}</td>
        <td>${valor.EDAD}</td>
        <td>
        <img src= ${valor.SEXO === "M" ? "img/hombre.png" : "img/mujer.png" } alt="Camper">
        </td>
    </tr>`
    }
    elemeHTML.innerHTML= fila;
}







// function cargarTexto(elemeHTML){
//     fetch("archivo.csv")
//     .then(datos => datos.text())
//     .then(data=> {
//         console.log(data);
//         elemeHTML.innerHTML = data
//     })
// }