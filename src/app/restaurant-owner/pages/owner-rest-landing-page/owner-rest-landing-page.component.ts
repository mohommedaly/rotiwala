import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-rest-landing-page',
  templateUrl: './owner-rest-landing-page.component.html',
  styleUrl: './owner-rest-landing-page.component.scss'
})
export class OwnerRestLandingPageComponent {
  data = [
    // { id: 1, module: 'All Restaurant', img :"../../../assets/admin-dashboard/customer.svg" },
    // { id: 5, module: 'Restaurant Owner', img:"../../../assets/admin-dashboard/create.svg" },
    { id: 2, module: 'Restaurant',img :"../../../assets/admin-dashboard/restaurn.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" },
    { id: 5, module: 'Order', img:"../../../assets/admin-dashboard/order.svg" },
  ];


  constructor(private router :Router){}

  navigate(module:any){
    console.log(module);
    
    switch (module) {
      // case 'Customer':
      //   this.router.navigate(['restaurant-owner/customer'])
        
      //   break;
      case 'Restaurant':
        this.router.navigate(['restaurant-owner/restaurant'])
        break;
      case 'Order':
        this.router.navigate(['restaurant-owner/order'])
        
        break;
      case 'Products':
        this.router.navigate(['restaurant-owner/product'])
        
        break;
      case 'Restaurant Owner':
        this.router.navigate(['admin/restaurant-owner'])
        
        break;

    
      default:
        break;
    }

  }

}
