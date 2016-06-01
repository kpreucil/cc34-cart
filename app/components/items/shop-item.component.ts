import { Component, Input } from "@angular/core";

@Component({
	selector: 'shop-item',
	templateUrl: 'app/templates/shop-item.template.html'
})

export class ShopItemComponent {
	@Input() thumb1: any;
	@Input() name: string;
	@Input() id: number;
	@Input() price: number;
}
