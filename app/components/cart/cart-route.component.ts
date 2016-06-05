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
}