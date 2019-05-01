import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FirecontractService } from '../../services/firecontract.service';

@Component({
  selector: 'app-place-fir',
  templateUrl: './place-fir.component.html',
  styleUrls: ['./place-fir.component.css']
})
export class PlaceFIRComponent implements OnInit {

  topic: Number;
  severity: Number;
  stationPincode: String;
  details: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private firecontractService: FirecontractService
  ) { }

  ngOnInit() {
  }

  onPlacefirSubmit() {
    if (this.topic == undefined || this.severity == undefined || this.details == undefined) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    var user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstName + " " + user.lastName;
    const stcode = parseInt(this.stationPincode.toString());
    const fir = {
      name: name,
      aadhar: user.aadhar,
      details: this.details,
      stationCode: stcode,
      topic: this.topic,
      severity: this.severity
    }

    // Pincode validation
    if (!this.validateService.validatePincode(this.stationPincode)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please enter valid pincode", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    this.firecontractService.placeFIR(fir);

  }

}
