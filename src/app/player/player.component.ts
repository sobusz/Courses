import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserModule } from '@angular/platform-browser';
import { Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  id: number;
  course: Course;
  imports:[YouTubePlayerModule,BrowserModule,]

  constructor(private route: ActivatedRoute,private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];
    
    this.courseService.watchCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));

      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  list(){
    this.router.navigate(['courses']);
  }

}
