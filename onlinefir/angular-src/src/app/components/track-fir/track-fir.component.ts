import { Component, OnInit } from '@angular/core';
import { FirecontractService } from '../../services/firecontract.service';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-track-fir',
  templateUrl: './track-fir.component.html',
  styleUrls: ['./track-fir.component.css']
})
export class TrackFIRComponent implements OnInit {

  items: any[] = [];
  showtable = false;
  constructor(private firecontractService: FirecontractService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem('firs', null);
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
    this.firecontractService.trackFir(fir);
  }

  onClick() {
    console.log(localStorage.getItem("firs"));
    let firs = localStorage.getItem("firs").split("&");
    var user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstName + " " + user.lastName;
    console.log(firs);
    var f;
    for (f = 0; f < firs.length; f++) {
      if (firs[f] == "null") continue;
      let x = JSON.parse(firs[f])
      if (x.status == 0) x.status = "Lodged";
      if (x.status == 1) x.status = "Pending";
      if (x.status == 2) x.status = "Closed";
      if (x.name == name) {
        this.items.push(x);
      }
    }
    this.showtable = true;
  }
}
