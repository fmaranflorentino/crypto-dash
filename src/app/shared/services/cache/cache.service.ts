import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  setStorage(key: string, value: any, params?: any) {
    const now = new Date();
    const expireIn = new Date(now);
    expireIn.setMinutes(now.getMinutes() + 30);
    localStorage.setItem(JSON.stringify({ key, params }), JSON.stringify({ value, params, expireIn }));
  }

  getStorage(key: string, params?: any) {
    const now = new Date();
    const storage = localStorage.getItem(JSON.stringify({ key, params }));
    if (storage) {
      const cache = JSON.parse(storage);

      if (new Date(cache.expireIn) < now) {
        localStorage.removeItem(key);
        return null;
      } else {
        return cache.value;
      }
    } else {
      return null;
    }
  }
}
