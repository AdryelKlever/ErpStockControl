import { Injectable } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private userSerice: UserService, private router: Router) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (!this.userSerice.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }

      this.userSerice.isLoggedIn();
      return true;
  }
}
