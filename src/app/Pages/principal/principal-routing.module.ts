import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAlumnosComponent } from 'src/app/Componentes/componente-alumnos/componente-alumnos.component';
import { ComponenteChoferComponent } from 'src/app/Componentes/componente-chofer/componente-chofer.component';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children:[
      {
        path: 'uno',
        component: ComponenteAlumnosComponent
      },
      {
        path: 'dos',
        component: ComponenteChoferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
