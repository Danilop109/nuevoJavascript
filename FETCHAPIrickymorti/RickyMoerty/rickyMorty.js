function buildTarjeta(personajes){
    const main= document.querySelector("main");
    
    personajes.results.forEach(p=> {
        console.log(p)
        const articulo= document.createRange(). createContextualFragment(`<article>
        <div class="imagen-container">
            <img src="${p.image}" alt="">
            <h2>${p.name}</h2>
            <span>${p.status} </span>
        </div>
    </article>`)
    main.append(articulo)
    });
    
}


function obtenerPersonajes(){
    fetch ("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(datos => {
        console.log(datos);
        buildTarjeta(datos);
    })
    .catch((err)=>{
        console.log("Error al consumir al API", err.message)
    })
    .finally(()=>{
        console.log("Se ha consumido todo el API")
    })
}

obtenerPersonajes();