
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent {
  isLoading:boolean=false;
  createUserForm: FormGroup;
  profilePicturePreview: string | ArrayBuffer | null = '';

  constructor(private fb: FormBuilder, private api:ApiService, private router:Router, private toastr:ToastrService) {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      gender:['',Validators.required],
      profilePicture: [null, Validators.required]
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.createUserForm.patchValue({ profilePicture: file });
      const reader = new FileReader();
      reader.onload = () => (this.profilePicturePreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      this.isLoading=true;
      const formdata=new FormData();
      let data={
        name:this.createUserForm.value.name,
        email:this.createUserForm.value.email,
        phoneNumber:this.createUserForm.value.phoneNumber,
        address:this.createUserForm.value.address,
        gender:this.createUserForm.value.gender,
        // file:this.createUserForm.value.profilePicture
      };
      formdata.append('profilePicture', this.createUserForm.value.profilePicture);
      formdata.append('customer', JSON.stringify(data));
      console.log(this.createUserForm.value.profilePicture);
      this.api.createCustomer(formdata).subscribe((successResponse)=>{
        this.isLoading=false;
        this.toastr.success("success fully create a customer ")
this.router.navigate(['/admin/all-customer'])
      },((errorResponse)=>{
        this.isLoading=false;
        this.toastr.error(errorResponse.error.message||"error creating a customer")
      }))

      // Process form submission here
    }
  }


}
