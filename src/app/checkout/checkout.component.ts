import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { OrderService } from '../services/order.service'; // Import OrderService
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  user = { name: '', address: '', paymentMethod: '' }; 

  constructor(public cartService: CartService, private orderService: OrderService) {} // Inject OrderService

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Cart is empty',
        text: 'Please add items to your cart before proceeding to checkout.',
      });
      return;
    }

    if (!this.user.name || !this.user.address || !this.user.paymentMethod) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Information',
        text: 'Please fill in all fields before placing your order.',
      });
      return;
    }

    const order = {
      id: new Date().getTime(), 
      user: this.user,
      items: this.cartItems,
      totalPrice: this.totalPrice
    };

    this.orderService.addOrder(order); 

    this.user = { name: '', address: '', paymentMethod: '' }; 
    this.cartService.clearCart(); 

    Swal.fire({
      icon: 'success',
      title: 'Order placed!',
      text: 'Thank you for your order. We will process it shortly.',
    });
  }
}
