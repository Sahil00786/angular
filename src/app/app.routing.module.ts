import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseService } from './course.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent, LoginComponent],
  providers: [CourseService],
  bootstrap: [],
})
export class AppModule {}
