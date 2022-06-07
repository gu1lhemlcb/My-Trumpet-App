import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ngbd-datepicker-popup',
  templateUrl: './ngbd-datepicker-popup.component.html',
  styleUrls: ['./ngbd-datepicker-popup.component.css']
})
export class NgbdDatepickerPopupComponent {
  @Input() sessionForm!: FormGroup;
  @Output() date!: string;

  constructor() {
  }
}
