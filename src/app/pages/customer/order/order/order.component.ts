import { Component } from '@angular/core';
import { ApiService } from '../../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  id: any;
  orderData: any = [];
  orderForm!: FormGroup;
  envUrl = 'http://localhost:8080'; // Replace with your environment's URL
  finalPrice: number = 0; // Variable to store the sum of all product prices
productId:any;
  constructor(private fb: FormBuilder, private api: ApiService, private activate_route: ActivatedRoute, private toastr:ToastrService , private router:Router){}
  RestuarantId:any;
  customerId:any;
  ngOnInit(): void {
    // Fetch the customer ID from route params
    this.id = this.activate_route.snapshot.params['id'];

    // Initialize the form
    this.orderForm = this.fb.group({
      orders: this.fb.array([]) // Start with an empty array
    });

    // Fetch data from API and populate the form
    this.api.getAllCartByCustomerId(this.id).subscribe(
      (res: any) => {
        this.customerId=res[0].customerId;
        
        
        this.orderData = res;
        this.productId=res[0].orderItemResponse.id
        console.log(this.productId);
        this.api.RestaurantIdByProductId(this.productId).subscribe((res)=>{
          console.log(res);
          this.RestuarantId=res
          
        },(err)=>{
          console.log();
          
        })


        
        this.populateOrdersFormArray();
        this.calculateFinalPrice(); // Calculate the initial sum of product prices
      },
      (err) => {
        console.error(err);
      }
    );
  }

  // Getter for orders FormArray
  get orders(): FormArray {
    return this.orderForm.get('orders') as FormArray;
  }

  // Create FormGroup for each order
  createOrderFormGroup(order: any): FormGroup {
    return this.fb.group({
      id: [{ value: order.orderItemResponse.id, disabled: true }, Validators.required],
      productName: [order.orderItemResponse.productName, Validators.required],
      productPrice: [order.orderItemResponse.productPrice, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]], // Default quantity is 1
     
      // totalAmount: [order.orderItemResponse.productPrice], // Initial total amount is price * quantity
    });
  }

  // Populate the FormArray with API data
  populateOrdersFormArray(): void {
    this.orderData.forEach((order: any) => {
      this.orders.push(this.createOrderFormGroup(order));
    });
  }

  // Calculate the total amount based on quantity change
  onQuantityChange(index: number): void {
    const order = this.orders.at(index);
    const quantity = order.get('quantity')?.value;
    const productPrice = order.get('productPrice')?.value;

    // Calculate the total amount: price * quantity
    const totalAmount = productPrice * quantity;
    order.patchValue({ totalAmount });

    // Ensure quantity cannot be less than 1
    if (quantity < 1) {
      order.patchValue({ quantity: 1, totalAmount: productPrice });
    }

    // Recalculate the final price after quantity change
    this.calculateFinalPrice();
  }

  // Calculate the sum of all product prices
  calculateFinalPrice(): void {
    this.finalPrice = this.orders.controls.reduce((sum, order) => {
      const productPrice = order.get('productPrice')?.value || 0;
      const quantity = order.get('quantity')?.value || 1;
      return sum + productPrice * quantity;
    }, 0);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.orderForm.valid) {
      const formValue = this.orderForm.getRawValue();
      formValue.totalAmount=this.finalPrice;
      formValue.restaurantId=this.RestuarantId;
      formValue.customerId=this.customerId;
      console.log('Submitted Orders:', formValue);


      const { orders, ...rest } = formValue;
const updatedObj = { ...rest, orderItems: orders };

console.log(updatedObj);
this.api.createOrder(updatedObj).subscribe((res)=>{
  // console.log(res);
  //   console.log(res);
this.router.navigate(['all-order']);

  this.toastr.success("Great! Your order has been successfully placed.");
  
    
},((err)=>{
  this.toastr.error("Oops! Something went wrong while placing your order.");
  // console.log(err);
  
}))
      
      // let customerrrrrId=formValue.orders[0].customerId
      // console.log(customerrrrrId, "customerrrrrrrrrrrrrrrrrrr");
      console.log(this.customerId,"$$$$$$$$$$$$$$$$$$$$$$$");
      console.log(this.RestuarantId, "Restaurant IdDDDDDDDDDDDDDDDDDDDDDDDD");
      
      console.log('Final Price:', this.finalPrice);
      // Add your API call to submit the form data heorderre
    }
  }


}
 