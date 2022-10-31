import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 row:any
    trendingMovies:any
    constructor(private testserv:TestService, private http: HttpClient) { }
    
      ngOnInit(): void {
        this.getTrendingMovies()
        this.getrow()
    
      }
      getTrendingMovies(){
        this.http.get('http://localhost:4200/assets/data/row2.json').subscribe((movie)=>{
          this.trendingMovies=movie
          console.log(this.getTrendingMovies)
        })
          
}
getrow()   {this.http.get('http://localhost:4200/assets/data/row1.json').subscribe((movie)=>{
  this.row=movie
  console.log(this.row)
})

}        
    
          }