import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';


export class admin implements CanActivate{

  constructor(private login:LoginService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.login.isLoggedIn() && this.login.getUserRole()=='Admin'){
      return true;
    }
    // this.router.navigateByUrl("/login");
    return false;
  }
  
}
export const adminGuard: CanActivateFn = (route, state) => {
  return true;
};
