import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RestaurantLoginComponent } from './pages/restaurant-login/restaurant-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegiterComponent } from './pages/regiter/regiter.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
// import { AuthInterceptorService } from './auth-interceptor.service';


@NgModule({
  declarations: [
    AuthComponent,
    RestaurantLoginComponent,
    RegiterComponent,
    ForgetPasswordComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
