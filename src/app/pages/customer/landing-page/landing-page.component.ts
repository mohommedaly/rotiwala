import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api/api.service';
// import { Router } from 'express';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  envUrl?:any;
  cards :any 
  // = [
  //   {
  //     imageSrc: "../../../../assets/roticards2.png", // Leave this empty for now
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   },
  //   {
  //     imageSrc: "../../../../assets/roticards2.png", // Leave this empty for now
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   },
  //   {
  //     imageSrc: "../../../../assets/roticards2.png", // Leave this empty for now
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   }
  // ];

  onImageError(event: any): void {
    event.target.src = 'assets/images/fallback-image.jpg'; // Fallback image
    event.target.alt = 'Fallback Image';
  }

  constructor(private router:Router  , private api :ApiService){
    // window.location.reload();
    this.envUrl=this.api.getEnvVar()
    console.log(this.envUrl);

    // this.api.getIdByUserameOfRestaurantOwer()
    this.api.getAllRetaurant().subscribe((res:any)=>{
      console.log(res);
      this.cards=res;
      const currentTime = new Date(); // Current time

// res.forEach((item:any, index:any) => {
//   const closeTime = new Date(item.closeTime); // Convert closeTime to Date
//   if (currentTime <= closeTime) {
//     console.log(`Index ${index}: Open`); // Print index and status
//   } else {
//     console.log(`Index ${index}: Closed`);
//   }
// });

      
    },((err)=>{
      console.log(err);
      
    }))
  }
  

  navigate(id: number) {

    console.log(id);
    
    // id = 2;
    this.router.navigate(['all-product/'+id]);
  }
  // cards = [
  //   {
  //     imageSrc: '', // This can be empty or a valid image path
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   },
  //   {
  //     imageSrc: '', // This can be empty or a valid image path
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   },
  //   {
  //     imageSrc: '', // This can be empty or a valid image path
  //     title: 'RestRestaurant Title',
  //     rating: 46
  //   }
  // ];
}
