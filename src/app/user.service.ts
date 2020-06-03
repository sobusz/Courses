import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:44358/api/users';

  constructor(private http: HttpClient) { }

  // getCourse(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  register(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/authenticate`, user);
  }

  // updateCourse(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteCourse(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getCoursesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }
}
