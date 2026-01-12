import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-landing-page-footer',
  templateUrl: './landing-page-footer.component.html',
  styleUrl: './landing-page-footer.component.scss'
})
export class LandingPageFooterComponent {
  currentYear: number;

  constructor(private api:ApiService) {
    this.currentYear = new Date().getFullYear(); // Dynamically get the current year

let username=localStorage.getItem("username");
this.api.getIdByUserameOfCustomer(username).subscribe((res:any)=>{
  console.log(res);
  localStorage.setItem("id",res.message)
  
},(er)=>{
  console.log(er);
  
})

  }
}
