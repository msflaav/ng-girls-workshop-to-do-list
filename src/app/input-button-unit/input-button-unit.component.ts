import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
 10/5 =  {{ divide (10,5)}}
  

  {{title}}
  
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {
title = 'Hello World';
 divide(numerator,denominator) {console.log (this.title)
  return numerator / denominator;
  
}

}
