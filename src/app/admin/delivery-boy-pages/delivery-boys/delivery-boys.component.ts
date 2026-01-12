import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-boys',
  templateUrl: './delivery-boys.component.html',
  styleUrl: './delivery-boys.component.scss'
})
export class DeliveryBoysComponent {

  data = [
    { id: 1, module: 'All Delivery Boys', img :"../../../assets/admin-dashboard/customer.svg" },
    // { id: 2, module: 'Single Customer',img :"../../../assets/admin-dashboard/restaurn.svg" },
    { id: 2, module: 'Add Delivery Boys',img :"../../../assets/admin-dashboard/create.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    // { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" }
  ];

constructor(private router:Router){}

navigate(module:any){
  console.log(module);
  
  switch (module) {
    case "All Delivery Boys":
      this.router.navigate(['admin/all-delivery-boy'])

      
      break;
    case "Add Delivery Boys":
      this.router.navigate(['admin/create-delivery-boy'])

      
      break;
  
    default:
      break;
  }
}

}
