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
var shop_item_component_1 = require('../items/shop-item.component');
var item_service_1 = require('../../services/item.service');
var cart_display_component_1 = require('../cart/cart-display.component');
var ShopRouteComponent = (function () {
    function ShopRouteComponent(itemService) {
        this.itemService = itemService;
    }
    ShopRouteComponent = __decorate([
        core_1.Component({
            directives: [shop_item_component_1.ShopItemComponent, cart_display_component_1.CartDisplayComponent],
            selector: 'shop',
            templateUrl: 'app/templates/routes/shop-route.template.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ShopRouteComponent);
    return ShopRouteComponent;
}());
exports.ShopRouteComponent = ShopRouteComponent;
//# sourceMappingURL=shop-route.component.js.map