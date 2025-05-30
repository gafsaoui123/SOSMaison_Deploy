import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root' 
})
export class UserService {

  PATH_OF_API ="http://localhost:9090";
  
  requestHeader = new HttpHeaders(
    {"NO-AUTH":"True"}
  )
  constructor(private httpclient: HttpClient, private userAuthService: UserAuthService) { }


  


  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public login(loginData: { userName: string; userPassword: string }): Observable<any>{
    return this.httpclient.post(this.PATH_OF_API + "/authenticate",loginData,{ headers: this.requestHeader});
  }

  public register(registerData: {
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPhoneNumber: string;
  userPassword: string;
}): Observable<any> {

  return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', registerData, {
    headers: this.requestHeader
  });
}






  
  public roleMatch(allowedRoles: any[]): boolean {
    // Retrieve user roles from the service
    const userRoles: any[] = this.userAuthService.getRoles();
    
    // If there are no user roles, there's no match.
    if (!userRoles || userRoles.length === 0) {
    return false;
    }
    
    // Loop through each user role and check against allowedRoles.
    for (let i = 0; i < userRoles.length; i++) {
    for (let j = 0; j < allowedRoles.length; j++) {
    if (userRoles[i].roleName === allowedRoles[j]) {
    return true; // A matching role is found.
    }
    }
    }
    
    // No match was found after checking all roles.
    return false;
    }


    




}
