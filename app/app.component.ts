
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { ShopRouteComponent } from './components/shop/shop-route.component';
import { NavComponent } from './components/navigation/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemRouteComponent } from './components/items/item-route.component';


@Component({
  selector: 'angular-app',
  directives: [ROUTER_DIRECTIVES, ItemRouteComponent, FooterComponent, NavComponent, ShopRouteComponent],
  template: `
  	<navigation></navigation>
  	<div>
  	 	<a [routerLink]="['/item']">Item</a>
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
		path: '/item',
		component: ItemRouteComponent
	}
])
export class AppComponent {
	constructor() {}
}