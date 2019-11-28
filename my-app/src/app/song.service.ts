import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  readonly gUrl = 'http://localhost:8080/api/open/songs';
  readonly bUrl = 'http://localhost:8080/api/open/search';
  constructor(private http: HttpClient) { }
  getSongs(){
    return this.http.get(this.gUrl);
  }
   getSearch(){
       return this.http.get(this.bUrl)
   }
}
