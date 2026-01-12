import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RestaurantOwnerComponent } from './restaurant-owner.component';
import { OwnerRestLandingPageComponent } from './pages/owner-rest-landing-page/owner-rest-landing-page.component';
import { AllRestaurantComponent } from './pages/all-restaurant/all-restaurant.component';
import { RestaurantIdComponent } from './pages/restaurant-id/restaurant-id.component';
import { CreateRestaurantComponent } from './pages/create-restaurant/create-restaurant.component';
import { AllProductComponent } from './pages/product/all-product/all-product.component';
import { SingleProductComponent } from './pages/product/single-product/single-product.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { ProductComponent } from './pages/product/product/product.component';
import { OrderComponent } from './pages/order/order/order.component';
import { AllOrderComponent } from './pages/order/all-order/all-order.component';

const routes: Routes = [
  { path: '', component: OwnerRestLandingPageComponent },
  { path: 'restaurant', component: RestaurantComponent },
  {path:"all-restaurant",component:AllRestaurantComponent},
  {path:"restaurant/:id", component:RestaurantIdComponent},
  {path:"create-restaurant", component:CreateRestaurantComponent},
  {path:"product", component:ProductComponent},
  {path:"all-product", component:AllProductComponent},
  {path:"product/:id", component:SingleProductComponent},
  {path:"create-product",component:CreateProductComponent},
  {path:"order",component:OrderComponent},
  {path:"all-order",component:AllOrderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantOwnerRoutingModule { }
