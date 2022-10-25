import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viajes } from 'src/app/Clases/viajes';
import { publicacion } from 'src/app/interfaces/iusuarios';
import { DbserviceService } from 'src/app/servicios/dbservice.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-componente-chofer',
  templateUrl: './componente-chofer.component.html',
  styleUrls: ['./componente-chofer.component.scss'],
})
export class ComponenteChoferComponent implements OnInit {
  
  
  data : publicacion = {
    viaje : {
      conductorViaje:'',
      capacidadViaje:"",
      vehiculoViaje:"",
      matriculaViaje:"",
      salidaViaje:"",
      costoViaje:""
    }
    
  }
  publicaciones: publicacion[] = [];
  


  constructor(private dbservice: DbserviceService, private router: Router, private database: FirestoreService) {
    
   }

  ngOnInit() {
    var conductor = localStorage.getItem('usuario')
    
  };
  
  getResultados() {

    const path = 'Publicaciones';
    this.database.getCollection<publicacion>(path).subscribe( res => {
        console.log('esta es la lectura', res);
        this.publicaciones = res;
    })

  }

  
//
  publicar(){
    this.data.viaje.conductorViaje= localStorage.getItem('usuario')
    console.log('data publicacions: '+ this.data.viaje)
    
    const path = 'Publicaciones';
      const id = this.database.getId();
      //this.data.id = id;
      this.database.createDoc(this.data, path, id).then( () => {
          console.log('guardado con exito -> ');
          this.database.presentToast('Guardado con exito')
      } )

  };

  eliminar(item) {
    this.dbservice.deleteViaje(item.id);
    this.dbservice.presentToast("Viaje Eliminado");
  }

}
