import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    window.scrollTo(0, 0);
    this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/']);
    return false;
  }
}
