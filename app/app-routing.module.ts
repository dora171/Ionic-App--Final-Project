import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'archived',
    loadChildren: () => import('./archived/archived.module').then( m => m.ArchivedPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'hotel2',
    loadChildren: () => import('./hotel2/hotel2.module').then( m => m.Hotel2PageModule)
  },
  {
    path: 'hotel3',
    loadChildren: () => import('./hotel3/hotel3.module').then( m => m.Hotel3PageModule)
  },
  {
    path: 'how-to-use',
    loadChildren: () => import('./how-to-use/how-to-use.module').then( m => m.HowToUsePageModule)
  },
  {
    path: 'map-locations/:lat/:lng',
    loadChildren: () => import('./map-locations/map-locations.module').then( m => m.MapLocationsPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
