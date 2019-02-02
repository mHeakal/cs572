import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { MyActivateGuard } from "./user-details.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: 'details/:uuid', component: UserDetailsComponent, canActivate: [MyActivateGuard] }
    ]
  },
];

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [MyActivateGuard]
})
export class UsersModule { }
