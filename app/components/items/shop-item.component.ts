import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ItemService } from '../../services/item.service';

@Component({
	selector: 'shop-item',
	templateUrl: 'app/templates/shop-item.template.html'
})

export class ShopItemComponent {
	@Input() thumb1: any;
	@Input() name: string;
	@Input() id: number;
	@Input() price: number;

	public currentItem: Object = {};

	constructor (private router: Router, private itemService: ItemService){}
	
	openProduct () {
		this.router.navigate(["/item", this.id]);
		let getItem = this.itemService.getItemByID(this.id);
		console.log('This is getItem', getItem);
		console.log('what type is currentItem?', typeof(this.currentItem));
		let currentItem = getItem;
		console.log( 'What is currentItem?' currentItem);
	}
}
