import { Injectable } from '@angular/core';
import { EthereumService } from './ethereum.service';
@Injectable({
  providedIn: 'root',
})
export class BoxContractService {
  constructor(private eth: EthereumService) {}
}
