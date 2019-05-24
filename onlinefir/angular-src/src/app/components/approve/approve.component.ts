import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  username: String;
  station: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onAdminSubmit() {
    const officer = {
      username: this.username,
      stationCode: this.station,
      userType: "officer"
    }

    //update user
    this.authService.updateUser(officer).subscribe(data => {
      if (data.success) {
        window.scrollTo(0, 0);
        this.flashMessage.show("Officer approved", { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/approve']);
      }
      else {
        window.scrollTo(0, 0);
        this.flashMessage.show("User does not exists.", { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/approve']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin']);
    this.flashMessage.show("logged out", { cssClass: 'alert-success', timeout: 4000 });
  }

}
