import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/Layout/login/login.component';
import { DetailsComponent } from './details/details.component';
import { SongsComponent } from './songs/songs.component';
import { HttpClientModule } from '@angular/common/http';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ThemesComponent } from './themes/themes.component';
import { SignupComponent } from '../app/Layout/signup/signup.component';
import { reduceState, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { state } from '@angular/animations';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './customer/customer.reducer';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    SongsComponent,
    UnauthorizedComponent,
    ThemesComponent,
    HeaderComponent,
    SignupComponent,
    SharedComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
