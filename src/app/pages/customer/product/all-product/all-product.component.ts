import { Component } from '@angular/core';
import { ApiService } from '../../../../api/api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {  } from 'express';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss'
})
export class AllProductComponent {
  rating: number = 2.5;
  stars: any[] = [];
  envUrl:any
  products: any[] = []; 
  constructor(private api:ApiService, private activate_route:ActivatedRoute, private router:Router, private toastr:ToastrService){
    this.envUrl=this.api.getEnvVar()
    let id= this.activate_route.snapshot.params['id'];
    console.log(id);
    this.api.getAllProductByRestaurantId(id).subscribe((res:any)=>{
      console.log(res);
      this.products = res;
      
    },((err)=>{
      console.log(err);
      
    }))
    

  }

  ngOnInit(): void {
    this.generateStars();



  }

  generateStars(): void {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 !== 0;
    const maxStars = 5;

    for (let i = 0; i < fullStars; i++) {
      this.stars.push('full');
    }

    if (halfStar) {
      this.stars.push('half');
    }

    for (let i = fullStars + (halfStar ? 1 : 0); i < maxStars; i++) {
      this.stars.push('empty');
    }
  }



  getProductId(id:any){
    console.log(id,"*************");
    let token = localStorage.getItem("token");
    let customer_id = localStorage.getItem("id");
    console.log(customer_id);

    if(token){
      console.log(token);


    
      this.api.AddCart(id,customer_id).subscribe((res)=>{
        console.log(res);
        this.toastr.success("SuccessFully Add Cart")
        window.location.reload();
        

      },(err)=>{
        console.log(err);
        this.toastr.success(err.error.message||"Something Went Wrong !")
        
      })
      

    }else{

      console.log(token);
      
      
      this.router.navigate(["login"])
    }
    
    
  }
}
