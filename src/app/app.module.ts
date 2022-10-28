import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { GenreComponent } from './genre/genre.component';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvComponent,
    LoginComponent,
    GenreComponent,
    CountryComponent,
    ImageComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
