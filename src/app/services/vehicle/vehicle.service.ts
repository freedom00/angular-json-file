import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly FILE_PATH = 'assets/vehicle.json';
  // tslint:disable-next-line:variable-name
  private readonly _vehicles: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this._vehicles = this.httpClient.get(this.FILE_PATH);
  }

  get vehicles(): Observable<any> {
    return this._vehicles;
  }
}
