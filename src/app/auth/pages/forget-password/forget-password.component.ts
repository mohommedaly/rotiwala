import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  isLoading:boolean=false;
  loginForm!: FormGroup; // Declare the FormGroup
  showPassword: boolean = false; 
  constructor(private api:ApiService,private fb: FormBuilder, private router: Router,private toastr: ToastrService) {
    // Initialize the form inside the constructor
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // role:["admin"]

    });
  }

    // Method to toggle password visibility
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading=true;
      // console.log('Form Submitted!', this.loginForm.value.username);
      let sendData={
        email:this.loginForm.value.username
      }
      console.log(sendData);

      this.api.verifyEmail(sendData).subscribe((res)=>{
        console.log(res);
        this.isLoading=false;
        this.toastr.success("Email successfully verified! Please check your inbox for the OTP.")
        this.router.navigate(['auth/reset-password'])
      },(err)=>{
        this.isLoading=false
        console.log(err)
        this.toastr.error('Email verification failed! Please try again later.');


      })
      
     

    } else {
      this.loginForm.markAllAsTouched();  // Mark all fields as touched to show validation errors
    }
  }

  // Method to check if the form control has errors and touched
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  // Method to get error messages
  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) {
      return `email is required`;
    } else if (control?.hasError('minlength')) {
      const requiredLength = control?.errors?.['minlength'].requiredLength;
      return `${controlName} must be at least ${requiredLength} characters long`;
    }
    return '';
  }

}
