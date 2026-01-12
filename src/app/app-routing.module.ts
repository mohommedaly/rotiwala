import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantOwnerComponent } from './restaurant-owner/restaurant-owner.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PasswordResetComponent } from './pages/auth/password-reset/password-reset.component';
import { AuthGuard } from './auth.guard';
// import { OrderComponent } from './pages/customer/order/order/order.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: '' },
  { path: '',component:CustomersComponent, loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'auth', component:AuthComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', component:AdminComponent,loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),  canActivate : [AuthGuard] },
  { path: 'restaurant-owner',component:RestaurantOwnerComponent, loadChildren: () => import('./restaurant-owner/restaurant-owner.module').then(m => m.RestaurantOwnerModule),canActivate : [AuthGuard] }
,{path:"login", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"password-reset", component:PasswordResetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
