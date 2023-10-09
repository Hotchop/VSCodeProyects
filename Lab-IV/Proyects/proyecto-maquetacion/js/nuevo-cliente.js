import { postCliente } from "./api.js";
import { validar } from "./funciones.js";

(function(){
    const formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit',async (e) => {
        e.preventDefault()
        const c = crearCliente()
        if( !validar(c)){
            alert("Todos los campos son obligatorios")
            return
        }
        await postCliente(c)
    })
})();

//function crearCliente