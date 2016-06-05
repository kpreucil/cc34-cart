
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { ShopRouteComponent } from './components/shop/shop-route.component';
import { NavComponent } from './components/navigation/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemRouteComponent } from './components/items/item-route.component';
import { CartRouteComponent } from './components/cart/cart-route.component';
import { HomeRouteComponent } from './components/home/home-route.component';
import { AboutRouteComponent } from './components/about/about-route.component';



@Component({
  selector: 'angular-app',
  directives: [ROUTER_DIRECTIVES, ItemRouteComponent, FooterComponent, NavComponent, ShopRouteComponent, CartRouteComponent, HomeRouteComponent, AboutRouteComponent],
  template: `
  	<navigation></navigation>
  	<div>
  		<router-outlet></router-outlet>
  	</div>
  	<footer></footer>
  `
})
@Routes([
    {
      path: '/home',
      component: HomeRouteComponent
    },
    {
      path: '/about',
      component: AboutRouteComponent
    },
	{
		path: '/shop',
		component: ShopRouteComponent
	},
	{
		path: '/item/:id',
		component: ItemRouteComponent
	},
	{	path: '/cart',
		component: CartRouteComponent
	}
])
export class AppComponent {
	constructor() {}
}