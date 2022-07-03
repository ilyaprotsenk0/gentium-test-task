// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

// Components
import { AppComponent } from './app.component';
import { DriverInformationComponent } from './driver-information/driver-information.component';
import { CarInformationComponent } from './car-information/car-information.component';
import { TripInformation } from './trip-information/trip-information.component';
import { LocationCardComponent } from './trip-information/location-card/location-card.component';
import { TimeDateCardComponent } from './trip-information/time-date-card/time-date-card.component';
import { TimeDateFormComponent } from './trip-information/time-date-form/time-date-form.component';

// Pipes
import { CarModelPipe } from './pipes/car-model.pipe';
import { CarLicensePipe } from './pipes/car-license.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DriverInformationComponent,
    CarInformationComponent,
    TripInformation,
    LocationCardComponent,
    TimeDateCardComponent,
    TimeDateFormComponent,
    CarModelPipe,
    CarLicensePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
