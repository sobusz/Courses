import { Observable } from "rxjs";
import { CourseService } from "../course.service";
import { Course } from "../course";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  course: Observable<Course[]>;
  term: string;


  constructor(private courseService: CourseService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.course = this.courseService.getCoursesList();
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  courseDetails(id: number){
    this.router.navigate(['details', id]);
  }

  watchCourse(id: number){
    this.router.navigate(['player', id]);
  }

  updateCourse(id: number){
    this.router.navigate(['update', id]);
  }
}