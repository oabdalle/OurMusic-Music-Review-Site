import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SongService} from './song.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: SongService, private _router: Router ){}
  canActivate(): boolean{
    if(this._authService.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
  }
  
}
