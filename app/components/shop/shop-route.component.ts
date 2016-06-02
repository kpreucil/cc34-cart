import { Component, Input } from "@angular/core";

import { ShopItemComponent } from '../items/shop-item.component';
import { ItemService } from '../../services/item.service';
import { CartDisplayComponent } from '../cart/cart-display.component';

@Component({
	directives: [ShopItemComponent, CartDisplayComponent],
	selector: 'shop',
	templateUrl: 'app/templates/routes/shop-route.template.html'
})

export class ShopRouteComponent { 
	constructor(private itemService: ItemService) {
		
	}
}