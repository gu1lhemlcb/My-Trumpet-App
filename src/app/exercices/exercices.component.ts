import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Exercice } from '../models/exercice';
import { ExerciceService } from '../services/exercices.service';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  exercices: any[] = [];
  exerciceSubscription: Subscription | undefined;
  selectedExercice?: Exercice;

  constructor(private exerciceService: ExerciceService) {}

  ngOnInit(): void {
    this.exerciceSubscription = this.exerciceService.exerciceSubject.subscribe(
      (exercices: any[]) => {
        this.exercices = exercices;
      }
    );
    this.exerciceService.emitExerciceSubject();
  }

}
