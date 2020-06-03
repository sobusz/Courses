import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courses';
  term: string;

  constructor(){
    document.body.style.background = '#ecf0f1';
  }
}
