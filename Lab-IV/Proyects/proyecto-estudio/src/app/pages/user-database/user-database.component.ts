import { Component } from '@angular/core';
import { usuario,puntaje } from 'src/app/intefaces/interfaces';
import { UserBaseService } from 'src/app/services/user-base.service';


@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css']
})
export class UserDatabaseComponent {
    list: usuario[] = [];

    constructor(private userBase: UserBaseService){
        this.mostrarUsuarios();
    }

    async mostrarUsuarios(){
      try {
        this.list = await this.userBase.getUsers();
      } catch (error) {
        alert('Error al buscar usuarios')
      }
    }
}
