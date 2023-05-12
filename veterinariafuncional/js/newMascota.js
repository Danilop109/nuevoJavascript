import { newMascota } from "../appiConecction/API.js";


const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validateMascotas);

function validateMascotas(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const animal = document.querySelector('#animal').value;
    const raza = document.querySelector('#raza').value;
    const edad = document.querySelector('#edad').value;
    const propietario = document.querySelector('#propietario').value;
    const imagen = document.querySelector('#imagen').value;

    const mascota ={
        imagen,
        nombre,
        animal,
        raza,
        edad,
        propietario
    }

    if(validate(mascota)){
        alert('Todos los campos son obligatorios')
        return
    }
    alert('Su mascota ha sido registrada')

    newMascota(mascota)

}

function validate(obj){
    return !Object.values(obj).every(element => element !== '')
}

