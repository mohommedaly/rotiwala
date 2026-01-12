import { Component } from '@angular/core';

@Component({
  selector: 'app-all-delivery-boy',
  templateUrl: './all-delivery-boy.component.html',
  styleUrl: './all-delivery-boy.component.scss'
})
export class AllDeliveryBoyComponent {
  users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      email: "john.doe@example.com",
      mobileNumber: 9876543210,
      address: "123 Main Street, City, Country",
      bankName: "Bank of Example",
      bankAccountNumber: "1234567890123456",
      bank_Ifsc_Code: "BANK0123456",
      profilePhoto: "https://example.com/images/profilePhoto.jpg",
      pan_No: "ABCDE1234F",
      pan_Image: "https://example.com/images/panImage.jpg",
      aadhar_No: "1234-5678-9012",
      aadhar_Image: "https://example.com/images/aadharImage.jpg",
      status: true,
      police_verification: "Approved",
      vehicleNumber: "XYZ-1234",
      vehicleType: "Motorcycle",
      insuranceValidDate: "2025-12-31",
      drivingLicenseNumber: "DL-9876543210",
      drivingLicenseExpireDate: "2024-12-31",
      rcSmartCard: "https://example.com/images/rcSmartCard.jpg",
      insurance: "https://example.com/images/insurance.jpg",
      drivingLicenseImage: "https://example.com/images/drivingLicenseImage.jpg",
      PUC_Image: "https://example.com/images/pucImage.jpg",
      restaurantId: 101
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      gender: "Female",
      email: "jane.smith@example.com",
      mobileNumber: 9876543211,
      address: "456 Elm Street, City, Country",
      bankName: "Global Bank",
      bankAccountNumber: "9876543210987654",
      bank_Ifsc_Code: "GLBL1234567",
      profilePhoto: "https://example.com/images/profilePhoto2.jpg",
      pan_No: "XYZEF5678J",
      pan_Image: "https://example.com/images/panImage2.jpg",
      aadhar_No: "2234-5678-9012",
      aadhar_Image: "https://example.com/images/aadharImage2.jpg",
      status: true,
      police_verification: "Pending",
      vehicleNumber: "ABC-5678",
      vehicleType: "Electric",
      insuranceValidDate: "2026-11-30",
      drivingLicenseNumber: "DL-5678901234",
      drivingLicenseExpireDate: "2025-06-15",
      rcSmartCard: "https://example.com/images/rcSmartCard2.jpg",
      insurance: "https://example.com/images/insurance2.jpg",
      drivingLicenseImage: "https://example.com/images/drivingLicenseImage2.jpg",
      PUC_Image: "https://example.com/images/pucImage2.jpg",
      restaurantId: 102
    }
  ];

  paginatedUsers: any[] = [];
  itemsPerPage = 5;
  currentPage = 0;
  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
    this.loadPageData();
  }

  loadPageData(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadPageData();
    }
  }

}
