import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  data = [
        { id: 1, module: 'All Order', img :"../../../assets/admin-dashboard/customer.svg" },
        // { id: 2, module: 'Single Customer',img :"../../../assets/admin-dashboard/restaurn.svg" },
        { id: 2, module: 'Add Order',img :"../../../assets/admin-dashboard/create.svg" },
        // { id: 3, module: 'Delivery Boys' , img:"../../../assets/admin-dashboard/delivery.svg" },
        // { id: 4, module: 'Products', img:"../../../assets/admin-dashboard/product.svg" }
      ];
    
    constructor(private router:Router){}
    
    navigate(module:any){
      console.log(module);
      
      switch (module) {
        case "All Order":
          this.router.navigate(['restaurant-owner/all-order'])
    
          
          break;
        case "Add Product":
          this.router.navigate(['restaurant-owner/create-product'])
    
          
          break;
      
        default:
          break;
      }
    }

}
