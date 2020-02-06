import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "./car";
import { Underwriter } from "./Underwriter";

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get<any>("assets/cars-small.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsMedium() {
    return this.http
      .get<any>("assets/cars-medium.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsLarge() {
    return this.http
      .get<any>("assets/cars-large.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsHuge() {
    return this.http
      .get<any>("assets/cars-huge.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getUnderwriter() {
    return this.http
      .get<any>("assets/unerwriter.json")
      .toPromise()
      .then(res => <Underwriter[]>res.data)
      .then(data => {
        return data;
      });
  }
}
