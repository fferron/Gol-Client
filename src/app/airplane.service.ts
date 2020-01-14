import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {
  private urlApi = 'http://localhost:5000/api/Airplanes/';

  constructor(private http: HttpClient) { }

  getAirplaneList(): Observable<any> {
    return this.http.get(`${ this.urlApi }`+`GetAllAirplane`);
  }

  getAirplane(id: number): Observable<Object> {
    return this.http.get(`${ this.urlApi }/${ id }`);
  }

  createAirplane(airplane: Object): Observable<Object> {
    return this.http.post(`${ this.urlApi }`+`InsertAirplane`, airplane);
  }

  updateAirplane(airplane: Object): Observable<Object> {
    return this.http.post(`${ this.urlApi }`+`UpdateAirplane`, airplane);
  }

  deleteAirplane(id: number): Observable<any> {
    return this.http.delete(`${ this.urlApi }${ id }`); //{ responseType: 'text' }
  }
}
