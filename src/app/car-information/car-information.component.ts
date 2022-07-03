import { Component, Input } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'car-information',
  templateUrl: 'car-information.component.html',
  styleUrls: ['car-information.component.css'],
})
export class CarInformationComponent {
  listOpened: boolean = false;
  carsList: Car[] = [
    {
      license: 'AT1505BM',
      model: 'BMW X3',
      imgUrl: 'assets/images/car-photo-1.png',
    },
    {
      license: 'KA1234KA',
      model: 'Toyota Prius',
      imgUrl: 'assets/images/car-photo-default.png',
    },
  ];

  selectedCar: Car | undefined = undefined;

  selectCar(license: string) {
    this.selectedCar = this.carsList.find((car) => car.license === license);
    this.toggleList();
  }

  toggleList() {
    this.listOpened = !this.listOpened;
  }
}
