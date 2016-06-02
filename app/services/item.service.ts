import { Injectable } from "@angular/core";

@Injectable()

export class ItemService{
	public inventory = [
		{
			thumb1: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			thumb2: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			thumb3: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			img1: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			img2: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			img3: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			name: "Hello",
			id: 1239658,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis egestas aliquet. Quisque ut feugiat risus. Vestibulum dictum iaculis ipsum, eget aliquam neque. Nam id eros euismod, commodo ante quis, malesuada augue.Cras diam ex, molestie non vulputate in, pretium dapibus ante. Donec imperdiet porta massa ut condimentum. Integer libero ante, tincidunt sit amet fermentum in, consectetur ut nisl. Maecenas molestie blandit egestas. Donec malesuada odio nec felis malesuada porta.Cras vitae felis convallis, hendrerit erat eu, hendrerit diam.Donec blandit, ligula in gravida posuere, dui ipsum auctor tortor, tristique sodales enim urna ac purus.",
			paperSm: 15,
			paperMd: 25,
			paperLg: 35,
			canvasSm: 23,
			canvasMd: 32,
			canvasLg: 45,
			sizeSm: '8 x 10',
			sizeMd: '11 x 14',
			sizeLg: '16 x 20'
		},
		{
			thumb1: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			thumb2: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			thumb3: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
			img1: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			img2: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			img3: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
			name: "Goodbye",
			id: 9347575,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis egestas aliquet. Quisque ut feugiat risus. Vestibulum dictum iaculis ipsum, eget aliquam neque. Nam id eros euismod, commodo ante quis, malesuada augue.Cras diam ex, molestie non vulputate in, pretium dapibus ante. Donec imperdiet porta massa ut condimentum. Integer libero ante, tincidunt sit amet fermentum in, consectetur ut nisl. Maecenas molestie blandit egestas. Donec malesuada odio nec felis malesuada porta.Cras vitae felis convallis, hendrerit erat eu, hendrerit diam.Donec blandit, ligula in gravida posuere, dui ipsum auctor tortor, tristique sodales enim urna ac purus.",
			paperSm: 15,
			paperMd: 25,
			paperLg: 35,
			canvasSm: 23,
			canvasMd: 32,
			canvasLg: 45,
			sizeSm: '8 x 10',
			sizeMd: '11 x 14',
			sizeLg: '16 x 20'
		},
	];

	getItemByID (id) {
		for (var i = 0; i < this.inventory.length; i++) {
			if (id == this.inventory[i].id) {
				return this.inventory[i]
			}
		}
	}
}