import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearAuto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const modelo = document.querySelector("[data-modelo]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const borrar = "./imagenes/borrar.png";

    try {
        await conectaAPI.crearAuto(nombre, modelo, precio, imagen, borrar)

        window.location.href = "./index.html"
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearAuto(evento));