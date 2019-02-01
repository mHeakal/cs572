import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <li>{{ data }}</li>
  `,
  styleUrls: []
})
export class DumbComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
