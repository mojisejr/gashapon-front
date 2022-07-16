import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NftDepositPageComponent } from './pages/nft-deposit-page/nft-deposit.component';
import { NftStackingPageComponent } from './pages/nft-stacking-page/nft-stacking.component';
import { NftWithdrawPageComponent } from './pages/nft-withdraw-page/nft-withdraw-page.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryPageComponent,
  },
];

@NgModule({
  declarations: [
    InventoryPageComponent,
    NftDepositPageComponent,
    NftStackingPageComponent,
    NftWithdrawPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GashaponBoxModule {}
