import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
 
 

getTrendingMovies():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row1.json')
}
getrow():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row2.json')
}
getrow2():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row3.json')
}
getrow3():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row4.json')
}
getrow5():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row5.json')
}
getrow6():Observable<Movie[]>{
  return this.http.get<Movie[]>('http://localhost:4200/assets/data/row6.json')
}
}
