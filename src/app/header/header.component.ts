import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private userAuthService: UserAuthService, public userService: UserService , private router: Router){}
  
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

  public isAdmin() {
    return this.userAuthService.isAdmin();
   }

   public isUser() {
    return this.userAuthService.isUser();
   }

  }


