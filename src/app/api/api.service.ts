import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: String = environment.hostUrlNgrock;


    // Check if the user is logged in
    isLoggedIn(): boolean {
      const token = localStorage.getItem('token');
      return !!token && !this.isTokenExpired(token); // Ensure token exists and is valid
    }

    private isTokenExpired(token: string): boolean {
      const payload = JSON.parse(atob(token.split('.')[1]));

      console.log(token );
      console.log(payload,"PPPPPPPPPPPPPPPPPPPP" );
      
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() > expiry;
    }

  public getEnvVar(){
    return this.baseUrl
  }

  constructor(private http: HttpClient) {
    // console.log(this.baseUrl);

  }


  // public signUp(data:any){
  //   return this.http.post(this.baseUrl + "/api/auth/forgot-password",data)
  // }
  public verifyEmail(data:any){
    return this.http.post(this.baseUrl + "/api/auth/forgot-password",data)
  }
  public resetPassword(data:any){
    return this.http.post(this.baseUrl + "/api/auth/reset-password",data)
  }


  signIn(data:any) {
    return this.http.post(this.baseUrl + "/api/auth/v1/signin",data)
  }

  signUp(data:any) {
    return this.http.post(this.baseUrl + "/api/auth/verify-otp",data)
  }

  getAllCustomer(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

       
    // return this.http.get(this.baseUrl +"customers" )
    return this.http.get(this.baseUrl +"/api/customers/all",{headers} )
  }
  getCustomerById(id:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    
    // return this.http.get(this.baseUrl +"customers" )
    return this.http.get(this.baseUrl +"/api/customers/"+id,{headers} )
  }
  getRestaurantById(id:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    }); 


    
    // return this.http.get(this.baseUrl +"customers" )
    return this.http.get(this.baseUrl +"/api/OwnerInfo/"+id ,{headers})
  }
  getRestauraById(id:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    }); 


    
    // return this.http.get(this.baseUrl +"customers" )
    return this.http.get(this.baseUrl +"/api/Restaurant/"+id ,{headers})
  }
  getProductById(id:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    // return this.http.get(this.baseUrl +"customers" )
    return this.http.get(this.baseUrl +"/api/orderItems/"+id, {headers} )
  }
  getAllRetaurantOwner(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl +"/api/OwnerInfo/all",{headers})
  }
  getAllRetaurant(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl +"/api/Restaurant/all",{headers})
  }
  getAllProduct(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl +"/api/orderItems/all",{headers})
  }
  getAllOrderByCustomer_Id(customerId:any){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl +"/api/orders/"+customerId+"/orders",{headers})
  }


 createRestaurantOwner(data:any){
  return this.http.post(this.baseUrl +"/api/OwnerInfo/create", data)
 }
  createCustomer(data: any) {
    return this.http.post(this.baseUrl+"/api/customers/create", data);
  }
  createRestaurant(data: any) {
    return this.http.post(this.baseUrl+"/api/Restaurant/create", data);
  }
  createProduct(data: any) {
    return this.http.post(this.baseUrl+"/api/orderItems/create", data);
  }
  getIdByUserameOfRestaurantOwer(data: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/OwnerInfo/getOwnerInfoIdByUsername/"+ data, {headers});
  }
  getIdByUserameOfCustomer(data: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/customers/getCustomerIdByUsername/"+ data, {headers});
  }
  getAllRestaurantByRestaurantOwerId(data: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/Restaurant/owners/"+ data, {headers});
  }
  getAllProductByRestaurantId(data: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/orderItems/Restaurant/"+ data, {headers});
  }
  getAllOrdertByRestaurantId(data: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/orders/restaurant/"+ data, {headers});
  }


  AddCart(productId: any, customer_id:any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/cart/add/"+ productId+"/"+customer_id, {headers});
  }
  getAllCartByCustomerId(customerId: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/cart/all/"+customerId, {headers});
  }
  deleteCart(productId: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.delete(this.baseUrl+"/api/cart/remove-product/"+productId, {headers});
  }
  RestaurantIdByProductId(productId: any) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });

    return this.http.get(this.baseUrl+"/api/orderItems/"+productId+"/restaurant", {headers});
  }

  //orders


  // create orders
  createOrder(data: any) {
    return this.http.post(this.baseUrl+"/api/orders/create", data);
  }

}
