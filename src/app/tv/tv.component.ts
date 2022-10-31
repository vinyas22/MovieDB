import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
trendingMovies:any
constructor(private testserv:TestService, private http: HttpClient) { }
row2:any
row3:any
  ngOnInit(): void {
this.getrow2()
this.getrow3()
  }
 getrow2(){this.http.get('http://localhost:4200/assets/data/row3.json').subscribe((movie)=>{
  this.row2=movie
  console.log(this.row2)

})
 }
 getrow3(){this.http.get('http://localhost:4200/assets/data/row4.json').subscribe((movie)=>{
  this.row3=movie
  console.log(this.row3)

})
 }
}
