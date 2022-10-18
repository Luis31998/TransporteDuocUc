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
  }
  guardarLogin(log:boolean){
    //voy a restringir que no se guarden número telefónicos repetidos
    //creo un consulta LAMBDA para saber si existe el numero o no
    const existe=this.login.find(c=>c.logeado==log);
    if(!existe){
      this.login.unshift({logeado:log});
      this._storage.set('agenda',this.login);
      this.presentToast("sesion iniciada .")
    }else{
      this.presentToast("")
    }
  }
  async obtenerSesion(){
    const thislogin = await this.storage.get('login');
    console.log(thislogin+'esto es thislogin')
    return thislogin;
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


