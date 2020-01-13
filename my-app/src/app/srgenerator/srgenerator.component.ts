import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, Review} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-srgenerator',
  templateUrl: './srgenerator.component.html',
  styleUrls: ['./srgenerator.component.scss']
})
export class SrgeneratorComponent implements OnInit {
flag: boolean;
subFlag:boolean
myData: SafeHtml;
hbb:String;
section: any = [];
  constructor(public songservice: SongService) { 
    this.flag = false;
    this.subFlag = true;
  }

  ngOnInit() {
  }
showReview(){
  this.flag = true;
  this.subFlag = false;
}
onSubmit(form:NgForm){
  if(!form.value.songTitle){
    this.myData = "Please enter a song";
    }
  else if(!form.value.artist){
    this.myData = "Please enter an artist";
    }
  else{
    console.log(form.value.songTitle)
    this.songservice.postSong(form.value).subscribe((res) => {
      console.log(res);
      });
  
    }
}
onSubmit2(reviewForm:NgForm, songForm:NgForm){


  if(!songForm.value.songTitle){
    this.myData = "Please enter a song";
    }
  else if(!songForm.value.artist){
    this.myData = "Please enter an artist";
    }
  else{
    this.songservice.postSong(songForm.value).subscribe((res) => {
      this.hbb = res.toString();
      this.songservice.reviewUrl = "/"+this.hbb;
      this.songservice.postReview(reviewForm.value).subscribe((res) => {
        console.log("We finally did it!")
        });
      });
      
    }

}
}
