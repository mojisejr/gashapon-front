import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBoxPageComponent } from './pages/create-box-page/create-box-page.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: CreateBoxPageComponent,
  },
];

@NgModule({
  declarations: [CreateBoxPageComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GashaponFactoryModule {}
