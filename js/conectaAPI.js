async function listaAutos() {
    const conexion = await fetch("http://localhost:3001/carros", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function crearAuto(nombre, modelo, precio, imagen, borrar) {
    const conexion = await fetch("http://localhost:3001/carros", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            modelo: modelo,
            precio: precio,
            imagen: imagen,
            borrar: borrar
        })
    })
    if (!conexion.ok) {
        throw new Error("No fue posible enviar el Autmóvil");
    }
    const conexionConvertida = await conexion.json();


    return conexionConvertida;
}

async function eliminarAuto(id) {
    const conexion = await fetch(`http://localhost:3001/carros/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
        
        
    });
    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el Automóvil");
    }
}

export const conectaAPI = {
    listaAutos, crearAuto, eliminarAuto
}