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
  songs: Song[];
  myData: SafeHtml;
  constructor(private songService:SongService,private router: Router) { }

  ngOnInit() {
  }
  submitUserSearch(form:NgForm){
    this.songService.getUser().subscribe((data: User[])=>{
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

  activate(theID, form:NgForm){
    console.log("Activate")
    this.songService.userUrl ="/"+theID;
    this.songService.activate(form.value).subscribe((res) => {
    console.log("Updated!");
    this.myData = "Activated";

    });
  }

  deactivate(theID, form:NgForm){
    console.log("Deactivate")
    this.songService.userUrl ="/"+theID;
    this.songService.deactivate(form.value).subscribe((res) => {
    console.log("Updated!");
    this.myData = "Deactivate";

    });
  }

  submitSongsSearch(form:NgForm){
    console.log(form.value.songTitle);
    this.songService.queryUrl = "?songTitle=" + form.value.songTitle;
    this.songService.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
     })
    }
    makeHidden(theID, form:NgForm){
      this.songService.userUrl ="/"+theID;
      this.songService.makeHidden(form.value).subscribe((res) => {
      console.log("Hidden!");
      this.myData = "Hidden!";
  
      });
    }
    makeUnHidden(theID, form:NgForm){
      this.songService.userUrl ="/"+theID;
      this.songService.unHide(form.value).subscribe((res) => {
      console.log("Shown!");
      this.myData = "Shown!";
      });
    }
    

}
