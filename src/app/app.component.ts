import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
       routerLink="/login">Login</a> |

    <a routerLinkActive="active" 
       routerLink="/home">Home</a> | 

    <a routerLinkActive="active" 
      routerLink="/catalog">Catalog</a> 
      
  </div>
  `,
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
    console.log(this.logInForm);
  }
}
