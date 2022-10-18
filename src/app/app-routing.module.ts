import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'recuperar',
    loadChildren: () => import('./Pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./Pages/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'recupera',
    loadChildren: () => import('./home/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./Pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
