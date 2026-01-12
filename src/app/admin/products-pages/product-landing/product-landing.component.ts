import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrl: './product-landing.component.scss'
})
export class ProductLandingComponent {
  data = [
    { id: 1, module: 'All Product', img :"../../../assets/admin-dashboard/customer.svg" },
    // { id: 2, module: 'Single Customer',img :"../../../assets/admin-dashboard/restaurn.svg" },
    { id: 2, module: 'Add Product',img :"../../../assets/admin-dashboard/create.svg" },
    // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
    // { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" }
  ];

constructor(private router:Router){}

navigate(module:any){
  console.log(module);
  
  switch (module) {
    case "All Product":
      this.router.navigate(['admin/all-product'])

      
      break;
    case "Add Product":
      this.router.navigate(['admin/add-product'])

      
      break;
  
    default:
      break;
  }
}


}
