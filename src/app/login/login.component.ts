import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService , private userAuthservice:UserAuthService , private router: Router){}

  ngOnInit(): void {
    
  }


  login(loginForm:NgForm){

    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthservice.setRoles(response.user.role);
        this.userAuthservice.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/showservice']);
        } else {
          this.router.navigate(['/home']);
        }

      },
      (error) => {
        console.log(error);
      }
      );
    }

}
