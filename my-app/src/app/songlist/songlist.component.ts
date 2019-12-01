import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
// import { SearchService } from './search.service';
 //import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SonglistComponent implements OnInit {
  songs = new MatTableDataSource<Song>();
  displayedColumns:ReadonlyArray<String> =  ['songTitle'] //, 'artist', 'album', 'year', 'comment', 'genre', 'avgRating', 'numReviews', 'numRating'];
  constructor(private songservice: SongService, private router: Router ) { }

  ngOnInit() {
   this.fetchSongs();
  }

  fetchSongs(){
    this.songservice.getSongs().subscribe((data: Song[])=>{
      this.songs.data = data;
      console.log('Data requested');
      console.log(this.songs);
     })
  }
}
