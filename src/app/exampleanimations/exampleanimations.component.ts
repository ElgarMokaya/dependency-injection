import { Component } from '@angular/core';import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-exampleanimations',
  templateUrl: './exampleanimations.component.html',
  styleUrls: ['./exampleanimations.component.css'],
  animations:[
    trigger('toggleBox', [
      // ...
      state('open', style({
        height: '200px',
        backgroundColor: '#061ff0'
      })),
      state('closed', style({
        height: '70px',
        backgroundColor: '#E91E63',
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class ExampleanimationsComponent {

  isOpen: boolean = false;
  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  } 
}
