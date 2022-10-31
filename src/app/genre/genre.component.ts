import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
row5:any
row6:any
constructor(private testserv:TestService, private http: HttpClient) { }

  ngOnInit(): void {
this.getrow5()
this.getrow6()
  }
  getrow5(){
    this.http.get('http://localhost:4200/assets/data/row5.json').subscribe((movie)=>{
      this.row5=movie
      console.log(this.row5)
    })
      
}
getrow6()   {this.http.get('http://localhost:4200/assets/data/row6.json').subscribe((movie)=>{
this.row6=movie
console.log(this.row6)
})

}        

}



