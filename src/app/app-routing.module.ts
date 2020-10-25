import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from '../app/Layout/login/login.component';
import { AuthguardService } from './common/authguard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SignupComponent } from '../app/Layout/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './Artists/artists.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'details', component: DetailsComponent, canActivate: [AuthguardService] },
  { path: 'artists', component: ArtistsComponent, },
  { path: 'signup', component: SignupComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
