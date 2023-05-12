document.addEventListener("DOMContentLoaded", ()=>{
    getStudent();
})

function getStudent(){
     fetch("../API/student.json")
     .then(response =>{
         return response.json();
         // console.log(response)
     })
     .then (data =>{
        showOneStudent(data)
     })

}

function showOneStudent({idususario, name, carrera, sexo, jornada}){
    const cuerpo= document.querySelector("tbody");
    const row =document.createElement("tr");
    row.innerHTML= `
    <td> ${idususario} </td>
    <td> ${name} </td>
    <td> ${carrera} </td>
    <td> ${sexo} </td>
    <td> ${jornada} </td>
    `
    cuerpo.appendChild(row);
}