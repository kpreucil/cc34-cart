import { Component, Input } from "@angular/core";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'item-desc',
	templateUrl: 'app/templates/item-description.template.html'
})

export class ItemDescriptionComponent { 
	@Input() currItem;

	private itemQuantities = {
		paper_sm: 0,
		paper_md: 0,
		paper_lg: 0,
		canvas_sm: 0,
		canvas_md: 0,
		canvas_lg: 0
	}

	constructor (private cartService: CartService){}


	addToCart () {
		this.cartService.inventory.push({item: this.currItem, quantity: this.itemQuantities})
	}
}