import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-by-id',
  templateUrl: './restaurant-by-id.component.html',
  styleUrl: './restaurant-by-id.component.scss'
})
export class RestaurantByIdComponent {
  ownerData!:any
  envUrl?:any;
  constructor(private api:ApiService, private activate_route:ActivatedRoute, private router:Router){
this.envUrl = this.api.getEnvVar()
 
  }

  ngOnInit(){
    let id= this.activate_route.snapshot.params["id"];
    console.log(id,'+++++++++++++++++++++++++');

    this.api.getRestauraById(id).subscribe((res:any)=>{
console.log(res);
this.ownerData=res;

    },(err:any)=>{
      console.log(err);
      
    })
    
  }


}
