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
var router_1 = require("@angular/router");
var cart_item_component_1 = require('../cart/cart-item.component');
var cart_total_component_1 = require('../cart/cart-total.component');
var cart_service_1 = require('../../services/cart.service');
var thank_you_component_1 = require('../cart/thank-you.component');
var CheckoutRouteComponent = (function () {
    function CheckoutRouteComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.billingSame = false;
    }
    CheckoutRouteComponent = __decorate([
        core_1.Component({
            directives: [cart_item_component_1.CartItemComponent, cart_total_component_1.CartTotalComponent, thank_you_component_1.ThankYouComponent],
            selector: 'checkout',
            templateUrl: 'app/templates/routes/checkout-route.template.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, router_1.Router])
    ], CheckoutRouteComponent);
    return CheckoutRouteComponent;
}());
exports.CheckoutRouteComponent = CheckoutRouteComponent;
//# sourceMappingURL=checkout-route.component.js.map