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
var core_1 = require("@angular/core");
var cart_service_1 = require('../../services/cart.service');
var CartItemComponent = (function () {
    function CartItemComponent(cartService) {
        this.cartService = cartService;
    }
    CartItemComponent.prototype.getAllItemTypes = function () {
        return Object.keys(this.quantity);
    };
    CartItemComponent.prototype.getAllItemSizes = function () {
        var sizes = [];
        for (var type in this.quantity) {
            for (var size in this.quantity[type]) {
                if (sizes.indexOf(size) == -1) {
                    sizes.push(size);
                }
            }
        }
        console.log(sizes);
        return sizes;
    };
    CartItemComponent.prototype.deleteItem = function (item) {
        this.cartService.deleteFromCart(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CartItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CartItemComponent.prototype, "quantity", void 0);
    CartItemComponent = __decorate([
        core_1.Component({
            selector: 'cart-item',
            templateUrl: 'app/templates/cart-item.template.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], CartItemComponent);
    return CartItemComponent;
}());
exports.CartItemComponent = CartItemComponent;
//# sourceMappingURL=cart-item.component.js.map