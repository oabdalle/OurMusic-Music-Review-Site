import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, User, DMCA} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.scss']
})
export class DmcaComponent implements OnInit {
  mySecondData: SafeHtml;
  myThirdData: SafeHtml;
  constructor(private songService:SongService,private router: Router) { }

  ngOnInit() {
    this.songService.showDMCA().subscribe((data: DMCA[])=>{
      this.mySecondData= data[0].text;
     })
  }
  submitDMCA(form:NgForm){
    console.log("Yay!");
    if(localStorage.getItem('managerToken'))
    {
      this.songService.makeDMCA(form.value).subscribe((res) => {
        this.mySecondData= res.toString();
        });
    }
    else{
      this.myThirdData = "Not an admin!";
    }

  }

}
