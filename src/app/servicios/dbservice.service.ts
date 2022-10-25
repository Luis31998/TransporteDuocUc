import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Viajes } from '../Clases/viajes';
import { Sesion } from '../Clases/sesion';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database: SQLiteObject;
  tblViajes:string = "CREATE TABLE IF NOT EXISTS viajes(id INTEGER PRIMARY KEY autoincrement, conductor VARCHAR(50) NOT NULL, capacidad numeric(2) NOT NULL, color_vehiculo VARCHAR(50) NOT NULL, matricula VARCHAR(50) NOT NULL, hora_salida Time NOT NULL, costo_persona numeric(5) NOT NULL);";
  
  listaViajes = new BehaviorSubject([]);
  private isDbReady:
    BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, 
    private platform:Platform, 
    public toastController: ToastController) { 
      this.crearBD();
    }
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'viajes.db',
        location: 'default'
      })//.catch(e => this.presentToast(e));
        // .then((db: SQLiteObject) => {
        //   this.database = db;
        //   this.presentToast("BD creada");
        //   //llamo a crear la(s) tabla(s)
        //   this.crearTablas();
        //   }).catch(e => this.presentToast(e));
    })
  }

  // crearB(){
  //   this.platform.ready().then(() => {
  //     this.sqlite.create({
  //       name: 'viajes.db',
  //       location: 'default'
  //     })
  //       .then((db: SQLiteObject) => {
  //         this.database = db;
  //         this.presentToast("BD creada");
  //         //llamo a crear la(s) tabla(s)
  //         this.crearTablas();
      
      
  //       })
  //       .catch(e => this.presentToast(e));
  //   })
  // }


  async crearTablas() {
    try {
      await this.database.executeSql(this.tblViajes,[]);
      //await this.database.executeSql(this.registro,[]);
      this.presentToast("Tabla creada");
      this.cargarViajes();
      this.isDbReady.next(true); 
    } catch (error) {
      this.presentToast("Error en Crear Tabla: "+error);
    }
  }
  cargarViajes() {
    return this.database.executeSql('SELECT * FROM viajes',[])
    .then(res=>{
      let items:Viajes[]=[];
      if(res.rows.length>0){
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id:res.rows.item(i).id,
            conductor:res.rows.item(i).conductor,
            capacidad:res.rows.item(i).capacidad,
            color_vehiculo:res.rows.item(i).color_vehiculo,
            matricula:res.rows.item(i).matricula,
            hora_salida:res.rows.item(i).hora_salida,
            costo_persona:res.rows.item(i).costo_persona,
          });          
        }
      }
      this.listaViajes.next(items);
    });
  }
  addViaje(conductor,capacidad,color_vehiculo,matricula,hora_salida,costo_persona){
    let data=[conductor,capacidad,color_vehiculo,matricula,hora_salida,costo_persona];
    return this.database.executeSql('INSERT INTO viajes(conductor,capacidad,color_vehiculo,matricula,hora_salida,costo_persona) VALUES(?,?)',data)
    .then(()=>{
      this.cargarViajes();
    });
  }
  updateViaje(id,conductor,capacidad,color_vehiculo,matricula,hora_salida,costo_persona){
    let data=[conductor,capacidad,color_vehiculo,matricula,hora_salida,costo_persona,id];
    return this.database.executeSql('UPDATE viajes SET conductor=?, capacidad=?, color_vehiculo=?, matricula=?, hora_salida=?, costo_persona=? WHERE id=?',data)
    .then(()=>{
      this.cargarViajes();
    });
  }
  deleteViaje(id){
    return this.database.executeSql('DELETE FROM viajes WHERE id=?',[id])
    .then(()=>{
      this.cargarViajes();
    });
  }
  dbState(){
    return this.isDbReady.asObservable();
  }

  fetchViajes(): Observable<Viajes[]> {
    return this.listaViajes.asObservable();
  }


  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }






}
