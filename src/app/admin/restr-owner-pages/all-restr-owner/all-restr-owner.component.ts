import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-restr-owner',
  templateUrl: './all-restr-owner.component.html',
  styleUrl: './all-restr-owner.component.scss'
})
export class AllRestrOwnerComponent {
  ownerInfo :any=[];
  envUrl?:any;
  // = [
  //   {
  //     "id": 1,
  //     "firstName": "John",
  //     "lastName": "Doe",
  //     "mobileNumber": "1234567890",
  //     "email": "john.doe@example.com",
  //     "profilePhoto": "http://example.com/photos/johndoe.jpg",
  //     "aadharImage": "http://example.com/aadhar/johndoe_aadhar.jpg",
  //     "aadharNumber": "1234-5678-9012",
  //     "panNo": "ABCDE1234F",
  //     "panImage": "http://example.com/pan/johndoe_pan.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "firstName": "Jane",
  //     "lastName": "Smith",
  //     "mobileNumber": "0987654321",
  //     "email": "jane.smith@example.com",
  //     "profilePhoto": "http://example.com/photos/janesmith.jpg",
  //     "aadharImage": "http://example.com/aadhar/janesmith_aadhar.jpg",
  //     "aadharNumber": "4321-0987-6543",
  //     "panNo": "XYZAB1234C",
  //     "panImage": "http://example.com/pan/janesmith_pan.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "firstName": "Alice",
  //     "lastName": "Johnson",
  //     "mobileNumber": "1122334455",
  //     "email": "alice.johnson@example.com",
  //     "profilePhoto": "http://example.com/photos/alicejohnson.jpg",
  //     "aadharImage": "http://example.com/aadhar/alicejohnson_aadhar.jpg",
  //     "aadharNumber": "9876-5432-1098",
  //     "panNo": "LMNOP1234Q",
  //     "panImage": "http://example.com/pan/alicejohnson_pan.jpg"
  //   }
  // ];


  constructor(private api:ApiService, private router:Router){
    this.envUrl=this.api.getEnvVar()

  }

  paginatedOwners: any[] = [];
  itemsPerPage = 5;
  currentPage = 0;
  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {


    this.api.getAllRetaurantOwner().subscribe((res:any)=>{
      console.log(res);
      this.ownerInfo = res
      console.log(this.envUrl +res?.profilePicture);
      


      this.totalPages = Math.ceil(this.ownerInfo.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      this.loadPageData();
      
    },((err)=>{
      console.log(err);
      
    }))
   
  }

  loadPageData(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedOwners = this.ownerInfo.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadPageData();
    }
  }

  navigate(id:number){
    // console.log(id,"***********************")
    this.router.navigate(['admin/restaurant-owner/'+id])
  }
}
