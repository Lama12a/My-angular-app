import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderService } from './services/order.service';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'cart', component:CartComponent},
  { path: 'checkout', component:CheckoutComponent},
  { path: 'orders', component:OrdersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
