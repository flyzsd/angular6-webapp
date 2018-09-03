import {Component, OnInit} from '@angular/core';
import '@web-components/simple-counter';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss']
})
export class FancyCardComponent implements OnInit {
  min = 0;
  max = 10;
  step = 2;

  constructor() {
  }

  ngOnInit() {
    const arr = [1, 2];
    arr.forEach((value, index, array) => {
      console.log(`${index} = ${value}`);
    });
  }

  handleMaxReached() {
    alert('max reached');
  }

  handleMinReached() {
    alert('min reached');
  }

}
