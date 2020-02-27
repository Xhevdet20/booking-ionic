import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) {}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.userIsAuthenticated){
        this.router.navigateByUrl('/auth');
      }
      return this.authService.userIsAuthenticated;
  }
}
