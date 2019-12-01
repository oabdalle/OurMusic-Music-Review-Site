import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeysearchComponent} from './keysearch/keysearch.component';
import {SonglistComponent} from './songlist/songlist.component'
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SpecialComponent} from './special/special.component'
import {AuthGuard} from './auth.guard';
import {ManagerguardGuard} from './managerguard.guard';
import {RgeneratorComponent} from './rgenerator/rgenerator.component';
import {SgeneratorComponent} from './sgenerator/sgenerator.component';
import {SrgeneratorComponent} from './srgenerator/srgenerator.component';
import {ManagerComponent} from './manager/manager.component';
const routes: Routes = [
  {path: 'songlist', component:SonglistComponent},
  {path: 'keysearch', component: KeysearchComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'special', component: SpecialComponent, canActivate: [AuthGuard]},
  {path: 'createreview', component: RgeneratorComponent, canActivate: [AuthGuard]},
  {path: 'createsong', component: SgeneratorComponent, canActivate: [AuthGuard]},
  {path: 'createboth', component: SrgeneratorComponent, canActivate: [AuthGuard]},
  {path: 'manager', component: ManagerComponent, canActivate: [ManagerguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
