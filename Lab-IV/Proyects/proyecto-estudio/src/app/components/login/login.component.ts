import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuario } from 'src/app/intefaces/interfaces';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: FormGroup = this.formBuilder.group({
    usuario:[''],
    password:['']
  })

  lista: usuario[] = [];

  userId  = '';

  constructor(private formBuilder: FormBuilder, private userBase: UserBaseService){

  }

  async logUser(){
    try {
      const user = {
        usuario: this.login.controls['usuario'].value,  //Guarda datos del form en un objeto
        password: this.login.controls['password'].value,
      }

      this.lista = await this.userBase.getUsers(); //Recibe usuarios de json server y lo guarda en lista ususarios


      const foundUser = this.lista.find(i => i.usuario === user.usuario);
      if(foundUser === undefined){
        alert('Usuario no encontrado')
        return
      }else{
        if(foundUser.password !== user.password){
          alert('Contrasenia Incorrecta. Intente de nuevo');  //Verifica que la contrasenia del from sea igual que la del usuario del servidor
          return
        }
      }

      if(user.password !== this.lista[0].password){
        alert('Contrasenia Incorrecta. Intente de nuevo');  //Verifica que la contrasenia del from sea igual que la del usuario del servidor
        return
      }
      else{
        console.log(foundUser.usuario + ' - ' + foundUser.id);
      }
    
  } catch (error) {
    alert('Error al loggear')
  }
  
  }
}


/* const respuesta = this.userBase.getUserByName(user.usuario);

    const respuestaString = JSON.stringify(respuesta);

    const userStored = JSON.parse(respuestaString);

    const {usuario: usuario,password: password,puntajes: puntajes,id: id} = userStored; */