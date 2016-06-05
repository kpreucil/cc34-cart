
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { ShopRouteComponent } from './components/shop/shop-route.component';
import { NavComponent } from './components/navigation/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemRouteComponent } from './components/items/item-route.component';
import { CartRouteComponent } from './components/cart/cart-route.component';


@Component({
  selector: 'angular-app',
  directives: [ROUTER_DIRECTIVES, ItemRouteComponent, FooterComponent, NavComponent, ShopRouteComponent, CartRouteComponent],
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