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
			size: {
				sm: '8 x 10',
				md: '11 x 14',
				lg: '16 x 20'
			},
			price: {
				paper: {
					sm: 15,
					md: 25,
					lg: 35
				},
				canvas: {
					sm: 23,
					md: 32,
					lg: 45,
				}
			}
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
			size: {
				sm: '8 x 10',
				md: '11 x 14',
				lg: '16 x 20'
			},
			price: {
				paper: {
					sm: 15,
					md: 25,
					lg: 35
				},
				canvas: {
					sm: 23,
					md: 32,
					lg: 45,
				}
			}
		}
	];

	getItemByID (id) {
		for (var i = 0; i < this.inventory.length; i++) {
			if (id == this.inventory[i].id) {
				return this.inventory[i]
			}
		}
	}
}