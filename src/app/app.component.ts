import { Component, Input, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SharedService } from './shared/services/shared.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Trumpet App';
  authStatus: boolean = false;

  constructor(private authService: AuthService, private sharedService: SharedService){
    this.authService = authService;
    this.sharedService = sharedService;
  }

  getAuthStatus(): boolean {
    return this.authService.isAuth;
  }
}
