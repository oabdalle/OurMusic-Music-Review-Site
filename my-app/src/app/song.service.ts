import {ErrorHandler, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song, User, Review, Policy, DMCA, Log} from './song.model';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import {ErrorObservable} from 'rxjs/observable/ErrorObservable'
import {throwError} from 'rxjs'
import {Router} from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SongService {
  myChanges: SafeHtml;
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
  policys: Policy[];
  dmcas: DMCA[];
  logUrl: string;
  readonly gUrl = 'http://localhost:8080/api/open/songs';
  readonly bUrl = 'http://localhost:8080/api/open/search';
  readonly pUrl = 'http://localhost:8080/api/user/login';
  readonly qUrl = 'http://localhost:8080/api/user/register';
  readonly rUrl = 'http://localhost:8080/api/open/review';
  readonly r2Url = 'http://localhost:8080/api/secure/review';
  readonly r3Url = 'http://localhost:8080/api/secure/song';
  readonly r4Url = 'http://localhost:8080/api/open/user';
  readonly r5url = 'http://localhost:8080/api/open/deactivateuser';
  readonly r6url = 'http://localhost:8080/api/open/activateuser';
  readonly r7url = 'http://localhost:8080/api/open/makehidden';
  readonly r8url = 'http://localhost:8080/api/open/unhidden';
  readonly r9url = 'http://localhost:8080/api/admin/policy';
  readonly r10url = 'http://localhost:8080/api/admin/dmca';
  readonly r11url = 'http://localhost:8080/api/admin/logs';
  readonly r12url = 'http://localhost:8080/api/admin/takedown';
  readonly r13url = 'http://localhost:8080/api/admin/removetakedown';
  readonly r14url = 'http://localhost:8080/api/admin/dispute';
  readonly r15url = 'http://localhost:8080/api/admin/removedispute';
  readonly r16url = 'http://localhost:8080/api/admin/notice';
  readonly r17url = 'http://localhost:8080/api/admin/removenotice';
  readonly tUrl = 'http://localhost:8080/api/open/adminsongs';
  constructor(private http: HttpClient, private router: Router) { 
  }
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
    activate(us:User){
      return this.http.post(this.r6url+this.userUrl, us);
    }
    deactivate(us:User){
      return this.http.post(this.r5url+this.userUrl, us);
    }
    makeHidden(sg:Song){
      return this.http.post(this.r7url+this.userUrl, sg);
    }
    unHide(sg:Song){
      return this.http.post(this.r8url+this.userUrl, sg);
    }
    makePolicy(pc:Policy){
      return this.http.post(this.r9url, pc);
    }
    showPolicy(){
      return this.http.get(this.r9url);
    }
    makeDMCA(dc:DMCA){
      return this.http.post(this.r10url, dc);
    }
    showDMCA(){
      return this.http.get(this.r10url);
    }
    getLogs(){
      return this.http.get(this.r11url);
    }
    makeTakedown(lg:Log){
      return this.http.post(this.r12url+this.logUrl, lg);
    }
    removeTakedown(lg:Log){
      return this.http.post(this.r13url+this.logUrl, lg);
    }
    makeNotice(lg:Log){
      return this.http.post(this.r16url+this.logUrl, lg);
    }
    removeNotice(lg:Log){
      return this.http.post(this.r17url+this.logUrl, lg);
    }
    makeDispute(lg:Log){
      return this.http.post(this.r14url+this.logUrl, lg);
    }
    removeDispute(lg:Log){
      return this.http.post(this.r15url+this.logUrl, lg);
    }
    getAllSongs(){
      return this.http.get(this.tUrl);
    }

  //  postBook(bk:Book){
  //   return this._htpp.post(this.bUrl, bk)
  //   }
}
