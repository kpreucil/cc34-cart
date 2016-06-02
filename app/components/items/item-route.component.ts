import { Component, Input } from "@angular/core";
import { OnActivate, Router, RouteSegment } from '@angular/router';


import { ItemService } from '../../services/item.service';
import { ItemDescriptionComponent } from '../items/item-description.component';

@Component({
	directives: [ItemDescriptionComponent],
	selector: 'item-route',
	templateUrl: 'app/templates/routes/item-route.template.html'
})

export class ItemRouteComponent implements OnActivate{
	private currentItem;

	constructor(
		private itemService: ItemService,
		private router: Router) {
		}

	routerOnActivate(curr: RouteSegment): void {
		let id = curr.getParam('id');
		console.log(id);
		this.currentItem = this.itemService.getItemByID(id);
	}
}