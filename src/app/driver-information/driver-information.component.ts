import { Component } from '@angular/core';

@Component({
  selector: 'driver-information',
  templateUrl: 'driver-information.component.html',
  styleUrls: ['driver-information.component.css'],
})
export class DriverInformationComponent {
  otherChoosen: boolean = false;
  editChoosen: boolean = false;
  driverName!: string;

  chooseOther() {
    this.otherChoosen = true;
  }

  chooseSelf() {
    this.otherChoosen = false;
    this.editChoosen = false;
  }

  toggleEdit() {
    this.editChoosen = !this.editChoosen;
  }
}
