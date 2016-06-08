"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CartService = (function () {
    function CartService() {
        this.inventory = [];
    }
    CartService.prototype.pushToCart = function (item, quantities) {
        this.inventory.push({
            item: item,
            quantity: quantities
        });
        console.log('this is the cart inventory', this.inventory);
        this.getCartItemCount();
        this.getCartTotal();
        // this.getCartTotal(itemTotals);
    };
    CartService.prototype.deleteFromCart = function (item) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].item == item) {
                this.inventory.splice(i, 1);
                return;
            }
        }
    };
    CartService.prototype.getCartItemCount = function () {
        var sum = 0;
        // debugger;
        for (var i = 0; i < this.inventory.length; i++) {
            console.log('this is getCartItemCount', this.inventory[i].quantity);
            for (var type in this.inventory[i].quantity) {
                console.log('this is type getCartItemCount', type);
                for (var size in this.inventory[i].quantity[type]) {
                    var num = parseInt(this.inventory[i].quantity[type][size]);
                    if (num) {
                        sum += num;
                    }
                }
            }
        }
        console.log('this is the cartItem count', sum);
        return sum;
    };
    CartService.prototype.getCartTotal = function () {
        var sum = 0;
        for (var i = 0; i < this.inventory.length; i++) {
            var item = this.inventory[i].item;
            var quantity = this.inventory[i].quantity;
            for (var type in quantity) {
                for (var size in quantity[type]) {
                    sum += quantity[type][size] * item.price[type][size];
                }
            }
        }
        console.log('this is the cartTotal', sum);
        this.totals = sum;
        console.log('this.totals', this.totals);
        return this.totals;
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map