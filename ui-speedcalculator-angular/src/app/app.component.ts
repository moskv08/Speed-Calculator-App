import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-speedcalculator-angular';
  speed: string;

  constructor() {
    this.speed = '50'
  }

  setSpeedDisplay(){
    
  }

}
