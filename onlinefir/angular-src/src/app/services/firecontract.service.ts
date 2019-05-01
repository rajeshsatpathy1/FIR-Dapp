import { Injectable } from '@angular/core';
import { web3 } from '../ethereum/web3'
import Web3 from 'web3';
import { createContract } from '../ethereum/firContract';


@Injectable({
  providedIn: 'root'
})
export class FirecontractService {

  public address: ""
  WEB3: Web3


  constructor() { }

  async placeFIR(fir) {
    const contract = createContract("0x7D74247DCA2f16e055bBb85601FdaFC5776E4506");
    let currentAccount;
    web3.eth.getAccounts((err, accounts) => {
      if (err) console.log(err);
      else if (!accounts.length) console.log('No Metamask accounts found');
      else {
        currentAccount = accounts[0];
      }
    })

    const name = await contract.methods.PlaceFir(fir.name, fir.aadhar, fir.details, fir.stationCode, fir.topic, fir.severity).send({ from: "0x7FfF7FeA9FAbA70F66bDEa47B946147366a21E74" }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    })
    console.log('shots fired!');
  }
}