import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../shared/services/shared.services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  @Input() isAuthenticated: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private sharedService: SharedService, private router: Router) {
    this.loginForm = this.fb.group({
      email: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })
    this.sharedService = sharedService;
  }

  ngOnInit(): void {
      this.isAuthenticated = this.authService.isAuth
  }

  login(): Promise<any> {
    return this.authService.logUser().then(() => {
        this.isAuthenticated = this.authService.isAuth;
        this.router.navigate(['/']);
      });
  }

  logout(): void{
    this.isAuthenticated = false;
    this.authService.isAuth = false;
    this.router.navigate(['/']);
  }
}
