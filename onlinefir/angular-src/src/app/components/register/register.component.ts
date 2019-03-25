import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  username: String;
  dateOfBirth: Date;
  gender: String;
  maritalStatus: String;
  phoneNumber: String;
  email: String;
  address: String;
  city: String;
  district: String;
  state: String;
  country: String;
  pincode: String;
  aadhar: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

}
