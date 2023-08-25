//Punto 1
var nombre = "Nicolas";
console.log("Nombre: ",nombre);

//Punto 2
var num1 = 10;
var num2 = 16;
console.log("Edad: ",num1+num2);

//Punto 3
const PI = 3.14159;
console.log("Pi = ",PI);

//Punto 4
function saludar(nombre){
    let saludo = "Hola";
    console.log(saludo.concat(', ',nombre));
}
saludar(nombre);

//Punto 5
function esPar(numero){
    if (numero%2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esPar(10));
console.log(esPar(5));

//Punto 6
const array = [1,2,3,4,5]

function suma (array){
    let total = 0;
    array.forEach(element => {
        total += element
    });
    return total
}

console.log(suma(array));

//Punto 7
function Persona(nombre,edad,profesion){
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
}

var persona1 = new Persona("Nico","26","Programador")
console.log(persona1);

//Punto 8
function Producto(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

var prodcuto1 = new Producto("D20",300,200)
console.log(prodcuto1)

//Punto 9
function Pelicula(titulo,director,anio){
    this.titulo = titulo
    this.director = director
    this.anio = anio
}

var pelicula1 = new Pelicula("Tron","Jonh","2008")
console.log(pelicula1);

//Punto 10
const frutas = ['manzana','banana','tomate','pera']
console.log(frutas[2]);

//Punto 11
const frutas2 = [...frutas,'mandarina']
console.log(frutas2);

//Punto 12
const numeros = [1,2,3,4,5,6,7,8]
const pares = numeros.filter(num => num%2 === 0)

console.log(pares);

//Punto 13
function creaPersona(nombre,edad){
    let persona = new Persona(nombre,edad)
    return persona
}

var nuevaPersona = creaPersona('Klee','10')
console.log(nuevaPersona);