import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, Review} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sgenerator',
  templateUrl: './sgenerator.component.html',
  styleUrls: ['./sgenerator.component.scss']
})
export class SgeneratorComponent implements OnInit {
  myData: SafeHtml;
  constructor(public songservice: SongService) { }

  ngOnInit() {
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
  
    //this.router.navigate(['/']);
    }
  }
}
