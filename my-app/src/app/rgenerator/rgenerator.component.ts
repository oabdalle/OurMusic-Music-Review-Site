import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, Review} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-rgenerator',
  templateUrl: './rgenerator.component.html',
  styleUrls: ['./rgenerator.component.scss']
})
export class RgeneratorComponent implements OnInit {
  myData: SafeHtml;
  songs: Song[];
  reviews: Review[];
  section: any = [];
  constructor(public songservice: SongService) { }

  ngOnInit() {
  }
  submitSearchUnique(event,formData){
    console.log(formData.value.songTitle);
   this.songservice.queryUrl = "?songTitle=" + formData.value.songTitle;
   this.songservice.getSearch().subscribe((data: Song[])=>{
           this.songs = data;
    })
  }
  findReviews(stringy){
    console.log(stringy);
    this.songservice.reviewUrl = "/"+stringy;
}

   onSubmit(event, form:NgForm){
  
    this.songservice.postReview(form.value).subscribe((res) => {
      console.log(res);
    });
  }

}
