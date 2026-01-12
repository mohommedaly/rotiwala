import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
import { log } from 'node:console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss'
})
export class CreateRestaurantComponent {
  isLoading: boolean = false; 
  restaurantForm: FormGroup;
  gstPreview: string | ArrayBuffer | null = '';
  fssaiPreview: string | ArrayBuffer | null = '';
  restaurantPhotoPreview: string | ArrayBuffer | null = '';
resOwner:any=[];
  constructor(private fb: FormBuilder, private api:ApiService, private router:Router, private toastr:ToastrService) {
    this.restaurantForm = this.fb.group({
      restaurantName: ['', Validators.required],
      restaurantMobileNumber: ['', [Validators.required]],
      restaurantAddress: ['', Validators.required],
      location: ['', Validators.required],
      restaurant_Type: ['', Validators.required],
      Open_Time: [null, Validators.required],
      Close_Time: [null, Validators.required],
      Open_Days: ['', Validators.required],
      Close_days: ['', Validators.required],
      Gomasta_No: ['', Validators.required],
      GstNumber: ['', Validators.required],
      fssaiNumber: ['', Validators.required],
      GstDocumentImage: [null, Validators.required],
      FssaiDocumentImage: [null, Validators.required],
      restaurantPhoto: [null, Validators.required],
      resturantOwner:['',Validators.required]
    });
  }

  onFileChange(event: any, field: string): void {
    const file = event.target.files[0];
    if (file) {
      this.restaurantForm.patchValue({ [field]: file });
      const reader = new FileReader();
      reader.onload = () => {
        if (field === 'GstDocumentImage') this.gstPreview = reader.result;
        if (field === 'FssaiDocumentImage') this.fssaiPreview = reader.result;
        if (field === 'restaurantPhoto') this.restaurantPhotoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  ngOnInit() {
    this.api.getAllRetaurantOwner().subscribe((res)=>{
      this.resOwner=res;
      console.log(this.resOwner);
      
    })
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      this.isLoading = true; 
      console.log(this.restaurantForm.value);
const closeTime=this.restaurantForm.value.Close_Time;
const openTime=this.restaurantForm.value.Open_Time;
const closeTimeFormatted = `2024-12-12T${closeTime}:00`; 
const openTimeFormatted = `2024-12-12T${openTime}:00`; 
      const formdata=new FormData();
      let sendData={
        restaurantName:this.restaurantForm.value.restaurantName,
        restaurantMobileNumber:this.restaurantForm.value.restaurantMobileNumber,
        restaurantAddress:this.restaurantForm.value.restaurantAddress,
        location:this.restaurantForm.value.location,
        restaurantType:this.restaurantForm.value.restaurant_Type,
        openTime:openTimeFormatted,
        closeTime:closeTimeFormatted,
        openDays:this.restaurantForm.value.Open_Days,
        closeDays:this.restaurantForm.value.Close_days,
        gomastaNo:this.restaurantForm.value.Gomasta_No,
        gstNumber:this.restaurantForm.value.GstNumber,
        fssaiNumber:this.restaurantForm.value.fssaiNumber,
        ownerInfo:{

          id:this.restaurantForm.value.resturantOwner
        }
      }

      console.log(sendData,"**********************************");
      
      formdata.append('restaurant', JSON.stringify(sendData));
      formdata.append('gstDocumentImage',this.restaurantForm.value.GstDocumentImage );
      formdata.append('fssaiDocumentImage', this.restaurantForm.value.FssaiDocumentImage);
      formdata.append('restaurantPhoto',this.restaurantForm.value.restaurantPhoto);
      // Process form submission here
      this.api.createRestaurant(formdata).subscribe((res)=>{
        this.toastr.success('Restaurant Created successfully!');
console.log(res);
this.router.navigate(['admin/all-restaurant'])
this.isLoading = false;

      },((err)=>{
        console.log(err);
        this.isLoading = false;
        this.toastr.success(err.error.message||'Something Went Wrong !');
        
        
      }))
    }
  }
}
