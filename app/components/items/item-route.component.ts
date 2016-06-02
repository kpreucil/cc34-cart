import { Component, Input } from "@angular/core";
import { OnActivate, Router, RouteSegment } from '@angular/router';


import { ItemService } from '../../services/item.service';
import { ItemDescriptionComponent } from '../items/item-description.component';
import { ShopItemComponent } from '../items/shop-item.component';


@Component({
	directives: [ItemDescriptionComponent, ShopItemComponent],
	selector: 'item-route',
	templateUrl: 'app/templates/routes/item-route.template.html'
})

export class ItemRouteComponent implements OnActivate{
	constructor(
		private itemService: ItemService,
		private router: Router) {}

	routerOnActivate(curr: RouteSegment): void {
		let id = curr.getParam('id');
		console.log(id);
	}
}