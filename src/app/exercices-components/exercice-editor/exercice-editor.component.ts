import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Exercice } from 'src/app/models/exercice.model';
import { ExerciceService } from 'src/app/services/exercices.service';

@Component({
  selector: 'app-exercice-editor',
  templateUrl: './exercice-editor.component.html',
  styleUrls: ['./exercice-editor.component.css']
})
export class ExerciceEditorComponent {

  exerciceForm: FormGroup;

  constructor(private fb: FormBuilder, private exerciceService: ExerciceService,
              private router: Router) {
    this.exerciceForm = this.fb.group({
      id: this.exerciceService.getLastId() + 1,
      name: fb.control('', Validators.required),
      duration_minutes: fb.control(5, Validators.required),
      description: fb.control('', Validators.required),
      isFinished: [false]
    })
  }

  onSubmit(): void{
    const form = this.exerciceForm.value;
    console.log(form)
    this.exerciceService.addExercice(form);
    // const newExercice = new Exercice(
    //   form['id'],
    //   form['name'],
    //   form['duration'],
    //   form['descirption'],
    //   form['isFinished']
    // );
    this.router.navigate(['/exercices']);
  }
}
