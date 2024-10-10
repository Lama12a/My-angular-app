import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testimonials = [
    {
      name: 'Amal',
      quote: 'The best dining experience I’ve ever had! The food is fresh, and the service is fantastic.',
      imageUrl: './assets/images/Profile.jpg'
    },
    {
      name: 'Lujin',
      quote: 'A perfect place for a family dinner! The farm-to-fork concept is truly reflected in every dish.',
      imageUrl: './assets/images/Profile.jpg'
    },
    {
      name: 'Mariam',
      quote: 'Delicious food, great atmosphere, and their focus on sustainability is impressive!',
      imageUrl: './assets/images/Profile.jpg'
    }
  ];

  featuredItems: any[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.featuredItems = this.menuService.getFeaturedItems();
  }
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
