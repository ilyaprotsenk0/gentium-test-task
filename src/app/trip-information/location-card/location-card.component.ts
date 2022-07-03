import { Component, Input } from '@angular/core';

@Component({
  selector: 'location-card',
  templateUrl: 'location-card.component.html',
  styleUrls: ['location-card.component.css'],
})
export class LocationCardComponent {
  @Input() dateTimeType!: string;
}
