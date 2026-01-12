import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing-page-nav',
  templateUrl: './landing-page-nav.component.html',
  styleUrl: './landing-page-nav.component.scss'
})
export class LandingPageNavComponent {
  data:any=[]
id:any;
  envUrl:any;

  isLogin:boolean=false;
  constructor(private api:ApiService, private router:Router  , private toastr:ToastrService){

    let token= localStorage.getItem("token")
    // let token= true
    if (token) {
      this.isLogin=true;
      
    }else{this.isLogin=false;}

    this.envUrl=this.api.getEnvVar();

    this.id = localStorage.getItem("id");
    console.log(this.id);
    this.api.getAllCartByCustomerId(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
      
    },(err)=>{
      console.log(err);
      
    })

    
    
  }
  handleButtonClick(): void {
    if (this.isLogin) {
      console.log("iside login", this.isLogin);
      localStorage.clear();
      // Navigate to the login or home page
  this.router.navigate(['/']).then(() => {
    // Reload the application to reset the state
    window.location.reload();
  });

  // Optional: If you have a separate logout function, call it here
  // this.logout();

  // Optionally, display a toastr notification
  this.toastr.info('You have been logged out successfully.', 'Logout');
      // Logic for SignOut
      // this.logout();
    } else {
      console.log("iside logout");
      this.router.navigate(['auth'])
      // Logic for SignIn
      // this.login();
    }
  }

  handleOrderButtonClick(){
    this.router.navigate(['all-order'])
  }
  showUserList: boolean = false;

  // Navigate to update logic
  navigateToUpdate(id: any) {
    console.log("Navigating to update with ID:", id);
  }
  
  // Toggle the user list
  toggleUserList() {
    this.showUserList = !this.showUserList;
    console.log(this.showUserList, "Show User List State");
  }

  navigateToOrder(id:any){
    // console.log(id);
    this.showUserList = !this.showUserList;
    this.router.navigate(['add-order/'+id])
    
  }


  navigateToDelete(id:any){
    console.log(id,"####################");

    this.api.deleteCart(id).subscribe((res)=>{
      console.log(res);
      window.location.reload();
      
    },((err)=>{
      console.log(err);
      
    }))
    
  }
  

}
