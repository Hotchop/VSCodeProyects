import { usuario } from 'src/app/intefaces/interfaces';
import { Component } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent {

  arrayOne: usuario[] = [];
  arrayTwo: usuario[] = [];

  userOne: string = '';
  passOne: string = '';

  userTwo: string = '';
  passTwo: string = '';

  constructor(private userBase: UserBaseService){
    this.deconstruct();
  }

  async getArrays(){
    try {

      this.arrayOne = await this.userBase.getUsers();
      console.log(this.arrayOne);
      this.arrayTwo = [...this.arrayOne];
      console.log(this.arrayTwo);

    } catch (error) {

      alert('Error al recibir usuarios')

    }
  }

  async deconstruct(){
    try {
      await this.getArrays();
      this.userOne! = this.arrayOne[0].usuario;
      this.userTwo! = this.arrayTwo[1].usuario;
    } catch (error) {
      alert('Error de busqueda')
    }
  }

}
