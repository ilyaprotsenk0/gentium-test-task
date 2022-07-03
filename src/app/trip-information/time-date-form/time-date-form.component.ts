import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-date-form',
  templateUrl: 'time-date-form.component.html',
  styleUrls: ['time-date-form.component.css'],
})
export class TimeDateFormComponent {
  selectedDate!: Date | null;
  formSubmited: boolean = false;
  @Input() dateTimeType!: string;
  constructor() {}

  submitForm(timeValue: any, dateValue: Date | null, event: Event) {
    event.stopPropagation();
    console.log(timeValue, dateValue);
    this.formSubmited = true;
  }
}
