import { Component, Input } from "@angular/core";

import { ItemService } from '../../services/item.service';
import { ItemDescriptionComponent } from '../items/item-description.component';


@Component({
	directives: [ItemDescriptionComponent],
	selector: 'item-route',
	templateUrl: 'app/templates/routes/item-route.template.html'
})

export class ItemRouteComponent {
	constructor(private itemService: ItemService) {

	}
}