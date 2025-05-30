import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) as string[] : [];
    }
    
    public setToken(jwtToken: string): void {
    localStorage.setItem('jwtToken', jwtToken);
    }
  
    // Instead of throwing an error, we return null if no token is found.
    // This is safer when using getToken() inside isLoggedIn() or other template checks.
    public getToken(): string | null {
    return localStorage.getItem('jwtToken');
    }
    
    public clear(): void {
    localStorage.clear();
    }
    
    public isLoggedIn(): boolean {
    // Check for the existence of a token and that there is at least one role.
    const token = localStorage.getItem('jwtToken');
    const roles = this.getRoles();
    return !!token && roles.length > 0;
    }

    public isAdmin() {
     const roles: any[] = this.getRoles();
     return roles[0].roleName === 'Admin';
    }

    public isUser() {
      const roles: any[] = this.getRoles();
      return roles[0].roleName === 'User';
     }

}
