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
    const contract = createContract("0x3F336239Ab442DE2018d93dc22885112f1875672");
    let currentAccount;
    web3.eth.getAccounts((err, accounts) => {
      if (err) console.log(err);
      else if (!accounts.length) console.log('No Metamask accounts found');
      else {
        currentAccount = web3.eth.accounts[0];
        console.log(web3.eth.accounts[0]);
      }
    })

    const name = await contract.methods.PlaceFir(fir.name, fir.aadhar, fir.details, fir.stationCode, fir.topic, fir.severity).send({ from: "0x0F2C298990e6b8A2049DbC1aAefB191b9cE9F5E5" }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    })
    console.log('shots fired!');
  }

  
  trackFir(user){
    const contract = createContract("0x3F336239Ab442DE2018d93dc22885112f1875672");
    var a = contract.events.FirComplain({
      filter: {_From: '0x0F2C298990e6b8A2049DbC1aAefB191b9cE9F5E5'},
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