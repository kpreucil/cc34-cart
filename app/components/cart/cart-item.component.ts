import { Component, Input } from "@angular/core";

import { CartService } from '../../services/cart.service';


@Component({
	selector: 'cart-item',
	templateUrl: 'app/templates/cart-item.template.html'
})

export class CartItemComponent { 
	@Input() item;
	@Input() quantity;

	constructor(private cartService: CartService){}

	getAllItemTypes() {
		return Object.keys(this.quantity);
	}

	getAllItemSizes() {
		var sizes = [];
		for (let type in this.quantity) {
			for (let size in this.quantity[type]) {
				if (sizes.indexOf(size) == -1) {
					sizes.push(size);
				}
			}
		}
		console.log(sizes);
		return sizes;
	}
}