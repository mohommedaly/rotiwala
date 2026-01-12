import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
    data = [
      { id: 1, module: 'All Restaurant', img :"../../../assets/admin-dashboard/customer.svg" },
      // { id: 2, module: 'Single Restaurant',img :"../../../assets/admin-dashboard/restaurn.svg" },
      { id: 2, module: 'Add Restaurant',img :"../../../assets/admin-dashboard/create.svg" },
    
    ];
  
  constructor(private router:Router){}
  
  navigate(module:any){
    console.log(module);
    
    switch (module) {
      case "All Restaurant":
        this.router.navigate(['restaurant-owner/all-restaurant'])
  
        
        break;
      case "Add Restaurant":
        this.router.navigate(['restaurant-owner/create-restaurant'])
  
        
        break;
    
      default:
        break;
    }
  }

}
