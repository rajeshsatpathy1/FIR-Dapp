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
    const contract = createContract("0x2e13e625AcE67990674Dc1FA3E756479332F6d47");
    let currentAccount;
    web3.eth.getAccounts((err, accounts) => {
      if (err) console.log(err);
      else if (!accounts.length) console.log('No Metamask accounts found');
      else {
        currentAccount = accounts[0];
      }
    })

    const name = await contract.methods.PlaceFir(fir.name, fir.aadhar, fir.details, fir.stationCode, fir.topic, fir.severity).send({ from: "0xB6422Ef13B4b16508B9dc649e633254ba3c6Edf7" }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    })
    console.log('shots fired!');
  }

  
  trackFir(user){
    const contract = createContract("0x2e13e625AcE67990674Dc1FA3E756479332F6d47");
    var a = contract.events.FirComplain({
      filter: {_From: '0xB6422Ef13B4b16508B9dc649e633254ba3c6Edf7'},
      fromBlock: 0,
      toBlock: 'latest'
    }, function(error, event){
      if(error){
        console.log(error);
      }else{
        console.log('blockHash:' + event['blockHash'] + ' ' + 
        'blockNumber: ' + event['blockNumber'] + ' ' + 
        '\nCrime in the block:' + event['returnValues'][3]); //Send this data to track FIRs on HTML page
        //console.log(event);
      }
    })
    //console.log(a);
  }
}