import { Injectable } from '@angular/core';
import { HomePage } from '../Pages/home/home.page';
import { BdlocalService } from './bdlocal.service';

@Injectable({
  providedIn: 'root',
  
})
export class AuthenticationService {


  constructor(public bdLocal: BdlocalService) { }


  //
  
  // insession(){}

  //
  isAuthenticated() {
    if (localStorage.getItem('session') == 'true'){
      return true
    }else{
      return false
    }
  }
  
}



