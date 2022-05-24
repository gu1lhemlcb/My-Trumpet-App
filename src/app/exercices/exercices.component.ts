import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice';
import { ExerciceService } from '../services/exercices.service';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {

  exercices: any[] = [];
  selectedExercice?: Exercice;
  indexSelectedExercice: number = 0;

  constructor(private exerciceService: ExerciceService) {}

  ngOnInit(): void {
    this.exercices = this.exerciceService.EXERCICES;
  }

  onSelect(exercice: Exercice, index: number): void {
    this.selectedExercice = exercice
    this.indexSelectedExercice = index;
  }
}
