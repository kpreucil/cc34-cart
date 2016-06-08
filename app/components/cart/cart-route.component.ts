import { Component, Input } from "@angular/core";

import { CartItemComponent } from '../cart/cart-item.component';
import { CartTotalComponent } from '../cart/cart-total.component';
import { CartService } from '../../services/cart.service';

@Component({
	directives: [CartItemComponent, CartTotalComponent],
	selector: 'cart',
	templateUrl: 'app/templates/routes/cart-route.template.html'
})

export class CartRouteComponent {
	constructor(private cartService: CartService) {
	}

	shouldShowItem(quantity) {
		for (let i = 0; i < quantity.length; i++) {
			if (quantity[i] = 0 && quantity[i] != "") {
				return false;
			}
			return true;
		}
	 //    loop through each quantity
		// if they all sum to 0
		// and none of them is ""
		// return false
	 //    return true
	}
}