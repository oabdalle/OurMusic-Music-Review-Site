import { Component, OnInit } from '@angular/core';
import {SongService} from '../song.service';
import {User} from '../song.model';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgForm} from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myData: SafeHtml;
  constructor(private songService:SongService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log("Attempting creation");
    console.log(form.value)
    this.songService.createUser(form.value).subscribe((res) => {
      console.log("Created User");
      console.log(res);
      localStorage.setItem('token', res.token);
    },
    (err) => this.myData = err.error);
    //this.router.navigate(['/']);
  }
}
