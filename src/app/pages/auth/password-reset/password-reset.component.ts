// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../api/api.service';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent {
  isLoading:boolean=false;
  loginForm!: FormGroup;
  showOtpPassword: boolean = false; // For OTP password field
  showPassword: boolean = false; // For Password field
  
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      otp: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  // Toggle visibility for OTP
  toggleOtpVisibility() {
    this.showOtpPassword = !this.showOtpPassword;
  }
  
  // Toggle visibility for Password
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  // Form submission logic
  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading=true;
      console.log('Form Submitted!', this.loginForm.value);
  
     this.api.signUp(this.loginForm.value).subscribe((res)=>{
      console.log(res);
      this.isLoading=false;
      this.toastr.success('Password generated successfully!');
  
      this.router.navigate(['login'])
  
     },((er)=>{
      this.isLoading=false;
      console.log(er);
      this.toastr.error(er.error.message||'Something Wet Wrong !');
      
     }))
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
  // Utility methods for validation
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }
  
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
