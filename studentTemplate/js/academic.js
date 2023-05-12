document.addEventListener("DOMContentLoaded", ()=>{
    // 1. FETCH API para consumir un JSON con un objeto "student.json"
    // getStudent();
    //2. FETCH API para consumir un JSON con un array de objetos.
    // getStudents();
    //3. FETCH API para consumir un JSON desde un WEB API publica internet-
    getStudentPublic()
})

function getStudent(){
     fetch("./API/student.json")
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


function getStudents(){
    const url= "./API/students.json"
    fetch(url)
    .then(response=>{
        // console.log(response);
        return response.json();
    })
    .then(data =>{
        showAllStudent(data)
    })
}

function showAllStudent(students){
    const contenedor= document.querySelector("tbody");
    students.forEach(student => {
        const {id_usuario, nombre, programa, sexo, jornada}= student
        const rows =document.createElement("tr");
    rows.innerHTML= `
    <td> ${id_usuario} </td>
    <td> ${nombre} </td>
    <td> ${programa} </td>
    <td> ${sexo} </td>
    <td> ${jornada} </td>
    `
    contenedor.appendChild(rows);
    });
}


 async function getStudentPublic(){
    const url= "https://vermenmasterchief.tk/estudiantes.php"
    // fetch(url)
    // .then(response=>{
    //     // console.log(response);
    //     return response.json();
    // })
    // .then(data =>{
    //     showAllStudent(data.datos)
    // })

    try {
        const response= await fetch(url);
        const data= await response.json();
        showAllStudent(data.datos)
    } catch (error) {
        console.log()
    }
}

function showAllStudents(students){
    const contenedor= document.querySelector("tbody");
    students.forEach(student => {
        const {id_usuario, nombre, programa, sexo, jornada}= student
        const rows =document.createElement("tr");
    rows.innerHTML= `
    <td> ${id_usuario} </td>
    <td> ${nombre} </td>
    <td> ${programa} </td>
    <td> ${sexo} </td>
    <td> ${jornada} </td>
    `
    contenedor.appendChild(rows);
    });
}