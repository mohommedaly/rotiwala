import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-restaurant-owner',
  templateUrl: './restaurant-owner.component.html',
  styleUrl: './restaurant-owner.component.scss'
})
export class RestaurantOwnerComponent {
  constructor(private api:ApiService){
    let username:any=localStorage.getItem("username");
    console.log(username);

    


    this.api.getIdByUserameOfRestaurantOwer(username).subscribe((res:any)=>{
      // console.log(res.message);
      localStorage.setItem("id",res.message)
      
    },((err)=>{
      console.log(err);
      
    }))
    // localStorage.setItem('token', successResponse.token)
    

  }

}
