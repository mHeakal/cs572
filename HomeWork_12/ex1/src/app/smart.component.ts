import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul>
      <app-dumb *ngFor="let value of arr" [data]="value"></app-dumb>
    </ul>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  public arr = ['CS472', 'CS572', 'CS435'];
  constructor() {}
  ngOnInit() {}
}
