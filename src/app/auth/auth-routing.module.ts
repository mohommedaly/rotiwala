import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { RestaurantLoginComponent } from './pages/restaurant-login/restaurant-login.component';
import { RegiterComponent } from './pages/regiter/regiter.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';

const routes: Routes = [{ path: '', component: RestaurantLoginComponent },
  { path: 'register', component: RegiterComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'reset-password', component: ResetPassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
