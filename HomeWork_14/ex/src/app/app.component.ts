import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>App Component</h1>
  <a [routerLink]="['/']">Login</a>
  <br />
  <a [routerLink]="['signup']">Signup</a>
  <br />
  <hr >
  <router-outlet></router-outlet>
`,
  styles: ['']
})
export class AppComponent {
  title = 'Sign Users';
}
