import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercice } from '../models/exercice';
import { ExerciceService } from '../services/exercices.service';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.component.html',
  styleUrls: ['./exercice-detail.component.css']
})
export class ExerciceDetailComponent implements OnInit {

  @Input() indexExercice: number = 0;
  @Input() id: number = 0;
  @Input() exercice?: Exercice
  time: number = 0

  constructor(public exerciceService: ExerciceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.exercice = this.exerciceService.getExerciceById(this.id)
  }
}
