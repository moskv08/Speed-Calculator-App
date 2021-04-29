import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private travelTime: number;

  constructor() { }

  calculateTravelTime(speed: number, distance: number){
    // Speed (m/s) = travel time (s) / distance (m)
    // s = v · t + s0 -> t = s / v

    // Speed in meter/seconds
    let v = (speed * 1000) / 3600;
    // Distance in meter
    let s = distance * 1000;
    // Travel time in minutes
    this.travelTime = (s / v) / 60;

    // this.travelTime = (Math.round((s / v) / 60)).toFixed(2);
    return this.travelTime;
  }
}
