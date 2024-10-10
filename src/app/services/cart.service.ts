import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {  
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);
  
  cart$ = this.cart.asObservable();

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }

    this.cart.next(this.cartItems);
  }

  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.cart.next(this.cartItems);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cart.next(this.cartItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
