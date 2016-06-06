import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'cart-display',
	templateUrl: 'app/templates/cart-display.template.html'
})

export class CartDisplayComponent {
	constructor(
		private router: Router,
		private cartService: CartService) { }
	
	goToCart() {
		this.router.navigate(["/cart"]);
	}
}
