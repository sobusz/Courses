import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    CourseListComponent,
    UpdateCourseComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
