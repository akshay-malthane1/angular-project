import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SongsComponent } from './songs/songs.component';
import { LoginComponent } from './login/login.component'
import { AuthguardService } from './authguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ThemesComponent } from './themes/themes.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent, canActivate: [AuthguardService] },
  { path: 'songs', component: SongsComponent, canActivate: [AuthguardService] },
  { path: 'themes', component:ThemesComponent,},
  { path: 'signup', component:SignupComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
