import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-editor',
  templateUrl: './session-editor.component.html',
  styleUrls: ['./session-editor.component.css']
})
export class SessionEditorComponent {

  sessionForm : FormGroup;

  constructor(private fb: FormBuilder,
              private sessionService: SessionService,
              private router: Router) {

      this.sessionForm = this.fb.group({
        id: 45,
        date: fb.control("", Validators.required),
        todo: fb.control("", Validators.required),
        feedback: fb.control(""), // Not required as the session has not been finished yet
        isFinished: false
      });
  }

  onSubmit(){
    const form = this.sessionForm.value;
    form.date = new Date(form.date.year, form.date.month, form.date.day);
    this.sessionService.addSession(form);
    this.router.navigate(['/sessions'])
  }

}
