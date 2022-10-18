import { Injectable } from '@angular/core';
import { HomePage } from '../Pages/home/home.page';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private home: HomePage) { }


  isAuthenticated() {
    if (this.home.validarUsuari){
      console.log('funciono? ... '+this.home.validarUsuari+'¡¡¡¡funciona!!!')
      return true;
    }else{
      console.log('funciono? ... '+this.home.validarUsuari+'¡¡¡¡noooo!!!')
      return false;
    }
    
  }
}



