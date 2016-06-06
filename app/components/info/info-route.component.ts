import { Component, Input } from "@angular/core";

import { AccordianComponent } from '../info/accordian.component';
import { InfoService } from '../../services/info.service';

@Component({
	directives: [AccordianComponent],
	selector: '/info',
	templateUrl: 'app/templates/routes/info-route.template.html'
})

export class InfoRouteComponent { 
	constructor(private infoService: InfoService) {

	}
}