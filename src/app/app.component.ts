import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayModal: boolean = true;
  editLog: boolean = false;
  logValue: string = '';

  title = 'gentium-test-task';

  toggleModal() {
    this.displayModal = !this.displayModal;
  }

  toggleEditLog() {
    this.editLog = !this.editLog;
  }
}
