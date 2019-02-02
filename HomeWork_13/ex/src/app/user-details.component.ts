import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from "rxjs";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: 'app-user-details',
  template: `
    <p>
      user-details works! 
      <br />
      {{user.login.uuid}}
    </p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  private uuid;
  private user;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    route.params.subscribe(p => {
      this.uuid = p['uuid'];
    });
  }

  ngOnInit() {
    this.user = this.dataService.getUserByUUID(this.uuid)[0];
    console.log(this.user)
  }
}

@Injectable()
export class MyActivateGuard implements CanActivate {
  constructor(private r: Router, private dataservice: DataService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('res', this.dataservice.getUserByUUID(route.params.uuid))
    if (this.dataservice.getUserByUUID(route.params.uuid).length > 0) {
      return true
    } else {
      this.r.navigate([''])
    }
    return false;
  }
}
