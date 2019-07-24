import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  setStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage(key: string) {
    const storage = localStorage.getItem(key);
    if (storage) {
      const cache = JSON.parse(storage);
      return cache;
    } else {
      return null;
    }
  }
}
