import { Component, Input, OnInit, Output } from '@angular/core';
import { SharedService } from './shared/services/shared.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Trumpet App';
  authStatus: boolean = false;
  subscription: Subscription | undefined

  constructor(private sharedService: SharedService){
    this.sharedService = sharedService;
  }

  ngOnInit(): void {
      this.subscription = this.sharedService.getEmittedValue().subscribe(status => this.authStatus=status);
  }
}
