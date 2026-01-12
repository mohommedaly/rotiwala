import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from './auth.service'; // Example service
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: ApiService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isLoggedIn()) { // Check if the user is logged in
      return true;
    } else {
      this.router.navigate(['']); // Redirect to login page
      return false;
    }
  }
}
