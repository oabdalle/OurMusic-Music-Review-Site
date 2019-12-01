import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SongService} from './song.service'
@Injectable({
  providedIn: 'root'
})
export class ManagerguardGuard implements CanActivate {
  constructor(private _authService: SongService, private _router: Router ){}
  canActivate(){
    if(this._authService.adminLogged()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
  }
  
}
