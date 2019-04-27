import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        if (user[key] == undefined) {
          return false;
        }
      }
    }
    return true;
  }

  validateName(name) {
    const regex = /^[a-zA-Z ]{2,30}$/;

    if (regex.test(name)) {
      return true;
    }
    else {
      return false;
    }
  }

  validateUsername(username) {
    const regex = /^[a-zA-Z0-9_]{2,15}$/;

    if (regex.test(username)) {
      return true;
    }
    else {
      return false;
    }
  }

  validatePhonenumber(phone) {
    const regex = /^[0-9]{10}$/;

    if (regex.test(phone)) {
      return true;
    }
    else {
      return false;
    }
  }

  validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email)) {
      return true;
    }
    else {
      return false;
    }
  }

  validatePincode(pincode) {
    const regex = /^[1-9][0-9]{5}$/;

    if (regex.test(pincode)) {
      return true;
    }
    else {
      return false;
    }
  }

  validateAadhar(aadhar) {
    const regex1 = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    const regex2 = /^[0-9]{12}$/;

    if (regex1.test(aadhar) || regex2.test(aadhar)) {
      return true;
    }
    else {
      return false;
    }
  }

  validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (regex.test(password)) {
      return true;
    }
    else {
      return false;
    }
  }

  confirmPassword(pass, confirm) {
    if (pass == confirm) {
      return true;
    }
    else {
      return false;
    }
  }
}
