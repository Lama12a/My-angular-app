// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

interface CartItem {
  id: number;
  image: string,  
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; 
  totalPrice =0;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items; 
      this.totalPrice = this.cartService.getTotalPrice(); 

    });
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}

