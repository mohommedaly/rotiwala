import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  data = [
    { id: 1, module: 'All Customer', img :"../../../assets/admin-dashboard/customer.svg" },
    // { id: 2, module: 'Single Customer',img :"../../../assets/admin-dashboard/restaurn.svg" },
    { id: 2, module: 'Add Customer',img :"../../../assets/admin-dashboard/create.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    // { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" }
  ];

constructor(private router:Router){}

navigate(module:any){
  console.log(module);
  
  switch (module) {
    case "All Customer":
      this.router.navigate(['admin/all-customer'])

      
      break;
    case "Add Customer":
      this.router.navigate(['admin/create-customer'])

      
      break;
  
    default:
      break;
  }
}

}
