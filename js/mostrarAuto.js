import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(id, nombre, modelo, precio, imagen, borrar) {
    const auto = document.createElement("li");
    auto.className = "autoitem";
    auto.dataset.id = id;  // Guarda el ID en el dataset del elemento

    auto.innerHTML = `
        <img class="imgauto" src="${imagen}" alt="imagen auto">
        <h2 class="textoDesc1">${nombre}</h2>
        <h2 class="textoDesc2">${modelo}</h2>
        <div class="cardbottom">
            <h2 class="textoDesc2">${precio}</h2>
            <button class="delete"><img class="borrar" src="${borrar}" alt="borrar"></button>
        </div>
    `;

    const btnBorrar = auto.querySelector(".delete");
    btnBorrar.addEventListener("click", async () => {
        try {
            await conectaAPI.eliminarAuto(id);  // Pasa el ID al eliminar
            auto.remove();
        } catch (e) {
            alert(e);
        }
    });
    return auto;
}

async function listaAutos() {
    try {
        const listaAPI = await conectaAPI.listaAutos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.id, element.nombre, element.modelo, element.precio, element.imagen, element.borrar)));
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de Automóviles</h2>`;
    }
}

listaAutos();
