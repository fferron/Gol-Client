import { Component, OnInit } from '@angular/core';
import { Passenger } from '../passanger';
import { PassengerService } from '../passenger.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-create-passenger',
  templateUrl: './create-passenger.component.html',
  styleUrls: ['./create-passenger.component.css']
})
export class CreatePassengerComponent implements OnInit {
  passenger: Passenger = new Passenger();
  submitted = false;

  message: string;

  constructor(private passengerService: PassengerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      var param = params["passenger"];

      if(param != undefined && param != ""){
        this.passenger = JSON.parse(param);
      }
    });
   }

  ngOnInit() {
    $(function(){
      $("#createBtn").click(function (){
        if($("#name").val() == '' || $("#airplaneID").val() == ''){
          $(".message").removeClass("message");
        }
        else{
          $("#hiddenBtn").click();
        }
      });
    });     
  }

  newPassenger(): void {
    this.submitted = false;
    this.passenger = new Passenger();
  }

  save() {
    if(this.passenger.id == 0 || this.passenger.id == undefined) {
      this.passengerService.createPassenger(this.passenger)
        .subscribe(data => console.log(data), error => console.log(error));
    }
    else {
      this.passengerService.updatePassenger(this.passenger)
        .subscribe(data => console.log(data), error => console.log(error));
    }

    this.submitted = true;
    this.passenger = new Passenger();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
