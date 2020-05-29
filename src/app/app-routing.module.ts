import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  { path: 'add', component: AddCourseComponent },
  { path: 'update/:id', component: UpdateCourseComponent },
  { path: 'details/:id', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }