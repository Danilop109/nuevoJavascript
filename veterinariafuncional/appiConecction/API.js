const url = "http://localhost:5020/mascotas"


export const getMascotas = async () =>{
    try {
        const result = await fetch(url);
        const mascota = await result.json()
        return mascota
    } catch (error) {
        console.log(error);
    }

}
export const newMascota = async mascota => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(mascota),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "Index.html";
    } catch (error) {
        console.log(error);
    }
}

export const deleteMascota = async (id) =>{
    try {
        await fetch (`${url}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }

}


