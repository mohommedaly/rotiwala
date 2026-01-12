import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.scss'], // Fixed to plural
})
export class AllOrderComponent implements OnInit {
  customers: any[] = [];
  paginatedOrders: any[] = [];
  currentPage: number = 0;
  pageSize: number = 5; // Number of items per page
  totalPages: number = 0;
  pages: number[] = [];
  envUrl: any ; // Update with your actual API URL

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.envUrl=this.api.getEnvVar();
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    const id = localStorage.getItem('id');
    if (id) {
      this.api.getAllOrderByCustomer_Id(id).subscribe(
        (res: any) => {
          this.customers = res;
          this.totalPages = Math.ceil(this.customers.length / this.pageSize);
          this.pages = Array.from({ length: this.totalPages }, (_, i) => i); // Initialize pages
          this.updatePaginatedOrders();
        },
        (err) => {
          this.toastr.error('Failed to load orders');
        }
      );
    } else {
      this.toastr.error('Customer ID not found');
    }
  }

  updatePaginatedOrders(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedOrders = this.customers.slice(start, end);
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedOrders();
    }
  }

  exportToExcel(): void {
    // Placeholder logic: Integrate Excel export library like xlsx here
    // this.toastr.success('Exporting to Excel...');
  }

  viewOrderDetails(order: any): void {
    console.log('Order details:', order);
    this.toastr.info('Order details logged in console.');
  }
}
