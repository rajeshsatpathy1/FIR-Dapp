import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  firid: String;
  status: Number;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onOfficerSubmit() {
    if (this.firid == undefined || this.status == undefined) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }
  }
}
