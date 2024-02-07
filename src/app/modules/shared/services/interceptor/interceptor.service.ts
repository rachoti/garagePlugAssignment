import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map, tap, throwError } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService,
    ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    // this.loadingService.showLoading();
    // return next.handle(req).pipe(
    //   finalize(() => {
    //     this.loadingService.stopLoading();
    //   }),
    // ); 

    return next.handle(headerReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Handle successful response here
          console.log('Response status:', event.status);
          // this.loadingService.stopLoading();
          console.log('Response body:', event.body);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle error response here
        console.error('Error status:', error.status);
        // this.loadingService.stopLoading();
        console.error('Error message:', error.message);
        return throwError(error);
      })
    );
  }
}
