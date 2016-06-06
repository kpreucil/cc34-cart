import { Component, Input } from '@angular/core';

import { InfoService } from '../../services/info.service';


@Component({
	selector: 'accordian',
	templateUrl: 'app/templates/accordian.template.html'
})

export class AccordianComponent {
	@Input() currInfo;

	constructor(
		private infoService: InfoService) { }

	showInfo() {
		/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
		let acc = document.getElementsByClassName("myAccordion");

		for (let i = 0; i < acc.length; i++) {
			acc[i].onclick = function() {
				this.classList.toggle("active");
				this.nextElementSibling.classList.toggle("show");
			}
		}
	}
}