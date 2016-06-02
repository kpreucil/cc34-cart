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
var ItemDescriptionComponent = (function () {
    function ItemDescriptionComponent(cartService) {
        this.cartService = cartService;
        this.itemQuantities = {
            paper_sm: 0,
            paper_md: 0,
            paper_lg: 0,
            canvas_sm: 0,
            canvas_md: 0,
            canvas_lg: 0
        };
    }
    ItemDescriptionComponent.prototype.addToCart = function () {
        this.cartService.inventory.push({ item: this.currItem, quantity: this.itemQuantities });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "currItem", void 0);
    ItemDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'item-desc',
            templateUrl: 'app/templates/item-description.template.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], ItemDescriptionComponent);
    return ItemDescriptionComponent;
}());
exports.ItemDescriptionComponent = ItemDescriptionComponent;
//# sourceMappingURL=item-description.component.js.map