import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { ComponenteAlumnosComponent } from 'src/app/Componentes/componente-alumnos/componente-alumnos.component';
import { ComponenteChoferComponent } from 'src/app/Componentes/componente-chofer/componente-chofer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule
  ],
  declarations: [PrincipalPage, ComponenteAlumnosComponent, ComponenteChoferComponent]
})
export class PrincipalPageModule {}
