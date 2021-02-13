import {Component, OnInit} from '@angular/core';
import {InformationService} from '../../services/information/information.service';
import {VehicleService} from '../../services/vehicle/vehicle.service';
import {Observable} from 'rxjs';
import {Vehicle} from '../../models/vehicle/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle;
  vehicles: Observable<any>;
  years: string[];
  makes: string[];
  models: string[];
  trims: string[];

  constructor(private informationService: InformationService, private vehicleService: VehicleService) {
    this.vehicle = this.informationService.vehicle;
    this.vehicles = this.vehicleService.vehicles;
  }

  ngOnInit(): void {
    this.setYears();
  }

  onYearsChange($event: string): void {
    this.setMakes($event);
  }

  onMakesChange($event: any): void {
    this.setModels($event);
  }

  onModelsChange($event: any): void {
    this.setTrims($event);
  }

  private setTrims(model: string): void {
    this.vehicleService.vehicles.subscribe(value => this.trims = value[this.vehicle.year][this.vehicle.make][model]);
  }

  private setModels(make: string): void {
    this.vehicleService.vehicles.subscribe(value => this.models = Object.keys(value[this.vehicle.year][make]));
  }

  private setMakes(year: string): void {
    this.vehicleService.vehicles.subscribe(value => this.makes = Object.keys(value[year]));
  }

  private setYears(): void {
    this.vehicleService.vehicles.subscribe(value => this.years = Object.keys(value));
  }
}
