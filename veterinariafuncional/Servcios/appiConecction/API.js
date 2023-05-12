const url = "http://localhost:5000/servicios"


export const getServicios = async () =>{
    try {
        const result = await fetch(url);
        const servicio = await result.json()
        return servicio
    } catch (error) {
        console.log(error);
    }

}

export const newServicio = async servicio =>{
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(servicio),
            headers: {
                'Content-Type' : 'application/json'
                
                }


        })
        window.location.href= "/Servicios/index2.html"
    } 
    
    catch (error) {
        console.log(error);
    }
}

export const deleteServicio = async (id) =>{
    try {
        await fetch (`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }

}