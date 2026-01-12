import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-restr-owner',
  templateUrl: './single-restr-owner.component.html',
  styleUrl: './single-restr-owner.component.scss'
})
export class SingleRestrOwnerComponent {
  ownerData!:any
  envUrl?:any;
  constructor(private api:ApiService, private activate_route:ActivatedRoute, private router:Router){
this.envUrl = this.api.getEnvVar()
 
  }

  ngOnInit(){
    let id= this.activate_route.snapshot.params["id"];
    console.log(id,'+++++++++++++++++++++++++');

    this.api.getRestaurantById(id).subscribe((res:any)=>{
console.log(res);
this.ownerData=res;

    },(err)=>{
      console.log(err);
      
    })
    
  }

}
