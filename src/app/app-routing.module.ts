import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'add', component: AddCourseComponent },
  { path: 'update/:id', component: UpdateCourseComponent },
  { path: 'details/:id', component: CourseDetailsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'authenticate', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'player/:id', component: PlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }