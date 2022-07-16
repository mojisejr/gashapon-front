import { Component, OnInit } from '@angular/core';
import {
  EthereumService,
  EthereumState,
} from 'src/app/shared/services/ethereum.service';
import { Observable } from 'rxjs';
import { FactoryContractService } from 'src/app/shared/services/factory.contract.service';
import { BoxData } from 'src/app/shared/utils/factory.util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  currentSigner$: Observable<EthereumState>;
  boxes: BoxData[] = [];

  constructor(
    private eth: EthereumService,
    private factory: FactoryContractService
  ) {
    this.currentSigner$ = this.eth.currentAddress.asObservable();
    // this.factory.getAllBoxes();
  }

  async ngOnInit(): Promise<void> {
    await this.eth.connectionCheck();
    this.boxes = await this.factory.getAllBoxes();
  }

  async connectWallet() {
    await this.eth.connectWallet();
  }

  async createNewBox() {
    const signer = this.eth.getSigner();
    await this.factory.getCreateNewBox(signer, {
      name: 'box 3',
      symbol: 'BOX',
      ticketPrice: 10000,
    });
  }
}
