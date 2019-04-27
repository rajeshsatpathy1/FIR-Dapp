import { Injectable } from '@angular/core';
import { web3 } from '../ethereum/web3'
import Web3 from 'web3';
import { createContract } from '../ethereum/firContract';


@Injectable({
  providedIn: 'root'
})
export class FirecontractService {

  public address: ""
  WEB3 : Web3


  constructor() { }

  async testfunc(address: string) {
    const contract = createContract("0x5bfdD15A1C56D74c5f99C6F61392bF7eEaA6EdA6");
    let currentAccount;

    web3.eth.getAccounts((err, accounts) => {
      if (err) console.log(err);
      else if (!accounts.length) console.log('No Metamask accounts found');
      else {
        currentAccount = accounts[0];
      }
    })

    const name = await contract.methods.PlaceFir("pratyush", "00000", "Stolen Car", 50, 0, 0).send({ from: "0x13b41cB888c9Ea3c0BF1677134CAE2f7db152870" }, (error, result) => {
      if (error) {
        console.log(error);
      }else{
        console.log(result);
      }
    })
    console.log('shots fired!');
  }
}