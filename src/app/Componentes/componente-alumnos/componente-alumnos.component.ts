import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viajes } from 'src/app/Clases/viajes';
import { DbserviceService } from 'src/app/servicios/dbservice.service';

@Component({
  selector: 'app-componente-alumnos',
  templateUrl: './componente-alumnos.component.html',
  styleUrls: ['./componente-alumnos.component.scss'],
})
export class ComponenteAlumnosComponent implements OnInit {
  
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
  }

  elegir(item){
    this.dbservice.presentToast("Viaje seleccionado: "+item.id);
  }

}
