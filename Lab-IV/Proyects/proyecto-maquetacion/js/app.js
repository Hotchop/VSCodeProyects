import {getClientes} from "./api.js"

(function(){

const clienteFilas = document.querySelector('#clientes')

document.addEventListener('DOMContentLoaded', mostrarClientes) //Carga la pagina antes que los datos del doc

async function mostrarClientes(){
    const clientes = await getClientes()

    clientes.forEach(cliente => {
        const {apellido,nombre,dni,fechaInicip,id} = cliente; //Desestructuro cliente
        
        const tr = document.createElement('tr');
        const tdApe = document.createElement('td');
        tdApe.textContent = apellido;

        const tdEditar= document.createElement('td')
        tdEditar.innerHTML = `<a href="./editar-cliente.html?id=${id}">Modificar</a>`
    
        tr.appendChild(tdApe);
        tr.appendChild(tdEditar)

        clienteFilas.appendChild(tr);
    })
}

})(); //Espacio privado