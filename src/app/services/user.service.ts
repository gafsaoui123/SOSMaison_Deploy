import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "https://backgafsaoui.onrender.com";
  PATH_OF_API_LOCAL = "http://localhost:9090";

  requestHeader = new HttpHeaders({
    "NO-AUTH": "True"
  });

  constructor(private httpclient: HttpClient, private userAuthService: UserAuthService) {}

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API_LOCAL + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API_LOCAL + '/forAdmin', {
      responseType: 'text',
    });
  }

  public login(loginData: { userName: string; userPassword: string }): Observable<any> {
    return this.httpclient.post(this.PATH_OF_API_LOCAL + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public register(registerData: {
    userName: string;
    userFirstName: string;
    userLastName: string;
    userPhoneNumber: string;
    userPassword: string;
  }): Observable<any> {
    return this.httpclient.post(this.PATH_OF_API_LOCAL + '/registerNewUser', registerData, {
      headers: this.requestHeader
    });
  }

  public roleMatch(allowedRoles: any[]): boolean {
    const userRoles: any[] = this.userAuthService.getRoles();
    if (!userRoles || userRoles.length === 0) {
      return false;
    }
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles[i].roleName === allowedRoles[j]) {
          return true;
        }
      }
    }
    return false;
  }

  public getUsersConnectedToday(): Observable<number> {
    return this.httpclient.get<number>(this.PATH_OF_API_LOCAL + '/users/connected-today', {
      headers: this.getAuthHeaders()
    });
  }

  

  public getUserConnections(): Observable<Record<string, number>> {
    return this.httpclient.get<Record<string, number>>(`${this.PATH_OF_API_LOCAL}/users/connections`, {
      headers: this.getAuthHeaders()
    });
  }

  

  public getUserCategories(): Observable<Record<string, number>> {
  return this.httpclient.get<Record<string, number>>(`${this.PATH_OF_API_LOCAL}/users/categories`, {
    headers: this.getAuthHeaders()
  });
}

  // user.service.ts (add this method)
public getAllUsers(): Observable<any[]> {
  return this.httpclient.get<any[]>(this.PATH_OF_API_LOCAL + '/users', {
    headers: this.getAuthHeaders()
  });
}

  private getAuthHeaders(): HttpHeaders {
    const token = this.userAuthService.getToken();
    if (token) {
      return new HttpHeaders({
        "Authorization": `Bearer ${token}`
      });
    }
    return this.requestHeader;
  }
}