import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-keysearch',
  templateUrl: './keysearch.component.html',
  styleUrls: ['./keysearch.component.scss']
})
export class KeysearchComponent implements OnInit {
  songs: Song[];
  constructor(public songservice: SongService) {
    songservice.queryUrl = "?songTitle="
   }

  ngOnInit() {
  }
  // fetchSongs(){
  //   this.songservice.getSongs().subscribe((data: Song[])=>{
  //       this.songs = data;
  //       console.log('Data requested');
  //       console.log(this.songs);
  //      })
  // }

  submitSearch(event,formData){
   console.log(event);
   console.log(formData.value.songTitle);
   this.songservice.queryUrl = "?songTitle=" + formData.value.songTitle;
   this.songservice.getSearch().subscribe((data: Song[])=>{
           this.songs = data;
           console.log(this.songs);
    })
  }
}
