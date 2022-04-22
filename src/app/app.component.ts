import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  logInForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  loginUser() {
    console.log(this.logInForm.value);
  }
}
