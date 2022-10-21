import { Component, OnInit, ViewChild, ElementRef, Provider } from '@angular/core';
import { Router, NavigationExtras, RouterStateSnapshot } from '@angular/router';
import { AnimationController, LoadingController, ToastController } from '@ionic/angular';
import { Ialumnos } from 'src/app/interfaces/iusuarios';
import { ApiuserService } from 'src/app/servicios/apiuser.service';
import { BdlocalService } from 'src/app/servicios/bdlocal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user = {
    usuario: "",
    password: ""
  }

  @ViewChild('square', { read: ElementRef, static: true }) square: ElementRef;
  field: String = "";

  valida:string = 'false';
  alumnos:Ialumnos[]=[];
  constructor(private animationCtrl: AnimationController,
    private loadingCtrl: LoadingController, 
    private router: Router, 
    public toastController: ToastController, 
    private apiUserService:ApiuserService,
    public bdLocal: BdlocalService) {}

  ngOnInit() {
    
    //invocando get api en coleccion
    this.apiUserService.getUsers().subscribe(resp=>
      {
        this.alumnos.push(...resp.alumnos);
        console.log('user: ',resp.alumnos);
      });
      
  }
  selector() {
    //verifico campos vacíos
    if (this.validateModel(this.user)) {
      console.log('campo validado');
      //verifico el usuario antes de seguir( por corregir)
      if (this.validarUsuari()) {

        console.log('usuario validado');
        
        this.valida='true'
        console.log(this.valida+' :este es valida positivo')
        //console.log(this.validarUsuario)

        this.bdLocal.guardarLogin(this.valida, this.user.usuario, this.user.password)


        this.presentToast("Bienvenido " + this.user.usuario);
        let navigationExtras: NavigationExtras = {
        state: {
          user: this.user
          }
        };
        this.showLoading();
        this.router.navigate(['/principal/uno'], navigationExtras);
        console.log('yep')
      }else{
        this.presentToast("Usuario no encontrado");
      }
      
    }else{
      this.presentToast("Falta ingresar: "+this.field, 4500);
    }

  }



  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  //crear

  validarUsuari(){
    for (let elemento of this.alumnos){
      if (this.user.usuario == elemento.username && this.user.password == elemento.password ){
        return true;
      }else{
        var encontrado = false
      }
    };
    if (!encontrado){
      return false;
    };
  }


  notfound(){
    this.router.navigate(['/notfound']);
  }
  


  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }
  recuperar() {
      this.router.navigate(['/recuperar'],);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
  async showLoadingi() {
    const square = await this.animationCtrl.create()
    .addElement(this.square.nativeElement)
    .duration(2000)
    .beforeStyles({
      opacity: 0.2
    })
    .afterStyles({
      background: 'rgba(0, 255, 0, 0.5)'
    })
    .afterClearStyles(['opacity'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' }
    ])
  }
  

}
