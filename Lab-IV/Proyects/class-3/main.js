class Rectaungulo{
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }
    calcularArea(){
        return this.alto*this.ancho
    }
    get altoRect(){ //Esta es la forma de mostrar atributos de la clase
        return this.alto
    }
    setAltoRect(alto){
        this.alto = alto;
    }
    mostrar = () => {
        console.log('Este es un rectangulo de ' + this.alto);
    }
}

const r = new Rectaungulo(10,10);
console.log(r.calcularArea());
console.log(r.altoRect);    //Nota, al llamar al atributo no se usan parentesis
r.mostrar()

const funcionFlecha = (estudiante = '',curso = '') => {
    return `El ${estudiante} esta aprendiendo el curso de ${curso}`;
}

console.log(funcionFlecha('Juan','JavaScript'));

