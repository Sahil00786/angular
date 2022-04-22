import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ getTitle() }}</h2>
              <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
              </ul>
  `,
})
export class CourseComponent {
  title = 'This is Course List.';
  courses;
  getTitle() {
    return this.title;
  }
  constructor(service: CourseService) {
    this.courses = service.getCourse();
  }
}
