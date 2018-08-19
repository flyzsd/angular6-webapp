import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss']
})
export class FancyCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const arr = [1, 2];
    arr.forEach((value, index, array) => {
      console.log(`${index} = ${value}`);
    });
  }

}
