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
var cart_item_component_1 = require('../cart/cart-item.component');
var cart_total_component_1 = require('../cart/cart-total.component');
var cart_service_1 = require('../../services/cart.service');
var CartRouteComponent = (function () {
    function CartRouteComponent(cartService) {
        this.cartService = cartService;
    }
    CartRouteComponent.prototype.shouldShowItem = function (quantity) {
        for (var i = 0; i < quantity.length; i++) {
            if (quantity[i] = 0 && quantity[i] != "") {
                return false;
            }
            return true;
        }
        //    loop through each quantity
        // if they all sum to 0
        // and none of them is ""
        // return false
        //    return true
    };
    CartRouteComponent = __decorate([
        core_1.Component({
            directives: [cart_item_component_1.CartItemComponent, cart_total_component_1.CartTotalComponent],
            selector: 'cart',
            templateUrl: 'app/templates/routes/cart-route.template.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], CartRouteComponent);
    return CartRouteComponent;
}());
exports.CartRouteComponent = CartRouteComponent;
//# sourceMappingURL=cart-route.component.js.map