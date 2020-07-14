import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output('srcIntervalFired') intervalFired = new EventEmitter<number>();
  myInterval;
  lastNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartTheGame() {
    console.log('the game start')
    this.myInterval = setInterval( () => {
    this.lastNumber = this.lastNumber + 1;
    this.intervalFired.emit(this.lastNumber);
      
    },1000);
  }

  onStopTheGame() {
    console.log('the game stop')
    clearInterval(this.myInterval);
  }
  
}
