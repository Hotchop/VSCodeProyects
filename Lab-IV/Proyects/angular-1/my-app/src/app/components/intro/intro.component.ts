import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  title:string = "Intro Angular"; 
textoPlace: string = 'Ingrese un texto' //Cambia el texto de un atributo de clase
expresion:boolean = false;

  hacerClick() {
    alert('Hice click en el metodo..')
  }

  binding:string = ''

  lista:string[] = ['lunes','martes','miercoles','jueves','viernes']

  constructor(){}
}
