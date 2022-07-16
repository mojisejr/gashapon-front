import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';

export interface EthereumState {
  currentAccount?: string;
  isConnected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EthereumService {
  public currentAddress = new BehaviorSubject<EthereumState>({
    isConnected: false,
  });
  private provider: ethers.providers.Web3Provider;

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  async connectionCheck(): Promise<boolean> {
    const signer = this.provider.getSigner();
    const address = await signer.getAddress().catch(() => '');
    if (address === '') {
      return false;
    } else {
      this.currentAddress.next({
        currentAccount: address,
        isConnected: true,
      } as EthereumState);
      return true;
    }
  }

  async connectWallet(): Promise<void> {
    await this.provider.send('eth_requestAccounts', []);
    const signer = this.provider.getSigner();
    const signerAddress = await signer.getAddress();
    this.currentAddress.next({
      currentAccount: signerAddress,
      isConnected: true,
    } as EthereumState);
  }

  getProvider(): ethers.providers.Web3Provider {
    return this.provider;
  }

  getSigner(): ethers.providers.JsonRpcSigner {
    return this.provider.getSigner();
  }
}
