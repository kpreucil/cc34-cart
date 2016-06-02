import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ItemService } from '../../services/item.service';

@Component({
	selector: 'shop-item',
	templateUrl: 'app/templates/shop-item.template.html'
})

export class ShopItemComponent {
	@Input() currItem;

	// private currentItem: Object = {};

	constructor (private router: Router, private itemService: ItemService){}
	
	openProduct () {
		this.router.navigate(["/item", this.currItem.id]);
	}
}
