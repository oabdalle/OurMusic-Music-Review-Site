import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
// import { SearchService } from './search.service';
 //import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {

songs: Song[];
displayColumns = ['songTitle', 'artist', 'album', 'year', 'comment', 'genre', 'avgRating', 'numReviews', 'numRating'];
  constructor(private songservice: SongService, private router: Router ) { }

  ngOnInit() {
   this.fetchSongs();
  }

  fetchSongs(){
    this.songservice.getSongs().subscribe((data: Song[])=>{
        this.songs = data;
        console.log('Data requested');
        console.log(this.songs);
       })
  }
}
