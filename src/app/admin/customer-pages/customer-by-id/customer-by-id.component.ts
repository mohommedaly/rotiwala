import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-customer-by-id',
  templateUrl: './customer-by-id.component.html',
  styleUrl: './customer-by-id.component.scss'
})
export class CustomerByIdComponent {
  customerData!:any
  //  = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phoneNumber: "+1234567890",
    
  //   address: "123, Elm Street, Springfield, Illinois, 62704, USA",
  //   profilePicture: "../../../../assets/admin-dashboard/details.svg",
   
  // };
  envUrl:any;
  constructor(private api:ApiService,private router:Router,private active_route:ActivatedRoute){
    this.envUrl=this.api.getEnvVar();
  }
  ngOnInit() {
    
    let id= this.active_route.snapshot.params["id"];
    console.log(id);
    this.api.getCustomerById(id).subscribe((res:any)=>{
      console.log(res);
      this.customerData=res;
      
    },(err)=>{
      console.log();
      
    })
    
  }

}
