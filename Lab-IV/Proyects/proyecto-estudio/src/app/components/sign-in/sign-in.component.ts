import { usuario } from 'src/app/intefaces/interfaces';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  register: FormGroup = this.formBuilder.group({
    usuario:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })


  constructor(private formBuilder: FormBuilder, private userBase: UserBaseService){
      
  }

 crearUsuario(){
  if(this.register.invalid) return;
      const user = {
         usuario: this.register.controls['usuario'].value,
         password: this.register.controls['password'].value,
         puntajes: []
       }
       this.userBase.postUser(user);
  }
}
