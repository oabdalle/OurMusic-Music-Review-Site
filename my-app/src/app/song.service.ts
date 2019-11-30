import {ErrorHandler, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './song.model';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import {ErrorObservable} from 'rxjs/observable/ErrorObservable'
import {throwError} from 'rxjs'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  myTest: any;
  users:User[];
  selectedUser:User|{}={}; 
  queryUrl: string;
  readonly gUrl = 'http://localhost:8080/api/open/songs';
  readonly bUrl = 'http://localhost:8080/api/open/search';
  readonly pUrl = 'http://localhost:8080/api/user/login';
  readonly qUrl = 'http://localhost:8080/api/user/register';
  constructor(private http: HttpClient, private router: Router) { }
  getSongs(){
    return this.http.get(this.gUrl);
  }
   getSearch(){
       return this.http.get(this.bUrl + this.queryUrl);
   }
   postUser(us:User){
     return this.http.post<any>(this.pUrl,us);
   }
   createUser(us:User){
    return this.http.post<any>(this.qUrl,us);
   }

   loggedIn(){
     return !!localStorage.getItem('token');
   }
  //  postBook(bk:Book){
  //   return this._htpp.post(this.bUrl, bk)
  //   }
}
