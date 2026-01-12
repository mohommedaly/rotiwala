// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let token: string | null = localStorage.getItem('token');
    
//     console.log("Token in interceptor:", token);  // Confirm token availability
  
//     const authReq = token ? req.clone({
//       setHeaders: { Authorization: `Bearer ${token}` }
//     }) : req;
  
//     console.log("Request headers:", authReq.headers.get('Authorization'));  // Log headers to check if Authorization is set
  
//     return next.handle(authReq);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Check if running in a browser environment
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log("Token retrieved in interceptor:", token);

      // Clone the request and add the token to the headers
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    // Pass the cloned request to the next interceptor or handler
    return next.handle(request);
  }
}
