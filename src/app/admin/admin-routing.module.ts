import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { CustomerComponent } from './customer-pages/customer/customer.component';
import { AllCustomerComponent } from './customer-pages/all-customer/all-customer.component';
import { CreateCustomerComponent } from './customer-pages/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer-pages/update-customer/update-customer.component';
import { RestaurantComponent } from './restaurant-page/restaurant/restaurant.component';
import { AllRestaurantComponent } from './restaurant-page/all-restaurant/all-restaurant.component';
import { CreateRestaurantComponent } from './restaurant-page/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './restaurant-page/update-restaurant/update-restaurant.component';
import { RestaurantByIdComponent } from './restaurant-page/restaurant-by-id/restaurant-by-id.component';
import { CustomerByIdComponent } from './customer-pages/customer-by-id/customer-by-id.component';
import { RestrOwnerComponent } from './restr-owner-pages/restr-owner/restr-owner.component';
import { CreateRestrOwnerComponent } from './restr-owner-pages/create-restr-owner/create-restr-owner.component';
import { AllRestrOwnerComponent } from './restr-owner-pages/all-restr-owner/all-restr-owner.component';
import { CreateDeliveryBoyComponent } from './delivery-boy-pages/create-delivery-boy/create-delivery-boy.component';
import { DeliveryBoysComponent } from './delivery-boy-pages/delivery-boys/delivery-boys.component';
import { AllDeliveryBoyComponent } from './delivery-boy-pages/all-delivery-boy/all-delivery-boy.component';
import { SingleRestrOwnerComponent } from './restr-owner-pages/single-restr-owner/single-restr-owner.component';
import { ProductLandingComponent } from './products-pages/product-landing/product-landing.component';
import { AddProductComponent } from './products-pages/add-product/add-product.component';
import { AllProductComponent } from './products-pages/all-product/all-product.component';
import { SingleProductComponent } from './products-pages/single-product/single-product.component';
import { OrderComponent } from './order-pages/order/order.component';
import { AllOrderComponent } from './order-pages/all-order/all-order.component';

const routes: Routes = [{ path: '', component: AdminLandingPageComponent },
  {path:"customer",component:CustomerComponent},
  {path:"all-customer",component:AllCustomerComponent},
  {path:"create-customer",component:CreateCustomerComponent},
  {path:"customer/:id",component:CustomerByIdComponent},
  {path:"update-customer/:id",component:UpdateCustomerComponent},
  {path:"restaurant",component:RestaurantComponent},
  {path:"all-restaurant",component:AllRestaurantComponent},
  {path:"create-restaurant",component:CreateRestaurantComponent},
  {path:"update-restaurant/:id",component:UpdateRestaurantComponent},
  {path:"restaurant/:id",component:RestaurantByIdComponent},
  {path:"restaurant-owner",component:RestrOwnerComponent},
  {path:"create-restaurant-owner",component:CreateRestrOwnerComponent},
  {path:"all-restaurant-owner",component:AllRestrOwnerComponent},
  {path:"restaurant-owner/:id",component:SingleRestrOwnerComponent},
  {path:"delivery-boy",component:DeliveryBoysComponent},
  {path:"all-delivery-boy",component:AllDeliveryBoyComponent},
  {path:"create-delivery-boy",component:CreateDeliveryBoyComponent},
  {path:"product",component:ProductLandingComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"all-product",component:AllProductComponent},
  {path:"product/:id",component:SingleProductComponent},
  {path:"order",component:OrderComponent},
  {path:"all-order",component:AllOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
