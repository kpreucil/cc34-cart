import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartItemComponent } from '../cart/cart-item.component';
import { CartTotalComponent } from '../cart/cart-total.component';
import { CartService } from '../../services/cart.service';
import { ThankYouComponent } from '../cart/thank-you.component';

@Component({
	directives: [CartItemComponent, CartTotalComponent, ThankYouComponent],
	selector: 'checkout',
	templateUrl: 'app/templates/routes/checkout-route.template.html'
})

export class CheckoutRouteComponent {
	private billingSame: boolean = false;

	constructor(
		private cartService: CartService,
		private router: Router
		){}
}