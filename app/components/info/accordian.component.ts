import { Component, Input } from '@angular/core';
// import {enableProdMode} from '@angular/core';

import { InfoService } from '../../services/info.service';

// enableProdMode();

@Component({
	selector: 'accordian',
	templateUrl: 'app/templates/accordian.template.html'
})

export class AccordianComponent {
	@Input() currInfo;

	constructor(
		private infoService: InfoService) { }
}