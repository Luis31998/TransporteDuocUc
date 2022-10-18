import { Injectable } from '@angular/core';
import { HomePage } from '../Pages/home/home.page';

@Injectable({
  providedIn: 'root',
  
})
export class AuthenticationService {

  constructor(private home:HomePage) { }


  isAuthenticated() {
    // var vad:boolean=false
    // if (this.home.valida){
    //   console.log('funciono? ... '+this.home.valida+'¡¡¡¡funciona!!!')
    //   vad= this.home.valida
    //   console.log(vad+'esto es vad')
    //   return true;
    // }else{
    //   console.log('funciono? ... '+this.home.valida+'¡¡¡¡noooo!!!')
    //   console.log(vad+'esto es vad vad')
    //   return false;
    // }
    return true
    
    
  }
  
}



