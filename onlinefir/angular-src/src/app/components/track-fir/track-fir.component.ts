import { Component, OnInit } from '@angular/core';
import { FirecontractService } from '../../services/firecontract.service';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-track-fir',
  templateUrl: './track-fir.component.html',
  styleUrls: ['./track-fir.component.css']
})
export class TrackFIRComponent implements OnInit {

  topic: Number;
  severity: Number;
  stationPincode: String;
  details: String;

  constructor(private firecontractService: FirecontractService) { }

  ngOnInit() {
  }

  trackFir(){
    var user = JSON.parse(localStorage.getItem("user"));
    console.log('entered');
    //const name = user.firstName + " " + user.lastName;
    //const stcode = parseInt(this.stationPincode.toString());
    //console.log(this.stationPincode + " " + typeof(this.stationPincode));
    const fir = {
      //name: name,
      aadhar: user.aadhar,
      //details: this.details,
      //stationCode: stcode,
      //topic: this.topic,
      //severity: this.severity
    }

    const ans =this.firecontractService.trackFir(fir);
    console.log(ans + "ljh");
  }

}
