import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'factory',
    loadChildren: () =>
      import('./gashapon-factory/gashapon-factory.module').then(
        (m) => m.GashaponFactoryModule
      ),
  },
  {
    path: 'box',
    loadChildren: () =>
      import('./gashapon-box/gashapon-box.module').then(
        (m) => m.GashaponBoxModule
      ),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
