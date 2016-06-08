import { Injectable } from '@angular/core';

@Injectable()

export class CartService {
	private inventory = []

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
