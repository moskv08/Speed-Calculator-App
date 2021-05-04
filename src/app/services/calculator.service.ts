import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private travelTime: string;

  constructor() { }

  calculateTravelTime(speed: number, distance: number) {
    // s = v · t + s0 -> t = s / v
    // traveltime (t) = distance (m) / speed (m/s)

    // Speed in meter/seconds
    let s = (speed * 1000) / 3600;
    // Distance in meter
    let d = distance * 1000;
    // Travel time in minutes
    let t = (d / s);

    this.travelTime = this.getTimeStamp(t);

    return this.travelTime;
  }

  private getTimeStamp(raw: number) {

    //let ts = seconds;
    let h = Math.floor(raw / 3600);
    raw %= 3600;

    let m = Math.floor(raw / 60);
    let s = Math.floor(raw % 60);

    // If you want strings with leading zeroes:
    let result = String(h).padStart(2, "0") + "h:" + String(m).padStart(2, "0") +  "m:" + String(s).padStart(2, "0") + "s";

    return result;
  }

}
