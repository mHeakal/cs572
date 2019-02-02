import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>App Component</h1>
  <a [routerLink]="['/']">Home</a>
  <br />
  <a [routerLink]="['users']">Users</a>
  <br />
  <!-- <a [routerLink]="['users','details']">User Details</a> -->
  <router-outlet></router-outlet>
`,
  styles: [],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOnlineDate().subscribe(
      response => {
        localStorage.setItem('data', JSON.stringify(response));
      },
      error => console.error(error)
    )
  }
}
