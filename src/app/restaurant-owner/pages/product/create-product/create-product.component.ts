import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../../api/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  
    createProductForm!: FormGroup;
    restaurants:any=[]
    //  = [
    //   { id: 1, name: 'Restaurant A' },
    //   { id: 2, name: 'Restaurant B' },
    //   { id: 3, name: 'Restaurant C' }
    // ];
    productImagePreview: string | ArrayBuffer | null = null;
    maxFileSize = 200 * 1024; // 200 KB in bytes
  
    constructor(private router:Router,private fb: FormBuilder, private toastr: ToastrService , private api:ApiService ) {} // Inject ToastrService
    public id:any;
    ngOnInit(): void {
      this.id=localStorage.getItem("id");
      console.log(this.id);
  
      this.api.getAllRestaurantByRestaurantOwerId(this.id).subscribe((res)=>{
        console.log(res);
        
        this.restaurants=res;
        console.log(this.restaurants);
  
        
      })
      this.createProductForm = this.fb.group({
        productName: ['', [Validators.required, Validators.minLength(3)]],
        productPrice: ['', [Validators.required, Validators.min(1)]],
        restaurant: ['', [Validators.required]],
        productImage: [null, [Validators.required]]
      });
    }
  
  onSubmit(): void {
      if (this.createProductForm.valid) {
        console.log(this.createProductForm.value);
        const formdata=new FormData();
        let SendData={
          productName: this.createProductForm.value.productName,
          productPrice:this.createProductForm.value.productPrice,
          restaurant:{
            id:this.createProductForm.value.restaurant
          }
        }
  
        formdata.append('orderitem', JSON.stringify(SendData));
        formdata.append('productImage',this.createProductForm.value.productImage );
        this.api.createProduct(formdata).subscribe((res)=>{
          this.toastr.success("Product created successfully");
          console.log(res);
          this.router.navigate(['restaurant-owner/all-product'])
          
        },((err)=>{
          // this.toastr.error(err)
          console.log(err);
          
        }))
  
  
        // Handle form submission
      }
    }
  
  
    onFileChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
  
        if (file.size > this.maxFileSize) {
          this.toastr.error('File size must be less than 200 KB.', 'Invalid File');
          this.createProductForm.patchValue({ productImage: null });
          this.productImagePreview = null;
          return;
        }
  
        this.createProductForm.patchValue({ productImage: file });
  
        const reader = new FileReader();
        reader.onload = () => {
          this.productImagePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
  
    onReset(): void {
      this.createProductForm.reset();
      this.productImagePreview = null;
    }
  
  

}
