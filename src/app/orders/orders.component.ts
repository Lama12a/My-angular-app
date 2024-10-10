import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  pastOrders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.pastOrders = this.orderService.getPastOrders(); 
  }
}
