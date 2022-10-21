import { Injectable } from '@angular/core';
import { HomePage } from '../Pages/home/home.page';
import { BdlocalService } from './bdlocal.service';

@Injectable({
  providedIn: 'root',
  
})
export class AuthenticationService {

  constructor(public bdLocal: BdlocalService) { }


  isAuthenticated() {

    let sess = this.bdLocal.obtenerSesion()
    console.log(sess+' : esto es sess')
    if (sess){
      console.log('parece que es true')

    }else{
      console.log('sino es false')
    }
    let bool
    if (this.bdLocal.obtenerSesion){
      bool=true;
    }else{
      bool=false;
    }
    const obt = this.bdLocal.obtenerSesion
    console.log(bool+' bo and : '+ obt)
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



