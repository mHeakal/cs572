import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service' 
@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!.. 
      Lazy Component
    </p>
    <div>
    <ul> 
    <li *ngFor="let item of data"> <a [routerLink]="['details',item.login.uuid]"> {{fullName(item)}} </a> </li> 
    </ul>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private data;
  constructor( private dataService: DataService) { 
  }

  ngOnInit() {
   this.data = this.dataService.getCachedData().results;
  }

  fullName(obj){
    console.log(name)
    return obj.name.first+ ' ' +obj.name.last
  }

}
