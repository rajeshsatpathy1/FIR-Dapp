import { Component, OnInit } from '@angular/core';
import { FirecontractService } from '../../services/firecontract.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private contractService: FirecontractService ) { }

  ngOnInit() {
  }

  call(address: "0x13b41cB888c9Ea3c0BF1677134CAE2f7db152870"){
    console.log("home.component.html");
    this.contractService.testfunc(address);
    }
}
