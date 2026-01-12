import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss'
})
export class AllProductComponent {
  customers: any[] = [];
  paginatedCustomers: any[] = [];
  itemsPerPage = 5;
  currentPage = 0;
  totalPages: number = 0;
  pages: number[] = [];
envUrl?:any;
  constructor(private router: Router, private api: ApiService ) {
    this.envUrl=this.api.getEnvVar()
    console.log(this.envUrl);
  }

  ngOnInit(): void {
    
    
    // Fetch customer data and initialize pagination
    this.api.getAllProduct().subscribe(
      (res: any) => {
        console.log(res);
        this.customers = res;
        this.updatePagination();
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  updatePagination(): void {
    // Calculate the total number of pages and initialize the first page data
    this.totalPages = Math.ceil(this.customers.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
    this.loadPageData();
  }

  loadPageData(): void {
    // Slice the customer array for the current page
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCustomers = this.customers.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadPageData();
    }
  }

  navigate(id: any): void {
    this.router.navigate(['admin/product/' + id]);
  }

}
