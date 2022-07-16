import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { EthereumService } from './shared/services/ethereum.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: Window, useValue: window }, EthereumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
