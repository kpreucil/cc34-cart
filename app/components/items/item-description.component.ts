import { Component, Input } from "@angular/core";

@Component({
	selector: 'item-desc',
	templateUrl: 'app/templates/item-description.template.html'
})

export class ItemDescriptionComponent { 
	@Input() thumb1: any;
	@Input() thumb2: any;
	@Input() thumb3: any;
	@Input() img1: any;
	@Input() img2: any;
	@Input() img3: any;
	@Input() name: string;
	@Input() id: number;
	@Input() price: number;
	@Input() description: string;
}