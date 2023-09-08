//Callbacks

const empleados = [
    {id: 1, nombre: 'Nico'},
    {id: 2, nombre: 'Ana'},
    {id: 3, nombre: 'Pablo'},
    {id: 4, nombre: 'Juan'}
]

const salarios = [
    {id: 1, salario: 2000},
    {id: 2, salario: 3000},
    {id: 3, salario: 5000},
    {id: 4, salario: 2000},
]

//Busqueda de empleado por id
const getEmpleadoById = (id, callback) => { //La funcion tiene dos atributos: id y la funcion callback
    const empleado = empleados.find((emp) => emp.id === id);
    if(empleado){
        callback(null, empleado);   //Callback envia como parametros el empleado y que no hay error
    }else{
        callback(`El empleado con ${id} no existe`); //No aclara si hay error, por lo que entra en el if 
    }

}

//Busqueda de salario por Id
const getSalarioById = (id,callback) => {
    const salario = salarios.find((sal) => sal.id === id);
    (salario)
        ? callback(null,salario)
        : callback(`El salario con ${id} no existe`);   //Otra forma de escribir if
}

//Llamada a la funcion

let id = 1;

getEmpleadoById(id, (err, empleado) => { // Inicia la funcion con id 3 y se pide al callback que devuelva un err y empleado. Luego, analiza
    if(err){
        console.log('Error!');
        return console.log(err);    //El return se usa para cortar el codigo y no continue al entrar al if
    }
    console.log(empleado);
    getSalarioById(id,(err,salario) => {
        if(err){
            console.log('Error!');
            return console.log(err);
        }
        console.log(salario);
    })
})