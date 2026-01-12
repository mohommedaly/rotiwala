import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-restr-owner',
  templateUrl: './restr-owner.component.html',
  styleUrl: './restr-owner.component.scss'
})
export class RestrOwnerComponent {
  data = [
    { id: 1, module: 'All Restaurant Owner', img :"../../../assets/admin-dashboard/customer.svg" },
    // { id: 2, module: 'Single Restaurant Owner',img :"../../../assets/admin-dashboard/restaurn.svg" },
    { id: 2, module: 'Add Restaurant Owner',img :"../../../assets/admin-dashboard/create.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    // { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" }
  ];

constructor(private router:Router){}

navigate(module:any){
  console.log(module);
  
  switch (module) {
    case "All Restaurant Owner":
      this.router.navigate(['admin/all-restaurant-owner'])

      
      break;
    case "Add Restaurant Owner":
      this.router.navigate(['admin/create-restaurant-owner'])

      
      break;
  
    default:
      break;
  }
}

}
