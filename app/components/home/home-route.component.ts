import { Component, Input } from "@angular/core";

import { TestimonialsComponent } from '../home/testimonials.component';
import { PortfolioItemComponent } from '../portfolio/portfolio-item.component';

@Component({
	directives: [TestimonialsComponent, PortfolioItemComponent],
	selector: '/home',
	templateUrl: 'app/templates/routes/home-route.template.html'
})

export class HomeRouteComponent {}