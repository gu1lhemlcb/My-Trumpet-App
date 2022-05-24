import { Component, OnInit, Input } from '@angular/core';
import { Exercice } from '../exercice';
import { ExerciceService } from '../services/exercices.service';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.component.html',
  styleUrls: ['./exercice-detail.component.css']
})
export class ExerciceDetailComponent implements OnInit {

  @Input() exercice?: Exercice
  @Input() indexExercice: number = 0;
  isDone: boolean = false;


  constructor(public exerciceService: ExerciceService) { }

  ngOnInit(): void {
  }
}
