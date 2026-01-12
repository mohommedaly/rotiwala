import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { CustomerComponent } from './customer-pages/customer/customer.component';
import { AllCustomerComponent } from './customer-pages/all-customer/all-customer.component';
import { CustomerByIdComponent } from './customer-pages/customer-by-id/customer-by-id.component';
import { UpdateCustomerComponent } from './customer-pages/update-customer/update-customer.component';
import { CreateCustomerComponent } from './customer-pages/create-customer/create-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllRestaurantComponent } from './restaurant-page/all-restaurant/all-restaurant.component';
import { CreateRestaurantComponent } from './restaurant-page/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './restaurant-page/update-restaurant/update-restaurant.component';
import { RestaurantByIdComponent } from './restaurant-page/restaurant-by-id/restaurant-by-id.component';
import { RestaurantComponent } from './restaurant-page/restaurant/restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RestrOwnerComponent } from './restr-owner-pages/restr-owner/restr-owner.component';
import { AllRestrOwnerComponent } from './restr-owner-pages/all-restr-owner/all-restr-owner.component';
import { SingleRestrOwnerComponent } from './restr-owner-pages/single-restr-owner/single-restr-owner.component';
import { CreateRestrOwnerComponent } from './restr-owner-pages/create-restr-owner/create-restr-owner.component';
import { UpdateRestrOwnerComponent } from './restr-owner-pages/update-restr-owner/update-restr-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateDeliveryBoyComponent } from './delivery-boy-pages/create-delivery-boy/create-delivery-boy.component';
import { DeliveryBoysComponent } from './delivery-boy-pages/delivery-boys/delivery-boys.component';
import { AllDeliveryBoyComponent } from './delivery-boy-pages/all-delivery-boy/all-delivery-boy.component';
import { ProductLandingComponent } from './products-pages/product-landing/product-landing.component';
import { AllProductComponent } from './products-pages/all-product/all-product.component';
import { SingleProductComponent } from './products-pages/single-product/single-product.component';
import { AddProductComponent } from './products-pages/add-product/add-product.component';
import { OrderComponent } from './order-pages/order/order.component';
import { AllOrderComponent } from './order-pages/all-order/all-order.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    AdminFooterComponent,
    AdminLandingPageComponent,
    CustomerComponent,
    AllCustomerComponent,
    CustomerByIdComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    AllRestaurantComponent,
    CreateRestaurantComponent,
    UpdateRestaurantComponent,
    RestaurantByIdComponent,
    RestaurantComponent,
    RestrOwnerComponent,
    AllRestrOwnerComponent,
    SingleRestrOwnerComponent,
    CreateRestrOwnerComponent,
    UpdateRestrOwnerComponent,
    CreateDeliveryBoyComponent,
    DeliveryBoysComponent,
    AllDeliveryBoyComponent,
    ProductLandingComponent,
    AllProductComponent,
    SingleProductComponent,
    AddProductComponent,
    OrderComponent,
    AllOrderComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    ToastrModule.forRoot(
      {  positionClass: 'toast-center-center'}
    ) ,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
