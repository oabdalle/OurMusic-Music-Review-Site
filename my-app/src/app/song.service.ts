import {ErrorHandler, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song, User, Review} from './song.model';
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
  reviews: Review[];
  selectedReview: Review|{}={}; 
  song:Song[];
  selectedSong: Song|{}={}; 
  queryUrl: string;
  reviewUrl: string;
  userUrl: string;
  readonly gUrl = 'http://localhost:8080/api/open/songs';
  readonly bUrl = 'http://localhost:8080/api/open/search';
  readonly pUrl = 'http://localhost:8080/api/user/login';
  readonly qUrl = 'http://localhost:8080/api/user/register';
  readonly rUrl = 'http://localhost:8080/api/open/review';
  readonly r2Url = 'http://localhost:8080/api/secure/review';
  readonly r3Url = 'http://localhost:8080/api/secure/song';
  readonly r4Url = 'http://localhost:8080/api/open/user';
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
   adminLogged(){
    return !!localStorage.getItem('managerToken');
   }
   getReviews(){
    return this.http.get(this.rUrl + this.reviewUrl);
   }
   postReview(rv:Review){
     return this.http.post(this.r2Url + this.reviewUrl, rv);
    }
    postSong(sg:Song){
      return this.http.post(this.r3Url, sg);
    }
    getUser(){
      return this.http.get(this.r4Url);
    }
    promoteUser(us:User){
      return this.http.post(this.r4Url+this.userUrl, us);
    }
  //  postBook(bk:Book){
  //   return this._htpp.post(this.bUrl, bk)
  //   }
}
