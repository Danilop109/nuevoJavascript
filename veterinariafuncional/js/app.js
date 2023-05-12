
import { getMascotas , deleteMascota } from "../appiConecction/API.js";

(function(){
    document.addEventListener('DOMContentLoaded', showMascotas);
    const lista = document.querySelector('.lista');


    async function showMascotas(){
        lista.addEventListener('click', confirmDelete)

        const mascotas = await getMascotas();

        const contenedor = document.querySelector('.table-group-divider')
        mascotas.forEach(mascota => {
            const {id, imagen, raza, nombre, edad, propietario, animal} = mascota;
            const rows = document.createElement('tr')
            rows.innerHTML =`
            <th scope="row">${id}</th>
            <td> <img src="${imagen}" class="cuenta"</td>
            <td>${animal}</td>
            <td>${raza}</td>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${propietario}</td>

            <td> <button type="button" class="btn btn-warning"> Details </button></td>
            <td> <button type="button" data-mascota="${id}" class="btn btn-danger delete"> Delete </button></td>
            
            `
            contenedor.appendChild(rows)
        });
    }
    
})();

function confirmDelete(e){
    if(e.target.classList.contains('delete')){

        const mascotaId = e.target.dataset.mascota
        const confirmar = confirm('¿Deseas eliminar la mascota?')

        if(confirmar){
            deleteMascota(mascotaId)
        }
    }
}

