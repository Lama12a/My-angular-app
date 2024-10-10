import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const itemId = +id; 
      this.item = this.menuService.getMenu().find(item => item.id === itemId);
    } else {
      
      console.error('Item ID not found');
 
    }
  }

  addToCart(): void {
    if (this.item) {
      const cartItem = {
        id: this.item.id,
        image: this.item.image,
        name: this.item.name,
        price: this.item.price,
        quantity: 1 
      };

      this.cartService.addToCart(cartItem); 

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added to cart',
        showConfirmButton: false,
        timer: 1500
      });

      console.log('Item added to cart:', cartItem);
    }
  }

  returnToMenu(): void {
    this.router.navigate(['/menu']); 
  }
}
