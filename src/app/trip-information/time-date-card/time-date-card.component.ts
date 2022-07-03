import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-date-card',
  templateUrl: 'time-date-card.component.html',
  styleUrls: ['time-date-card.component.css'],
})
export class TimeDateCardComponent {
  @Input() dateTimeType!: string;
  calendarShown: boolean = false;

  constructor() {}

  toggleCalendar(event: Event, toggleCalendar: HTMLElement) {
    if (event.target === toggleCalendar) {
      this.calendarShown = !this.calendarShown;
    }
  }
}
