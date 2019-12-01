import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, User} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  users: User[];
 // fruits: Array<any>;
  myData: SafeHtml;
  constructor(private songService:SongService,private router: Router) { }

  ngOnInit() {
  }
  submitUserSearch(form:NgForm){
    this.songService.getUser().subscribe((data: User[])=>{
      // console.log((form.value));
      // for(var i =0; i < data.length; i++){
      //   if(data[i].email == form.value.email){
      //     console.log(data[i]);
         
      //     this.users.push(data[i]);
      //   }
      // }
this.users = data;
})
}
  makeAdmin(theID, form:NgForm){
    console.log(form.value);
    this.songService.userUrl ="/"+theID;
 this.songService.promoteUser(form.value).subscribe((res) => {
   console.log("Updated!");
   this.myData = "Updated";

 });

}

}
