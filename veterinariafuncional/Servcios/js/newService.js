import { newServicio } from "../appiConecction/APIServicios.js";


const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validateServicios);

function validateServicios(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const animal = document.querySelector('#animal').value;
    const raza = document.querySelector('#raza').value;
    const edad = document.querySelector('#edad').value;
    const propietario = document.querySelector('#propietario').value;
    const imagen = document.querySelector('#imagen').value;

    const servicio ={
        imagen,
        nombre,
        animal,
        raza,
        edad,
        propietario
    }

    if(validate(servicio)){
        alert('Todos los campos son obligatorios')
        return
    }
    alert('Su Servicio ha sido registrada')

    newServicio(servicio)

}

function validate(obj){
    return !Object.values(obj).every(element => element !== '')
}

