import { Injectable } from '@angular/core';

@Injectable()

export class CartService {
	private inventory = [
		{
			"item":{"thumb1":"assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png","thumb2":"assets/ images/1-collection/figure-tutu/thumbnails/figure_tutu.png","thumb3":"assets/ images/1-collection/figure-tutu/thumbnails/figure_tutu.png","img1":"assets/images/1-collection/figure-tutu/figure_tutu_lg.png","img2":"assets/images/1-collection/figure-tutu/figure_tutu_lg.png","img3":"assets/images/1-collection/figure-tutu/figure_tutu_lg.png","name":"Goodbye","id":9347575,"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer mollis egestas aliquet.Quisque ut feugiat risus.Vestibulum dictum iaculis ipsum, eget aliquam neque.Nam id eros euismod, commodo ante quis, malesuada augue.Cras diam ex, molestie non vulputate in, pretium dapibus ante.Donec imperdiet porta massa ut condimentum.Integer libero ante, tincidunt sit amet fermentum in, consectetur ut nisl.Maecenas molestie blandit egestas.Donec malesuada odio nec felis malesuada porta.Cras vitae felis convallis, hendrerit erat eu, hendrerit diam.Donec blandit, ligula in gravida posuere, dui ipsum auctor tortor, tristique sodales enim urna ac purus.","size":{"sm":"8 x 10","md":"11 x 14","lg":"16 x 20"},"price":{"paper":{"sm":15,"md":25,"lg":35},"canvas":{"sm":23,"md":32,"lg":45}}},"quantity":{"paper":{"sm":1,"md":0,"lg":0},"canvas":{"sm":0,"md":0,"lg":0}}}
	]

	public totals; 

	pushToCart (item, quantities) {
		this.inventory.push(
			{
				item: item,
				quantity: quantities
			});
		console.log('this is the cart inventory' , this.inventory);
		this.getCartItemCount();
		this.getCartTotal();
		// this.getCartTotal(itemTotals);
	}

	deleteFromCart (item) {
		for (let i = 0; i < this.inventory.length; i++) {
			if (this.inventory[i].item == item) {
				this.inventory.splice(i, 1);
				return;
			}
		}
	}

	getCartItemCount() {
		let sum = 0;
		// debugger;
		for (let i = 0; i < this.inventory.length; i++) {
			console.log('this is getCartItemCount', this.inventory[i].quantity);
			for (let type in this.inventory[i].quantity) {
				console.log('this is type getCartItemCount', type);
				for (let size in this.inventory[i].quantity[type]) {
					let num = parseInt(this.inventory[i].quantity[type][size]);
					if (num) {
						sum += num;
					}
					
				}
			}
		}
		console.log('this is the cartItem count', sum);
		return sum;
		
	}

	getCartTotal() {
	    let sum = 0;
	    for (let i = 0; i < this.inventory.length; i++) {
	        let item = this.inventory[i].item;
	        let quantity = this.inventory[i].quantity;

	        for (let type in quantity) {
	            for (let size in quantity[type]) {
	                sum += quantity[type][size] * item.price[type][size];
	            }
	        }
	    }
		console.log('this is the cartTotal', sum);
		this.totals = sum
		console.log('this.totals', this.totals);
		return this.totals;
	}

}
