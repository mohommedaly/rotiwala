import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantOwnerRoutingModule } from './restaurant-owner-routing.module';
import { RestaurantOwnerComponent } from './restaurant-owner.component';
import { OwnerRestNavComponent } from './pages/owner-rest-nav/owner-rest-nav.component';
import { OwnerRestFooterComponent } from './pages/owner-rest-footer/owner-rest-footer.component';
import { OwnerRestLandingPageComponent } from './pages/owner-rest-landing-page/owner-rest-landing-page.component';
import { CreateRestaurantComponent } from './pages/create-restaurant/create-restaurant.component';
import { AllRestaurantComponent } from './pages/all-restaurant/all-restaurant.component';
import { RestaurantIdComponent } from './pages/restaurant-id/restaurant-id.component';
import { AllProductComponent } from './pages/product/all-product/all-product.component';
import { SingleProductComponent } from './pages/product/single-product/single-product.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product/product.component';
import { OrderComponent } from './pages/order/order/order.component';
import { CreateOrderComponent } from './pages/order/create-order/create-order.component';
import { AllOrderComponent } from './pages/order/all-order/all-order.component';


@NgModule({
  declarations: [
    RestaurantOwnerComponent,
    OwnerRestNavComponent,
    OwnerRestFooterComponent,
    OwnerRestLandingPageComponent,
    CreateRestaurantComponent,
    AllRestaurantComponent,
    RestaurantIdComponent,
    AllProductComponent,
    SingleProductComponent,
    CreateProductComponent,
    RestaurantComponent,
    ProductComponent,
    OrderComponent,
    CreateOrderComponent,
    AllOrderComponent
  ],
  imports: [
    CommonModule,
    RestaurantOwnerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RestaurantOwnerModule { }
