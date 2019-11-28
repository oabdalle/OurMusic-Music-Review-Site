import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeysearchComponent} from './keysearch/keysearch.component';
import {SonglistComponent} from './songlist/songlist.component'
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'songlist', component:SonglistComponent},
  {path: 'keysearch', component: KeysearchComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
