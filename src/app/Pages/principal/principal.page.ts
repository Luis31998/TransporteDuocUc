import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BdlocalService } from 'src/app/servicios/bdlocal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  
  usuario: any;

  constructor(private router: Router, public bdLocal: BdlocalService) {
    
    console.log('usuario: '+this.bdLocal.obtenerUsuario)
    this.usuario= this.bdLocal.obtenerUsuario
    console.log('nombre usuario obtenido y en variable: '+ this.usuario)
    
    this.router.navigate(['principal/uno']);
   }
  
  segmentChanged($event){
    console.log($event);
    let direccion=$event.detail.value;
    console.log(direccion);
    this.router.navigate(['principal/'+direccion]);
  }

  ngOnInit() {
  }

}
