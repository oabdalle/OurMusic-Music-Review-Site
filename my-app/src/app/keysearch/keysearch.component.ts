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
   console.log(formData.value);
   console.log(formData)

   this.songservice.queryUrl = "?songTitle=" + formData.value.songTitle;
   this.songservice.getSearch().subscribe((data: Song[])=>{
           this.songs = data;
           console.log(this.songs);
    })
  }
  submitSearchTwo(event,formData){
    console.log(event);
    console.log(formData.value);
    console.log(formData)
 
    this.songservice.queryUrl = "?artist=" + formData.value.artist;
    this.songservice.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
            console.log(this.songs);
     })
   }
   submitSearchThree(event,formData){
    console.log(event);
    console.log(formData.value);
    console.log(formData)
 
    this.songservice.queryUrl = "?album=" + formData.value.album;
    this.songservice.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
            console.log(this.songs);
     })
   }
   submitSearchFour(event,formData){
    console.log(event);
    console.log(formData.value);
    console.log(formData)
 
    this.songservice.queryUrl = "?year=" + formData.value.year;
    this.songservice.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
            console.log(this.songs);
     })
   }
   submitSearchFive(event,formData){
    console.log(event);
    console.log(formData.value);
    console.log(formData)
 
    this.songservice.queryUrl = "?comment=" + formData.value.comment;
    this.songservice.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
            console.log(this.songs);
     })
   }
   submitSearchSix(event,formData){
    console.log(event);
    console.log(formData.value);
    console.log(formData)
 
    this.songservice.queryUrl = "?genre=" + formData.value.genre;
    this.songservice.getSearch().subscribe((data: Song[])=>{
            this.songs = data;
            console.log(this.songs);
     })
   }
  // if(formData == "artistForm"){
  //   this.songservice.queryUrl = "?artist=" + formData.value.songTitle;
  //   this.songservice.getSearch().subscribe((data: Song[])=>{
  //           this.songs = data;
  //           console.log(this.songs);
  //    })
  //  }
  // }
}
