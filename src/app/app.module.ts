import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/Layout/login/login.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SignupComponent } from '../app/Layout/signup/signup.component';
import { reduceState, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { state } from '@angular/animations';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './customer/customer.reducer';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DataService } from './common/data.service';
import { ArtistsComponent } from './Artists/artists.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { LogformComponent } from './common/logform/logform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    UnauthorizedComponent,
    ArtistsComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    LogformComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
