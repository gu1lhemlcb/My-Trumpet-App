import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { StopwatchService } from '../services/stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {

  time: number = 0;
  stopWatchSubscription: Subscription | undefined

  constructor(private stopWatchService: StopwatchService) { }

  ngOnInit(): void {
    const counter = interval(1000);
    this.stopWatchSubscription = counter.subscribe((value: number) => {
      this.time = value;
    })
  }

  ngOnDestroy(): void {
      this.stopWatchSubscription?.unsubscribe()
  }

}
