import { usuario } from './../intefaces/interfaces';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserBaseService {

  url = 'http://localhost:4000/usuarios'

  constructor(private router: Router) { }

  /* async getUserByName(username: string){
    try {
      const resultado = await fetch(`${this.url}?username_like=${username}`);
      const perfil = resultado.json();
      return perfil;
      
    } catch (error) {
      alert("Error loggin user");
    }
  } */
  

  async getUserProfile(id: number){
    try {
      const resultado = await fetch(`${this.url}/${id}`);
      const perfilUsuario = resultado.json();
      return perfilUsuario;

    } catch (error) {
      alert('No se pueden conseguir los usuarios')
    }
  }


  async getUsers(){
    try {
      const resultado = await fetch(this.url);
      const listaUsuarios = resultado.json();
      return listaUsuarios;

    } catch (error) {
      alert('No se pueden conseguir los usuarios')
    }
  }


  async postUser(user: usuario){
    try {
      await fetch(this.url,
        {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {'Content-type': 'application/json'}
        })
        this.router.navigate(['profile']) //Cuando se crea el usuario correctamente routea a el login
    } catch (error) {
      alert('No se pudo crear usuario')
    }
  }


  async deleteUser(id: string){
    try {
      await fetch(`${this.url}/${id}`,{method: 'DELETE'});
      this.router.navigate(['home']);
    } catch (error) {
      alert('Error al borrar usuario')
    }
  }


  async modifyUser(user: usuario){
    try {
      await fetch(`${this.url}/${user.id}`,{
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'Content-type': 'application/json'}
      });
      this.router.navigate(['home']);
    } catch (error) {
      alert('Error al borrar usuario')
    }
  }
}
