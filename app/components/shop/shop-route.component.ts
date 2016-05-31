import { Component, Input } from "@angular/core";

import { ShopItemComponent } from '../items/shop-item.component';

@Component({
	directives: [ShopItemComponent],
	selector: 'shop',
	templateUrl: 'app/templates/routes/shop-route.template.html'
})

export class ShopRouteComponent { }