import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "../services/user-auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userAuthService: UserAuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip auth if 'No-Auth' is set to 'True'
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    console.log('Request to:', req.url);
    console.log('Authorization Header:', req.headers.get('Authorization'));

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('Error status:', err.status);
        if (err.status === 401) {
          this.router.navigate(['/forbidden']);
        } else if (err.status === 403) {
          this.router.navigate(['/login']);
        }
        return throwError(() => err);
      })
    );
  }
}
