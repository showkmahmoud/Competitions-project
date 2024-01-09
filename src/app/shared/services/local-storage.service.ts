import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
    // Set data in local storage
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }

    // Get data from local storage
    getItem(key: string): any {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }

    // Remove data from local storage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

    // Clear all data from local storage
    clear(): void {
      localStorage.clear();
    }
}
