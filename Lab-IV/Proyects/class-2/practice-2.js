//Punto 1
const array = [1,2,3,4,5];

let suma = 0;

array.forEach(num => (suma += num));

console.log('Suma de array:',suma);

//Punto 2
let promedio = suma / array.length

console.log('Promedio:',promedio);

//Punto 3
let max = -1
let min = 9999

array.forEach(num => {
    if (max < num) max = num
})

array.forEach(num => {
    if (min > num) min = num
})

console.log("Maximo y Minimo:",max,'&',min)

//Punto 4
function buscaValor(num){
    return array.includes(num)
}
const dato = 7
console.log(dato,"esta en el array?: ",buscaValor(dato))

//Punto 5
const arrayPar = array.filter(num => num % 2 === 0)
const arrayImpar = array.filter(num => num & 2 !== 0)

console.log('Pares:',arrayPar);
console.log('Impares:',arrayImpar);

//Punto 6
const arrayDup = [1,2,3,2,4,3,4,1]
const arrayNoDup = [...new Set(arrayDup)]

console.log('Arrays con duplicados:',arrayDup);
console.log('Arrays sin duplicados:',arrayNoDup);

//Punto 7
const desordenado = [2,6,3,1,5,4]
const ordenado = [...desordenado].sort();
console.log('Array desordenado',desordenado);
console.log('Array ordenado:',ordenado);

//Punto 8
const ocurrencias = [1,2,3,4,2,5]
const ocurrenciasSin2 = array.filter(num => num !== 2)
console.log('Array con 2:',ocurrencias);
console.log('Array sin 2:',ocurrenciasSin2);

//Punto 9
const array1 = [1,2,5,3,2,7]
const array2 = [3,2,4,6,2,8]

const array3 = [...new Set(array1.concat(array2))]
console.log("Array concatenado:",array3);

//Punto 10
function creaProducto(nombre,cantidad){
    this.nombre = nombre
    this.cantidad = cantidad
}

var producto1 = creaProducto("Azucar",10)
var producto2 = creaProducto("Flores",20)
var producto3 = creaProducto("Colores",100)

var listaCompras = [producto1,producto2,producto3]