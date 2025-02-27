import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, User, Policy} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  mySecondData: SafeHtml;
  myThirdData: SafeHtml;
  constructor(private songService:SongService,private router: Router) { 
  }

  ngOnInit() {
    this.songService.showPolicy().subscribe((data: Policy[])=>{
      this.mySecondData= data[0].text;
     })
  }

  submitPrivacy(form:NgForm){
    console.log("Yay!");
    if(localStorage.getItem('managerToken'))
    {
      this.songService.makePolicy(form.value).subscribe((res) => {
        this.mySecondData= res.toString();
        });
    }
    else{
      this.myThirdData = "Not an admin!";
    }

  }

}
