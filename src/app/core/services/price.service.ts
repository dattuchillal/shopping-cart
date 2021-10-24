import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private totalCartPrice = 0;
  private price = new BehaviorSubject<number | 0>(0);
  priceChanges$ = this.price.asObservable();

  constructor() { }

  addPrice(price: number): void {
    this.totalCartPrice += price;
    this.price.next(this.totalCartPrice);
  }

  deductPrice(price: number): void {
    this.totalCartPrice -= price;
    this.price.next(this.totalCartPrice);
  }
}
