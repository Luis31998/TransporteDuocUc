import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Ilogin } from '../interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  
  login: Ilogin[] = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage, public toastController:ToastController) {
    this.init();
    this.cargarLogin();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
  async cargarLogin() {
    const milogin = await this.storage.get('login');
    if (milogin) {
      this.login = milogin;
    }
    console.log('local storage construido')
    console.log(this.login)
  }
  guardarLogin(log:string, usuario:string,contrasenna:string, rolusu:string){
    //voy a restringir que no se guarden número telefónicos repetidos
    //creo un consulta LAMBDA para saber si existe el numero o no
    console.log(log+' | '+usuario+' | '+contrasenna)
    const existe=this.login.find(c=>c.username==usuario);
    if(!existe){
      this.login.unshift({logeado:log, username:usuario, password:contrasenna, rol:rolusu});
      console.log(this._storage+'1')
      this._storage?.set('login',this.login);
      console.log(this._storage+'2')
      this.presentToast("sesion iniciada .")
      // this._storage.get.it aparece metodo tostring() ¿sera la respuesta?
    }else{
      this.presentToast("ya estaba")
    }
  }
  
  async obtenerSesion(bool){
    //usar una busqueda del ultimo [0] item
    const existe=this.login.find(c=>c.logeado=='true');
    // let ob
    if(!existe){
      bool = false
      console.log('no lo encontro')
      return bool
      
    }else{
      bool = 'true'
      console.log(existe.logeado+' ..si lo encontro')
      return bool
      
    }
    // return ob;
  }
  
  async obtenerUsuario(){
    const thislogin = await this.storage.get('login');
    console.log(thislogin.username+'esto es thislogin username en obtener usuario')
    console.log(thislogin.password+'esto es thislogin password en obtener usuario')
    console.log(thislogin.logeado+'esto es thislogin logeado en obtener usuario')
    console.log(thislogin.rol+'esto es thislogin rol de usuario en obtener usuario')
    return thislogin.username;
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
}


