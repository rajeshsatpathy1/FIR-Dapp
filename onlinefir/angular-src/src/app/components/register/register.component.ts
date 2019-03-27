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
  day: String;
  month: String;
  year: String;
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

  onRegisterSubmit() {
    const dateOfBirth = new Date(Number(this.year), Number(this.month), Number(this.day));
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      dateOfBirth: dateOfBirth,
      gender: this.gender,
      maritalStatus: this.maritalStatus,
      phoneNumber: this.phoneNumber,
      email: this.email,
      address: this.address,
      city: this.city,
      district: this.district,
      state: this.state,
      country: this.country,
      pincode: this.pincode,
      aadhar: this.aadhar,
      password: this.password
    }
  }
}