import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) { }

  get(keyName: string, url: string): Observable<any> {
    const cachedData = this.cacheService.get(keyName);
    if (cachedData) {
      return new Observable((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpClient.get<any>(url).pipe(
        tap((data) => {
          this.cacheService.set(keyName, data);
        })
      );
    }
  }

  post(keyName: string, url: string, body = {}): Observable<any> {
    const cachedData = this.cacheService.get(keyName);
    if (cachedData) {
      return new Observable((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpClient.post<any>(url, body).pipe(
        tap((data) => {
          this.cacheService.set(keyName, data);
        })
      );
    }
  }

  put(keyName: string, url: string, body = {}): Observable<any> {
    const cachedData = this.cacheService.get(keyName);
    if (cachedData) {
      return new Observable((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpClient.put<any>(url, body).pipe(
        tap((data) => {
          this.cacheService.set(keyName, data);
        })
      );
    }
  }

  detele(keyName: string, url: string): Observable<any> {
    const cachedData = this.cacheService.get(keyName);
    if (cachedData) {
      return new Observable((observer) => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpClient.delete<any>(url).pipe(
        tap((data) => {
          this.cacheService.set(keyName, data);
        })
      );
    }
  }
}
