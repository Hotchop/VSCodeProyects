const url = "http://localhost:4000/clientes"

export async function postCliente(cliente){
    try{

        await fetch(
            url,
            {
                method : 'POST', 
                body: JSON.stringify(cliente), 
                Headers: {'Content-type': "application/json"}
            }
        )
        window.location.href = 'index.html'
    }catch(error){
        console.log(error);
    }
}