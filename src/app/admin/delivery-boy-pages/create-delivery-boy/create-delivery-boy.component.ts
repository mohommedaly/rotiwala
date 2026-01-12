import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-delivery-boy',
  templateUrl: './create-delivery-boy.component.html',
  styleUrl: './create-delivery-boy.component.scss'
})
export class CreateDeliveryBoyComponent {
  form: FormGroup;
  step: number = 1;

  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        profilePhoto: ['']
      }),
      addressDetails: this.fb.group({
        address: ['', Validators.required],
        bankName: ['', Validators.required],
        bankAccountNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
        bank_Ifsc_Code: ['', Validators.required],
      }),
      idDetails: this.fb.group({
        pan_No: ['', Validators.required],
        pan_Image: [''],
        aadhar_No: ['', Validators.required],
        aadhar_Image: ['']
      }),
      vehicleDetails: this.fb.group({
        vehicleNumber: ['', Validators.required],
        vehicleType: ['', Validators.required],
        insuranceValidDate: ['', Validators.required],
        drivingLicenseNumber: ['', Validators.required],
        drivingLicenseExpireDate: ['', Validators.required],
        rcSmartCard: [''],
        insurance: [''],
        drivingLicenseImage: [''],
        PUC_Image: ['']
      }),
      additionalInfo: this.fb.group({
        status: [true],
        police_verification: [''],
        isDeleted: [false],
        restaurantId: [101]
      })
    });
  }




  ngAfterViewChecked(): void {
    
      this.cdr.detectChanges(); // Ensure change detection is manually triggered
    
  }

  // Navigation methods
  nextStep() {
    if (this.isCurrentStepValid()) {
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }

  isCurrentStepValid(): boolean {
    const stepGroup = this.getCurrentStepGroup();
    if (stepGroup) {
      stepGroup.markAllAsTouched();
      return stepGroup.valid;
    }
    return false;
  }

  getCurrentStepGroup(): FormGroup | null {
    switch (this.step) {
      case 1: return this.form.get('personalDetails') as FormGroup;
      case 2: return this.form.get('addressDetails') as FormGroup;
      case 3: return this.form.get('idDetails') as FormGroup;
      case 4: return this.form.get('vehicleDetails') as FormGroup;
      default: return null;
    }
  }

  onFileSelect(event: Event, controlName: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.getCurrentStepGroup()?.get(controlName)?.setValue(file.name);
    }
  }

  submitForm() {
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
