import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  evenNumbers = [];
  oddNumbers = [];
  allNumber = false;
  onlyOdd = false;
  value = 20;
  ngOnInit () {
    this.odd()
  }

  odd(){
    this.numbers.map(x => {
      if(x%2 == 0) {
        this.evenNumbers.push(x)
      }else {
        this.oddNumbers.push(x)
      }
    });
  }
}
