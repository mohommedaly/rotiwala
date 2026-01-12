import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { LandingPageComponent } from '../pages/customer/landing-page/landing-page.component';
import { AllProductComponent } from '../pages/customer/product/all-product/all-product.component';
import { OrderComponent } from '../pages/customer/order/order/order.component';
import { AllOrderComponent } from '../pages/customer/order/all-order/all-order.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
  {path:"all-product/:id",component: AllProductComponent},
  {path:"add-order/:id", component:OrderComponent},
  {path:"all-order", component:AllOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
