import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  constructor() { 
    this.counterValue = 0;
  }
  ngOnInit() {
  }
  inc(){
    this.counterValue++;
    return false;
  }
  dec(){
    if(this.counterValue > 0)
    this.counterValue--;
    return false;
  }
}
