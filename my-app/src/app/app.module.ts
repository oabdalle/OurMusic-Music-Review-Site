import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SonglistComponent } from './songlist/songlist.component';
import { KeysearchComponent } from './keysearch/keysearch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {SongService} from './song.service';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent,
    KeysearchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [SongService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
