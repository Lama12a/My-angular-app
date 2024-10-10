import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart changes and update the total quantity
    this.cartService.cart$.subscribe(() => {
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }
}