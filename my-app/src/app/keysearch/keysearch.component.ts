import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-keysearch',
  templateUrl: './keysearch.component.html',
  styleUrls: ['./keysearch.component.scss']
})
export class KeysearchComponent implements OnInit {
  songs: Song[];
  constructor(private songservice: SongService) { }

  ngOnInit() {
  }
  fetchSongs(){
    this.songservice.getSongs().subscribe((data: Song[])=>{
        this.songs = data;
        console.log('Data requested');
        console.log(this.songs);
       })
  }

  onSubmit(form:NgForm){
    console.log("Hi");
    }
}
