import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  template: `
    <div>
      <h1>Login</h1>
      <form [formGroup]="logInForm" (ngSubmit)="loginUser()">
      <input type="text" placeholder="Enter Name" formControlName="user" />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        formControlName="password"
      />
      <br />
      <br />
      <button>Log In</button>
    </form>
    </div>
  `,
})
export class LoginComponent {}
