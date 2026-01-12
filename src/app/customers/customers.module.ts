import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { LandingPageNavComponent } from '../pages/customer/landing-page-nav/landing-page-nav.component';
import { LandingPageFooterComponent } from '../pages/customer/landing-page-footer/landing-page-footer.component';
import { LandingPageComponent } from '../pages/customer/landing-page/landing-page.component';
import { AllProductComponent } from '../pages/customer/product/all-product/all-product.component';
import { OrderComponent } from '../pages/customer/order/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AllOrderComponent } from '../pages/customer/order/all-order/all-order.component';
@NgModule({
  declarations: [
    CustomersComponent,
    LandingPageNavComponent,
    LandingPageFooterComponent,
    LandingPageComponent,
    AllProductComponent,
    OrderComponent,
    AllOrderComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    // CommonModule
  ]
})
export class CustomersModule { }
