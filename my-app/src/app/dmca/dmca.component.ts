import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {Song, User, DMCA, Log} from '../song.model';
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
  songs: Song[];
  logs: Log[];
  constructor(private songService:SongService,private router: Router) { }

  ngOnInit() {
    this.fetchSongs();
    this.songService.showDMCA().subscribe((data: DMCA[])=>{
      this.mySecondData= data[0].text;
     })
  }

 
   fetchSongs(){
     this.songService.getSongs().subscribe((data: Song[])=>{
       this.songs= data;
       console.log('Data requested');
       console.log(this.songs);
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
  takedown(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.makeTakedown(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  removeTakedown(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.removeTakedown(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  recordNotice(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.makeNotice(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  removeNotice(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.removeNotice(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  dispute(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.makeDispute(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  removeDispute(id, logForm:NgForm){
    console.log(id);
    this.songService.logUrl = "/"+id;
    this.songService.removeDispute(logForm.value).subscribe((res) => {
       this.songService.getLogs().subscribe((data: Log[])=>{
      this.logs= data;
      console.log(data);
     })
      }); 
   
  }
  submitLog(logForm:NgForm){
    console.log("Does nothing");
  }



}
