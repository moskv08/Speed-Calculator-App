import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  distance: number;
  speed: number;

  constructor() { 
    this.speed = 50
    this.distance = 100
  }

  ngOnInit(){ }

  setSpeed(speed: number) {
    if(speed < 0 || speed < 150) {
      console.log('Something went wrong.')
    }

    this.speed = speed;

  }

  setDistance(distance: number) {
    this.distance = distance;
  }

}
