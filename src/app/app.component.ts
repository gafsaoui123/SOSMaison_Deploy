import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SOSh';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenHeaderRoutes = ['/forbidden', '/login','/register','/emergency']; // Add other routes you want to hide the header on
        this.showHeader = !hiddenHeaderRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
