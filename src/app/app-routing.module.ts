import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from '../app/Layout/login/login.component';
import { AuthguardService } from './common.services/authguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ThemesComponent } from './themes/themes.component';
import { SignupComponent } from '../app/Layout/signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'details', component: DetailsComponent, canActivate: [AuthguardService] },
  { path: 'songs', component: SongsComponent,  },
  { path: 'themes', component: ThemesComponent, },
  { path: 'signup', component: SignupComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
