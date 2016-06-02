import { Component, Input } from "@angular/core";

@Component({
	selector: 'item-desc',
	templateUrl: 'app/templates/item-description.template.html'
})

export class ItemDescriptionComponent { 
	@Input() currItem;
}