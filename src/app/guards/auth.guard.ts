import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, Route, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    return this.VerificarAcesso();
  }

  canLoad(route: Route
  ): Observable<boolean> | boolean {

    return this.VerificarAcesso();
    
  }

  private VerificarAcesso() {
    if(this.authService.usuarioEstaAutenticado())
      {
        return true;
      }
      this.route.navigate(['/login']);
      return false;
  }



}
