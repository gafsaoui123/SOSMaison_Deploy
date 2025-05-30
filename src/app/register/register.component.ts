import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService , private router:Router ) { }

  
  register(registerForm: NgForm) {
    console.log('Registration form submitted');
    console.log(registerForm.value);
    this.userService.register(registerForm.value).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Navigate to login page after successful registration
        // Optionally, you can reset the form or navigate to another page
        registerForm.reset();
      },
      error => {
        console.error('Registration failed', error);
        // Handle the error appropriately, e.g., show a message to the user
      }
    );
  }


}
