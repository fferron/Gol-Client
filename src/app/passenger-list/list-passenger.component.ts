import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../passanger';
import { PassengerService } from '../passenger.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-passenger',
  templateUrl: './list-passenger.component.html',
  styleUrls: ['./list-passenger.component.css']
})

export class ListPassengerComponent implements OnInit {
  passengers: Observable<Passenger[]>;
  passenger: Passenger;

  constructor(private passengerService: PassengerService, private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.passengers = this.passengerService.getPassengerList();
  }

  edit(passenger: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "passenger": JSON.stringify(passenger)
      }
    };
    this.router.navigate(["addPassenger"], navigationExtras)
  }
}
