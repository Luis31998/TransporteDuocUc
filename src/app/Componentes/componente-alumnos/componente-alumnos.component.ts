import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viajes } from 'src/app/Clases/viajes';
import { DbserviceService } from 'src/app/servicios/dbservice.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { publicacion } from 'src/app/interfaces/iusuarios';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-componente-alumnos',
  templateUrl: './componente-alumnos.component.html',
  styleUrls: ['./componente-alumnos.component.scss'],
})
export class ComponenteAlumnosComponent implements OnInit {
  
  viajes: Viajes[];
  publicaciones: publicacion[] = [];

  constructor(private dbservice: DbserviceService, private router: Router, private database: FirestoreService, private emailComposer: EmailComposer) { 
    
  }

  ngOnInit() {
    this.dbservice.dbState().subscribe((res)=>{
      if(res){
        this.dbservice.fetchViajes().subscribe(item=>{
          this.viajes=item;
        })
      }
    });
    this.getResultados();
  }
  async getResultados() {

    const path = 'Publicaciones';
    this.database.getCollection<publicacion>(path).subscribe( res => {
        console.log('esta es la lectura', res);
        this.publicaciones = res;
    })

  };
  
  seleccionar(){
    //
    console.log('Viaje seleccionado')
    let email = {
      to: localStorage.getItem('usuario')+'@duocuc.cl',
      cc: 'conductor@duocuc.cl',
      subject: 'Reserva Confirmada',
      body: localStorage.getItem('usuario')+' Ha reservado el viaje con conductorviaje',
      isHtml: true
    };
    this.emailComposer.open(email);
  };


}
