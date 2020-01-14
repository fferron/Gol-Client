import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private urlApi = 'http://localhost:5000/api/Passengers/';

  constructor(private http: HttpClient) { }

  getPassengerList(): Observable<any> {
    return this.http.get(`${ this.urlApi }`+`GetAllPassenger`);
  }

  getPassenger(id: number): Observable<Object> {
    return this.http.get(`${ this.urlApi }/${ id }`);
  }

  createPassenger(passenger: Object): Observable<Object> {
    return this.http.post(`${ this.urlApi }`+`InsertPassenger`, passenger);
  }

  updatePassenger(passenger: Object): Observable<Object> {
    return this.http.post(`${ this.urlApi }`+`UpdatePassenger`, passenger);
  }
}
