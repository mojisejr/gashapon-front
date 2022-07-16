import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { BoxDetailPageComponent } from './pages/box-detail-page/box-detail-page.component';



@NgModule({
  declarations: [
    MarketplacePageComponent,
    BoxDetailPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketModule { }
