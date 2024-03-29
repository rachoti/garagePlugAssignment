import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  constructor() {}

  set(key: string, value: any) {
    this.cache[key] = value;
  }

  get(key: string): any {
    return this.cache[key];
  }

  remove(key: string) {
    delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }
}
