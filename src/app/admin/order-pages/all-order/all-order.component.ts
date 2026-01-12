import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrl: './all-order.component.scss'
})
export class AllOrderComponent {

    customers: any[] = [];
      paginatedCustomers: any[] = [];
      itemsPerPage = 5;
      currentPage = 0;
      totalPages: number = 0;
      pages: number[] = [];
    envUrl?:any;
    
      createProductForm!: FormGroup;
      restaurants:any =[]
      restaurantOwner:any =[]
      //  [
      //   { id: 1, restaurantName: 'Restaurant A' },
      //   { id: 2, restaurantName: 'Restaurant B' },
      //   { id: 3, restaurantName: 'Restaurant C' },
      // ];
    
      constructor(private fb: FormBuilder, private api:ApiService, private toastr:ToastrService) {
        this.envUrl=this.api.getEnvVar()
        this.api.getAllRetaurantOwner().subscribe((res)=>{
          console.log(res);
          this.restaurantOwner=res
          
        })
    
        // let id=localStorage.getItem("id");
        // this.api.getAllRestaurantByRestaurantOwerId(id).subscribe((res:any)=>{
        //   console.log(res);
        //   this.restaurants=res;
        //   // if (res && Array.isArray(res)) {
        //   //   res.forEach((e: any, i: number) => {
        //   //     console.log(e.id);
        //   //   });
        //   // } else {
        //   //   console.error('res.array is undefined or not an array');
        //   // }
          
          
          
          
        // },(err)=>{
        //   console.log(err);
        //   this.toastr.error(err.error.error ||"Something Went Wrong !")
          
        // })
      }
    
      ngOnInit(): void {
        this.createProductForm = this.fb.group({
          restaurant: ['', Validators.required],
          restaurantOwner: ['', Validators.required]
        });
    
    
       
      }
    
      onSubmit() {
        if (this.createProductForm.valid) {
          console.log('Form Submitted', this.createProductForm.value.restaurant);
            // Fetch customer data and initialize pagination
         this.api.getAllOrdertByRestaurantId(this.createProductForm.value.restaurant).subscribe(
          (res: any) => {
            console.log(res);
            this.customers = res;
            this.updatePagination();
          },
          (err:any) => {
            console.log(err);
          }
        );
          // alert('Form Submitted Successfully!');
        } else {
          console.log('Form Invalid');
        }
      }
    
    
      getAllRestauranant(event:any){
        console.log(event.target.value);
        this.api.getAllRestaurantByRestaurantOwerId(event.target.value).subscribe((res:any)=>{
          console.log(res);
          this.restaurants=res;
          // if (res && Array.isArray(res)) {
          //   res.forEach((e: any, i: number) => {
          //     console.log(e.id);
          //   });
          // } else {
          //   console.error('res.array is undefined or not an array');
          // }
          
          
          
          
        },(err)=>{
          console.log(err);
          this.toastr.error(err.error.error ||"Something Went Wrong !")
          
        })
        
      }
    
     
    
      updatePagination(): void {
        // Calculate the total number of pages and initialize the first page data
        this.totalPages = Math.ceil(this.customers.length / this.itemsPerPage);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
        this.loadPageData();
      }
    
      loadPageData(): void {
        // Slice the customer array for the current page
        const startIndex = this.currentPage * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.paginatedCustomers = this.customers.slice(startIndex, endIndex);
      }
    
      changePage(page: number): void {
        if (page >= 0 && page < this.totalPages) {
          this.currentPage = page;
          this.loadPageData();
        }
      }
    
      navigate(id: any): void {
        // this.router.navigate(['admin/product/' + id]);
      }
    
    
}
