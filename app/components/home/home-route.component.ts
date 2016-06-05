import { Component, Input } from "@angular/core";

import { TestimonialsComponent } from '../home/testimonials.component';

@Component({
	directives: [TestimonialsComponent],
	selector: '/home',
	templateUrl: 'app/templates/routes/home-route.template.html'
})

export class HomeRouteComponent {}