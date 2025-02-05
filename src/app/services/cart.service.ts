import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  display: string = 'none'
  total: number = 0;
  constructor() { }

  addCount() {
    this.count++;
    this.display = 'block';
  }

  addAmount(price: number) {
    this.total += price;
  }

}
