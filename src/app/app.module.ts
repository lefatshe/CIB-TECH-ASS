import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './interface/nav/nav.component';
import { BookingComponent } from './interface/booking/booking.component';
import { MenuComponent } from './interface/booking/menu/menu.component';
import { FlightComponent } from './interface/booking/flight/flight.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookingComponent,
    MenuComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
