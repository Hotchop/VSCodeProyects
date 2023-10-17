import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileControllerService {

  profileStatus: string;

  constructor() { this.profileStatus = ''}
    
  setStatus(change: string){
    this.profileStatus = change;
  }

  getStatus(){
    return this.profileStatus;
  }

}
