import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from '../../services/cart.service';

@Component({
	selector: 'navigation',
	templateUrl: 'app/templates/nav.template.html'
})

export class NavComponent {
	constructor (
		private router: Router,
		private cartService: CartService
		) {

	}
	goToRoute(route) {
		this.router.navigate([route]);
	}
}