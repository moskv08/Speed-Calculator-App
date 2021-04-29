import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  distance: number;
  speed: number;
  travelTime: number;

  constructor(private service: CalculatorService) { 
    this.speed = 50;
    this.distance = 100;
    this.travelTime = 0;
  }

  ngOnInit(){ }

  setSpeed(speed: number) {
    try {
      this.speed = speed;
      this.travelTime = this.service.calculateTravelTime(this.speed, this.distance)
    } catch (error) {
      console.log(error);
    }
  }

  setDistance(distance: number) {
    try {
      this.distance = distance;
      this.travelTime = this.service.calculateTravelTime(this.speed, this.distance);
    } catch (error) {
      console.log(error);
    }
  }

}
