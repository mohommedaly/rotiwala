import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../api/api.service';
import { log } from 'node:console';
@Component({
  selector: 'app-restaurant-login',
  templateUrl: './restaurant-login.component.html',
  styleUrl: './restaurant-login.component.scss'
})
export class RestaurantLoginComponent {
  isLoading: boolean = false; 
  loginForm!: FormGroup; // Declare the FormGroup
  showPassword: boolean = false; 
  constructor(private api:ApiService,private fb: FormBuilder, private router: Router,private toastr: ToastrService) {
    // Initialize the form inside the constructor
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
      this.isLoading = true; 
      console.log('Form Submitted!', this.loginForm.value);
      
      this.api.signIn(this.loginForm.value).subscribe((successResponse:any)=>{
console.log(successResponse.username);
localStorage.setItem('username', successResponse.username)
localStorage.setItem('token', successResponse.token)
localStorage.setItem('role', successResponse.roles[0])
let role= successResponse.roles[0]
console.log(successResponse.roles);

if(role=="ROLE_ADMIN"){
  this.toastr.success("Welcome! You have logged in successfully.");
  this.router.navigate(['admin'])

}else if(role=="ROLE_CUSTOMER"){
  this.toastr.success("Welcome! You have logged in successfully.")
  this.router.navigate([''])
}

else{
  this.toastr.success("Welcome! You have logged in successfully.");
  this.router.navigate(['restaurant-owner'])

}
this.isLoading = false;

      },((errorResponse)=>{

        this.toastr.error(errorResponse.error.messages||'Something went wrong');
        this.isLoading = false; 
      }))

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
      return `${controlName} is required`;
    } else if (control?.hasError('minlength')) {
      const requiredLength = control?.errors?.['minlength'].requiredLength;
      return `${controlName} must be at least ${requiredLength} characters long`;
    }
    return '';
  }

}
