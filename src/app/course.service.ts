import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'https://localhost:44358/api/courses';

  constructor(private http: HttpClient) { }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addCourse(course: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, course);
  }

  updateCourse(id: number, course: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  watchCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}