import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-restaurant',
  templateUrl: './all-restaurant.component.html',
  styleUrl: './all-restaurant.component.scss'
})
export class AllRestaurantComponent {

  restaurant:any=[]

 env:any;
  paginatedrest: any[] = [];
  itemsPerPage = 5;
  currentPage = 0;
  totalPages: number = 0;
  pages: number[] = [];
  constructor(private api:ApiService, private router:Router, private Toastr:ToastrService){

this.env=this.api.getEnvVar()
    let id= localStorage.getItem("id");
    this.api.getAllRestaurantByRestaurantOwerId(id).subscribe((res)=>{
      console.log(res);
      this.restaurant=res
    this.totalPages = Math.ceil(this.restaurant.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
    this.loadPageData();
      

    },(err)=>{
      console.log(err);
      
    })
  }

  
loadPageData(): void {
  const startIndex = this.currentPage * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedrest = this.restaurant.slice(startIndex, endIndex);
}

changePage(page: number): void {
  if (page >= 0 && page < this.totalPages) {
    this.currentPage = page;
    this.loadPageData();
  }
}
navigate(id:any){
  console.log(id)
  this.router.navigate(['restaurant-owner/restaurant/'+id])
}
}
