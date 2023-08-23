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