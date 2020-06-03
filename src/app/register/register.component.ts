import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  register(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.register(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  // gotoList() {
  //   this.router.navigate(['/users']);
  // }
}
