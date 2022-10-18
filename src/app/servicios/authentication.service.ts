import { Injectable } from '@angular/core';
import { HomePage } from '../Pages/home/home.page';
import { BdlocalService } from './bdlocal.service';

@Injectable({
  providedIn: 'root',
  
})
export class AuthenticationService {

  constructor(public bdLocal: BdlocalService) { }


  isAuthenticated() {

    let bool
    if (this.bdLocal.obtenerSesion){
      bool=true;
    }else{
      bool=false;
    }
    console.log(bool+' bo and : '+this.bdLocal.obtenerSesion)
    return bool;

    // let bool=false;
    // let vand
    // if (this.home.validan){
    //   vand =this.home.validan
    //   console.log(vand)
    //   console.log('funciono? ...   ¡¡¡¡funciona!!!')
    //   bool= true;
    //   console.log(bool+' :esto es bool')
    // }else{
    //   console.log('funciono? ... ¡¡¡¡noooo!!!')
    //   bool= false;
    //   console.log(bool+' :esto es bool')
    // }

    // return bool
    
    
  }
  
}



