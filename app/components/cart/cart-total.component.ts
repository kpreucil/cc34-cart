import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'cart-total',
	templateUrl: 'app/templates/cart-total.template.html'
})

export class CartTotalComponent {
	// constructor(
	// 	private router: Router) { }

	// goToCheckout() {
	// 	this.router.navigate(["/checkout"]);
	// }
}
