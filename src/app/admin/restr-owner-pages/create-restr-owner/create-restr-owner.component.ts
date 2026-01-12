import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import e from 'express';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-restr-owner',
  templateUrl: './create-restr-owner.component.html',
  styleUrl: './create-restr-owner.component.scss'
})
export class CreateRestrOwnerComponent {
  isLoading: boolean = false; 
  ownerForm: FormGroup;
  profilePhotoPreview: string | ArrayBuffer | null = null;
  aadharImagePreview: string | ArrayBuffer | null = null;
  panImagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private toastr:ToastrService, private api:ApiService, private router:Router) {
    this.ownerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      profilePhoto: [null],
      aadharImage: [null],
      aadharNumber: ['', Validators.required],
      panNo: ['', Validators.required],
      panImage: [null],
      address:['']
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    this.ownerForm.patchValue({
      [field]: file
    });

    const reader = new FileReader();
    reader.onload = () => {
      if (field === 'profilePhoto') {
        this.profilePhotoPreview = reader.result;
      } else if (field === 'aadharImage') {
        this.aadharImagePreview = reader.result;
      } else if (field === 'panImage') {
        this.panImagePreview = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.ownerForm.valid) {
      this.isLoading = true; 
      console.log(this.ownerForm.value);
      const formdata=new FormData();
      let ownerData={
        firstName:this.ownerForm.value.firstName,
        lastName:this.ownerForm.value.lastName,
        mobileNumber:this.ownerForm.value.mobileNumber,
        email:this.ownerForm.value.email,
        aadharNumber:this.ownerForm.value.aadharNumber,
        panNo:this.ownerForm.value.panNo,
        address:this.ownerForm.value.address
      }
      formdata.append('ownerInfo', JSON.stringify(ownerData));
      formdata.append('profilePicture', this.ownerForm.value.profilePhoto);
      formdata.append('panImage', this.ownerForm.value.panImage);
      formdata.append('aadharImage', this.ownerForm.value.aadharImage);
      this.api.createRestaurantOwner(formdata).subscribe((res)=>{
        console.log(res);
        

        this.toastr.success("Restaurant owner created successfully!");
        this.router.navigate(['admin/all-restaurant-owner'])
        this.isLoading = false;
      },(err)=>{
        this.isLoading = false;
        this.toastr.error(err);  
      })
      // this.ownerForm.reset();
    }else{
      this.toastr.error("Something went wrong !");
    }
  }
}
