import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrl: './reset-pass.component.scss'
})
export class ResetPassComponent {

  
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
    email: ['', [Validators.required, Validators.minLength(3)]],
    otp: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]]
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
    console.log('Form Submitted!', this.loginForm.value);
    this.api.resetPassword(this.loginForm.value).subscribe((res)=>{
      console.log(res);

      this.router.navigate(['auth'])
      

    },((err)=>{
      console.log(err);
      
    }))
  //  this.api.
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
