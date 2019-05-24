import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onAdminLoginSubmit() {
    if (this.username == "admin" && this.password == "admin@123") {
      this.authService.storeUserData("admin", "admin");
      this.router.navigate(['/approve']);
      window.scrollTo(0, 0);
      this.flashMessage.show("Logged in successfully", { cssClass: 'alert-success', timeout: 4000 });
    }
    else {
      this.router.navigate(['/admin']);
      window.scrollTo(0, 0);
      this.flashMessage.show("Wrong username/Password", { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
