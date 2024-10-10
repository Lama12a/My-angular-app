import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service'; 
import Swal from 'sweetalert2';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  starters: any[] = [];
  mainCourses: any[] = [];
  sides: any[] = [];
  desserts: any[] = [];
  beverages: any[] = [];
  selectedItem: any = null; 

  constructor(private menuService: MenuService, private cartService: CartService) {} 


  ngOnInit(): void {
    const menuItems = this.menuService.getMenu();
    this.starters = menuItems.filter(m => m.category === 'Starters');
    this.mainCourses = menuItems.filter(m => m.category === 'Main Courses');
    this.sides = menuItems.filter(m => m.category === 'Sides');
    this.desserts = menuItems.filter(m => m.category === 'Desserts');
    this.beverages = menuItems.filter(m => m.category === 'Beverages');
  }

  openDetail(item: any) {
    console.log('Opening details for:', item);
    this.selectedItem = item;
  }

  closeDetail() {
    this.selectedItem = null; 
  }

  addToCart(item: any ): void {
    if (item) {
      const cartItem = {
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        quantity: 1 
      };

      this.cartService.addToCart(cartItem); 

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added to cart:',
        showConfirmButton: false,
        timer: 1500
      });

      console.log('Item added to cart:', cartItem);
    }
  }
}

