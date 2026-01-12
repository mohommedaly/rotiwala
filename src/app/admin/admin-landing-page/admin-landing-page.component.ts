import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.scss'
})
export class AdminLandingPageComponent {
  data = [
    { id: 1, module: 'Customer', img :"../../../assets/admin-dashboard/customer.svg" },
    { id: 5, module: 'Restaurant Owner', img:"../../../assets/admin-dashboard/create.svg" },
    { id: 2, module: 'Restaurant',img :"../../../assets/admin-dashboard/restaurn.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" },
    { id: 5, module: 'Order', img:"../../../assets/admin-dashboard/order.svg" },
  ];


  constructor(private router :Router){}

  navigate(module:any){
    console.log(module);
    
    switch (module) {
      case 'Customer':
        this.router.navigate(['admin/customer'])
        
        break;
      case 'Restaurant':
        this.router.navigate(['admin/restaurant'])
        break;
      case 'Delivery Boys':
        this.router.navigate(['admin/delivery-boy'])
        break;
      case 'Products':
        this.router.navigate(['admin/product'])
        
        break;
      case 'Restaurant Owner':
        this.router.navigate(['admin/restaurant-owner'])
        
        break;
      case 'Order':
        this.router.navigate(['admin/order'])
        
        break;

    
      default:
        break;
    }

  }

}
