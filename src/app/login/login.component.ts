import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  document:any

  constructor(@Inject(DOCUMENT) document:Document, private router:Router) { this.document=document}

  ngOnInit(): void {
  }
 login(){
  if (this.document.getElementById('username').value=='vinyas'&&this.document.getElementById('password').value=='DwightHalpert' ) {
    alert(this.document.getElementById('username').value)
    this.router.navigate(['home'])
    
  }else{
    alert('wrong Username/Password')
  }
 } 
}
