import { conectaAPI } from "./conectaAPI.js";

// Asegúrate de que este código se ejecuta después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const botonesEliminar = document.querySelectorAll(".delete");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", async (evento) => {
            evento.preventDefault();
            const autoElement = boton.closest("li");
            const id = autoElement.dataset.id;

            try {
                await conectaAPI.eliminarAuto(id);
                autoElement.remove();
            } catch (e) {
                alert(e);
            }
        });
    });
});
