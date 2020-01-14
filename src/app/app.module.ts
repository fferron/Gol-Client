import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAirplaneComponent } from './create-airplane/create-airplane.component';
import { AirplaneDetailsComponent } from './airplane-details/airplane-details.component';
import { AirplaneListComponent } from './airplane-list/airplane-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPassengerComponent } from './passenger-list/list-passenger.component';
import { CreatePassengerComponent } from './create-passenger/create-passenger.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAirplaneComponent,
    AirplaneDetailsComponent,
    AirplaneListComponent,
    ListPassengerComponent,
    CreatePassengerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
