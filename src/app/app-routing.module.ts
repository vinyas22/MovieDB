import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'movies',component:MoviesComponent},
  {path:'tv',component:TvComponent},
  {path:'genre',component:GenreComponent},
  {path:'country',component:CountryComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
