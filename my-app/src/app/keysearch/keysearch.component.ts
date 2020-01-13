import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, Review} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-keysearch',
  templateUrl: './keysearch.component.html',
  styleUrls: ['./keysearch.component.scss']
})
export class KeysearchComponent implements OnInit {
  myData: SafeHtml;
  songs: Song[];
  reviews: Review[];
  section: any = [];
  section1: any = [];
  constructor(public songservice: SongService) {
    songservice.queryUrl = "?songTitle="
   }
   

  ngOnInit() {
  }

  openSectionChecker(){
    
  }
  submitSearchUnique(event,formData){
    console.log(formData.value.songTitle);
   this.songservice.queryUrl = "?songTitle=" + formData.value.songTitle;
   this.songservice.getSearch().subscribe((data: Song[])=>{
           this.songs = data;
    })
  }
  submitSearchTwo(event,formData){
  
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
   findReviews(stringy){
     console.log(stringy);
     this.songservice.reviewUrl = "/"+stringy;
     this.songservice.getReviews().subscribe((data: Review[])=>{
      this.reviews = data;
      console.log(this.reviews);
    })

   }
}
