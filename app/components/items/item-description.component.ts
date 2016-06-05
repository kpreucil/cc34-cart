import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'item-desc',
	templateUrl: 'app/templates/item-description.template.html'
})

export class ItemDescriptionComponent { 
	@Input() currItem;

	private itemQuantities = {
			paper: {
				sm: 0,
				md: 0,
				lg: 0
			},
			canvas: {
				sm: 0,
				md: 0,
				lg: 0
			}
		};

	constructor(
		private router: Router, 
		private cartService: CartService) { }

	openCart() {
		this.router.navigate(["/cart"]);
	}

	addToCart () {
		// this.cartService.inventory.push({item: this.currItem, quantity: this.itemQuantities})
		console.log( 'this is the currItem in addToCart', this.currItem);
		this.cartService.pushToCart(this.currItem, this.itemQuantities);

		//redirect to cart page?
		this.openCart();
	}
}