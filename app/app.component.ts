
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { ShopRouteComponent } from './components/shop/shop-route.component';
import { NavComponent } from './components/navigation/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'angular-app',
  directives: [FooterComponent, NavComponent, ShopRouteComponent, ROUTER_DIRECTIVES],
  template: `
  	<navigation></navigation>
  	<div>
  	 	<a [routerLink]="['/shop']">Art Shop</a>
  		<router-outlet></router-outlet>
  	</div>
  	<footer></footer>
  `
})
@Routes([
	{
		path: '/shop',
		component: ShopRouteComponent
	}
])
export class AppComponent {
	constructor() {}
}