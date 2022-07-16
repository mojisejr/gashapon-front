import { Injectable } from '@angular/core';
import { factory as factoryABI } from '../abi/kpunk.box.factory.abi';
import { ethers } from 'ethers';
import { getRPC } from '../constants/rpc.config';
import { boxDataTransform, BoxData } from '../utils/factory.util';
import { newBoxData } from '../models/factory.model';

@Injectable({
  providedIn: 'root',
})
export class FactoryContractService {
  viewFunction: ethers.Contract;
  viewProvider: ethers.providers.JsonRpcProvider;
  constructor() {
    this.viewProvider = new ethers.providers.JsonRpcProvider(getRPC(false));
    this.viewFunction = new ethers.Contract(
      factoryABI.address,
      factoryABI.abi,
      this.viewProvider
    );
  }

  createCallContractInstance(
    signer: ethers.providers.JsonRpcSigner
  ): ethers.Contract {
    return new ethers.Contract(factoryABI.address, factoryABI.abi, signer);
  }

  async getAllBoxes() {
    let boxes = await this.viewFunction['getAllBoxes']();
    boxes = boxDataTransform(boxes) as BoxData[];
    console.log('boxes', boxes);
    return boxes;
  }

  async getCreateNewBox(
    signer: ethers.providers.JsonRpcSigner,
    boxData: newBoxData
  ) {
    try {
      const contract = this.createCallContractInstance(signer);
      console.log(contract);
      console.log(boxData);
      await contract['createNewBox'](
        boxData.name,
        boxData.symbol,
        boxData.ticketPrice
      );
    } catch (error) {
      console.error(error);
    }
  }
}
