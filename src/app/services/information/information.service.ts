import {Injectable} from '@angular/core';
import {Information} from '../../models/information/information';
import {Vehicle} from '../../models/vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor() {
    this._information = {} as Information;
    this.vehicle = {year: '', make: '', model: '', trim: ''};
  }

  // tslint:disable-next-line:variable-name
  private _information: Information;

  get information(): Information {
    return this._information;
  }

  set information(value: Information) {
    this._information = value;
  }

  get vehicle(): Vehicle {
    return this._information.vehicle;
  }

  set vehicle(value: Vehicle) {
    this._information.vehicle = value;
  }
}
