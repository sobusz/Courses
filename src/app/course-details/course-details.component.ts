import { Course } from '../course';
import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseListComponent } from '../course-list/course-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: number;
  course: Course;

  constructor(private route: ActivatedRoute,private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];
    
    this.courseService.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['courses']);
  }
}