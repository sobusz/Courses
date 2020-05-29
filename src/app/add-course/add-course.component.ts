import { CourseService } from '../course.service';
import { Course } from '../course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  submitted = false;

  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  save() {
    this.courseService.addCourse(this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }
}