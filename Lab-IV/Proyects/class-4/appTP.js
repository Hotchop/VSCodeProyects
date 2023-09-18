//Punto 1
const mostrarMensaje = (mensaje,callback) => {
    console.log(mensaje);
    callback('Operacion Completada');
}

mostrarMensaje('Hola Mundo',(respuesta) => {
    console.log(respuesta);
})

//Punto 2
const sumarAsync = (num1,num2,callback) => {
    (num1 !== null & num2 !== null)
        ?callback(null,num1 + num2)
        :callback('Uno a ambos numeros nulos')
}

sumarAsync(1,2,(err,suma) => {
    if(err){
        console.log("Error!");
        return console.log(err);
    }
    console.log(`Suma de numeros: ${suma}`);
})

//Punto 3
const retrasarEjecucion = (ms,callback) => {
    setTimeout(() => {
        callback(`Timer Finalizado - Duracion ${ms} ms`)
    },ms);
}

retrasarEjecucion(3000,(respuesta) => console.log(respuesta));

//Punto 4
const obtenerDatosUsuario = (id,callback) => {
    (id <= 5)
        ?callback(null,`UserID(${id}) - Nicolas Miranda DNI 39836196 Age 26`)
        :callback(`ERROR: UserID not found`);
};

obtenerDatosUsuario(3,(err,data) =>{
    if (err){
        return console.log(err);
    }
    console.log(data);
})