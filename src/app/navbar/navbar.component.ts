import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title = 'My Trumpet App';
  authStatus: boolean = false;

  constructor(private authService: AuthService){
    this.authService = authService;
  }

  getAuthStatus(): boolean {
    return this.authService.isAuth;
  }

}
