import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {User} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
myData: SafeHtml;
  constructor(private songService:SongService,private router: Router) { 
    
  }

  ngOnInit() {
  this.songService.myTest = "Hello";
  }

  onSubmit(form:NgForm){
    // console.log("Attempting Login!");
    if(typeof form.value.email == 'undefined')
    {
      this.myData = "Please enter an email"; 
    }
    else if(typeof form.value.password == 'undefined'){
      this.myData = "Please enter a password"; 
    }
    else{
    this.songService.postUser(form.value).subscribe((res) => {
      console.log("Please go here");
      console.log(res['user1']);
      // console.log(res['token']);
      localStorage.setItem('token', res['token']);
      if(res['user2'] == false){
        this.router.navigate(['/sorry']);
      }
      else if(res['user1'] == true){
        localStorage.setItem('managerToken', "anything");
        this.router.navigate(['/manager']);
      }
      else{
      this.router.navigate(['/special']);
      }
      },
      (err) => this.myData = err.error);
  }
    //this.router.navigate(['/']);
  }
  newSubmit(form:NgForm){
    // console.log("Attempting Login!");
    // console.log(form.value)
    // this.songService.postUser(form.value).subscribe((res) => {
    //   console.log(res);
    //   console.log("User saved!");
    // });
    this.router.navigate(['/register']);
  }
}
