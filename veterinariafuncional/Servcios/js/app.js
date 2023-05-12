
import { getServicios , deleteServicio } from "../appiConecction/API.js";

(function(){
    document.addEventListener('DOMContentLoaded', showServicios);
    const lista = document.querySelector('.lista');


    async function showServicios(){
        lista.addEventListener('click', confirmDelete)

        const servicios = await getServicios();

        const contenedor = document.querySelector('.table-group-divider')
        servicios.forEach(servicio => {
            const {id, imagen, raza, nombre, edad, propietario, animal} = servicio;
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
            <td> <button type="button" data-servicio="${id}" class="btn btn-danger delete"> Delete </button></td>
            
            `
            contenedor.appendChild(rows)
        });
    }
    
})();

function confirmDelete(e){
    if(e.target.classList.contains('delete')){

        const servicioId = e.target.dataset.servcio
        const confirmar = confirm('¿Deseas eliminar la mascota?')

        if(confirmar){
            deleteServicio(servicioId)
        }
    }
}

