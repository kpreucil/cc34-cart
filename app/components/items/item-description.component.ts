import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'item-desc',
	templateUrl: 'app/templates/item-description.template.html'
})

export class ItemDescriptionComponent { 
	@Input() currItem;
	largeImage: string;

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

	checkQuantities () {
		for (let type in this.itemQuantities) {
			for (let size in this.itemQuantities[type]) {
				if (this.itemQuantities[type][size] > 0) {
					return true;
				}
			}
		}
		return false;
	}

	addToCart () {
		if (this.checkQuantities()){
			this.cartService.pushToCart(this.currItem, this.itemQuantities);
			this.openCart();
		}
	}

	renderImage(currImage: any) {
		this.largeImage = currImage.lg
	}
	ngOnInit () {
		this.largeImage = this.currItem.images[0].lg;
	}
}