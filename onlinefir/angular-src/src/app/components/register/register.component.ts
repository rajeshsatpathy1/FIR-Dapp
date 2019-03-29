import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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
  confirmPassword: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    if (this.year == undefined || this.month == undefined || this.day == undefined || this.confirmPassword == undefined) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

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

    // Required fields
    if (!this.validateService.validateRegister(user)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Firstname validation
    if (!this.validateService.validateName(user.firstName)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("First name should include only a-z and A-Z and be between 2-30 characters", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Lastname validation
    if (!this.validateService.validateName(user.lastName)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Last name should include only a-z and A-Z and be between 2-30 characters", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Username validation
    if (!this.validateService.validateUsername(user.username)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Username should include only a-z, A-Z, 0-9 and '_'(underscore) and be between 2-15 characters", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Phone number validation
    if (!this.validateService.validatePhonenumber(user.phoneNumber)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please enter 10 digits only without spaces", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Email validation
    if (!this.validateService.validateEmail(user.email)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please enter valid email", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Pincode validation
    if (!this.validateService.validatePincode(user.pincode)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please enter valid pincode", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Aadhar number validation
    if (!this.validateService.validateAadhar(user.aadhar)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Please enter valid Aadhar number", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Password validation
    if (!this.validateService.validatePassword(user.password)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Password should include at least one digit(0-9) and one special character(! @ # $ % ^ & *) and be between 6-16 characters", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Password Confirmation
    if (!this.validateService.confirmPassword(user.password, this.confirmPassword)) {
      window.scrollTo(0, 0);
      this.flashMessage.show("Password did not match, please fill in again", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        window.scrollTo(0, 0);
        this.flashMessage.show("Your are registered, now you can login", { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/login']);
      }
      else {
        window.scrollTo(0, 0);
        this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/register']);
      }
    });
  }
}