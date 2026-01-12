import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  customerData!:any
  //  = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phoneNumber: "+1234567890",
    
  //   address: "123, Elm Street, Springfield, Illinois, 62704, USA",
  //   profilePicture: "../../../../assets/admin-dashboard/details.svg",
   
  // };
  constructor(private api:ApiService,private router:Router,private active_route:ActivatedRoute){}

  ngOnInit() {
    let id= this.active_route.snapshot.params["id"];
    console.log(id);
    this.api.getProductById(id).subscribe((res:any)=>{
      console.log(res);
      this.customerData=res;
      
    },(err:any)=>{
      console.log();
      
    })
    
  }

}
