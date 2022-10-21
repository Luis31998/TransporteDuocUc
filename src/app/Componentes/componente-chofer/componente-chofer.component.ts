import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viajes } from 'src/app/Clases/viajes';
import { DbserviceService } from 'src/app/servicios/dbservice.service';

@Component({
  selector: 'app-componente-chofer',
  templateUrl: './componente-chofer.component.html',
  styleUrls: ['./componente-chofer.component.scss'],
})
export class ComponenteChoferComponent implements OnInit {
  conductorViaje="";
  capacidadViaje="";
  vehiculoViaje="";
  matriculaViaje="";
  salidaViaje="";
  costoViaje="";

  viajes: Viajes[];

  constructor(private dbservice: DbserviceService, private router: Router) {
    
   }

  ngOnInit() {
    this.dbservice.dbState().subscribe((res)=>{
      if(res){
        this.dbservice.fetchViajes().subscribe(item=>{
          this.viajes=item;
        })
      }
    })
  };
  publicar(){
    this.dbservice.addViaje(this.conductorViaje,this.capacidadViaje,this.vehiculoViaje,this.matriculaViaje,this.salidaViaje,this.costoViaje);
    this.dbservice.presentToast("Viaje agregado");
    this.router.navigate(['/principal/dos']);
  };

  eliminar(item) {
    this.dbservice.deleteViaje(item.id);
    this.dbservice.presentToast("Viaje Eliminado");
  }

}
