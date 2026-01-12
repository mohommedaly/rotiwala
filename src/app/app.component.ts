import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rotiwala';
  constructor(private api:ApiService){
  //  console.log(this.api.baseUrl)


  // let token =localStorage.getItem("token")


  // let token = localStorage.getItem("token")
  // console.log(token);
  
  }
}
