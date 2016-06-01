import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";


@Component({
	selector: 'navigation',
	templateUrl: 'app/templates/nav.template.html'
})

export class NavComponent {
	constructor (private router: Router) {

	}
	goToRoute(route) {
		this.router.navigate([route]);
	}
}