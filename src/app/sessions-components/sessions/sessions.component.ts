import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  sessions: any[] = [];
  sessionSubscription: Subscription | undefined
  hasUpcomingSessions?: boolean;

  constructor(private sessionService: SessionService) {
    this.setSessionsStatus();
  }

  ngOnInit(): void {
    this.sessionSubscription = this.sessionService.sessionSubject.subscribe(
      (sessions: any[]) => {
        this.sessions = sessions;
      }
    );
    this.sessionService.emitSessionSubject();
  }

  setSessionsStatus(): void {
    if (this.sessionService.getUpcomingSessions().length > 0) {
      this.hasUpcomingSessions = true;
    }
  }

}
