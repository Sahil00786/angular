import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, HelloComponent, CourseComponent],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
