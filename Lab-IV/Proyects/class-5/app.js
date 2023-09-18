//Promesas

/*const calcularDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if(descuento){
        resolve('Descuento fue realizado')
    }else{
        reject('Error: descuento no puede ser aplicado')
    }
})

//console.log(calcularDescuento);

calcularDescuento
    .then((data) => console.log(data))
    .catch((error) => console.log(error))*/

const estudiantes = [
    {id: 1, nombre: 'Nico'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Pablo'},
    {id: 4, nombre: 'Lucia'},
    {id: 5, nombre: 'Marta'}
]

const notas = [
    {id: 1, nota: 10},
    {id: 2, nota: 9},
    {id: 3, nota: 2},
    {id: 5, nota: 8}
]

const getEstudianteById = (id) => new Promise((resolve, reject) => {
    const estudiante = estudiantes.find((e) => e.id === id);

    if(estudiante){
        resolve(estudiante)
    }else{
        reject(`El estudiante con ${id} no existe`);
    }
})

const getNotateById = (id) => new Promise((resolve, reject) => {
    const nota = notas.find((n) => n.id === id);

    if(nota){
        resolve(nota)
    }else{
        reject(`La nota del estudiante con id ${id} no existe`);
    }
})

let idEstudiante = 1;

// getEstudianteById(idEstudiante)
//     .then((estudiante) => 
//         getNotateById(idEstudiante)
//         .then((nota) => console.log(`El estudiante ${estudiante.nombre} con id ${idEstudiante} tiene la nota: ${nota.nota}`))
//         )
//     .catch((err) => console.log(err))   //El catch atrapa todos los reject anidados


//async | await
async function verEstudiante(id){
    try{
        const estudiante = await getEstudianteById(id)
        const {id1,nombre} = estudiante;        ///Desestructuring: permite ver individualmente los terminos
        console.log(nombre);
        console.log(id1);                       /*Consultar fallo*/
        const nota = await getNotateById(id)
        console.log(nota.nota);
    }catch(error){
        console.log(error);
    }
}

verEstudiante(idEstudiante)

//  https://publicapi.dev