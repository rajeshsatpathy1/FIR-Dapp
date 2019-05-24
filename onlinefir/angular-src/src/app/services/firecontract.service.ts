import { Injectable } from '@angular/core';
import { web3 } from '../ethereum/web3'
import Web3 from 'web3';
import { createContract } from '../ethereum/firContract';
import { of, BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirecontractService {

  public address: ""
  WEB3: Web3
  currentAccount: String;
  events: Array<any>;

  constructor() {
    web3.eth.getAccounts((err, accounts) => {
      if (err) console.log(err);
      else if (!accounts.length) console.log('No Metamask accounts found');
      else {
        this.currentAccount = accounts[0];
        console.log(accounts[0]);
      }
    })
  }

  async placeFIR(fir) {
    const contract = createContract("0x144e4F5097F1D251985bd98ECfF434aeF35271D7");

    const name = await contract.methods.PlaceFir(fir.name, fir.aadhar, fir.details, fir.stationCode, fir.topic, fir.severity).send({ from: this.currentAccount }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    })
    console.log('shots fired!');
  }

  trackFir(user) {
    const contract = createContract("0x144e4F5097F1D251985bd98ECfF434aeF35271D7");
    var a = contract.events.FirComplain({
      filter: { _From: '0x7FfF7FeA9FAbA70F66bDEa47B946147366a21E74' },
      fromBlock: 0,
      toBlock: 'latest'
    }
      , function (error, event) {
        if (error) {
          console.log(error);
        } else {
          let even = {
            name: event['returnValues'][1],
            details: event['returnValues'][3],
            status: event['returnValues'][4]
          }
          let strEvent = JSON.stringify(even);
          let data = localStorage.getItem("firs");
          if (data == null) {
            localStorage.setItem('firs', strEvent);
          }
          else {
            localStorage.setItem('firs', data + '&' + strEvent);
          }
        }
      }
    )
  }
}