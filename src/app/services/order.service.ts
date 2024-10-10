import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private pastOrders: any[] = [];

  addOrder(order: any) {
    this.pastOrders.push(order);
  }

  getPastOrders() {
    return this.pastOrders;
  }
}
