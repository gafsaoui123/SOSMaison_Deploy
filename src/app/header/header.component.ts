import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

   public userImages: string[] = [
    'https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg',
    'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4350/image/s768x1300/AdobeStock_123823873_433578_reduced.jpg',
    'https://headlines.peta.org/wp-content/uploads/2020/12/ACOM-VIV-Rabbit-Bunny-satyabrata-sm-u_kMWN-BWyU-unsplash-2-scaled.jpeg',
    'https://s45055.pcdn.co/news/wp-content/uploads/sites/37/Coyote-animal-sentience-research.jpg', 
    'https://c02.purpledshub.com/uploads/sites/48/2021/04/what-are-stars-explained.jpg',
  ];

  public getRandomUserImage(): string {
    const randomIndex = Math.floor(Math.random() * this.userImages.length);
    return this.userImages[randomIndex];
  }

  ngOnInit(): void {
    if (this.userService.roleMatch(['User']) && !this.userAuthService.getUserImage()) {
      const randomImage = this.getRandomUserImage();
      this.userAuthService.setUserImage(randomImage);
    }
  }

  public getUserImage(): string {
    return this.userAuthService.getUserImage() || this.getRandomUserImage();
  }
}


