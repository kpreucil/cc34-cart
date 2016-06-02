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
var router_1 = require('@angular/router');
var item_service_1 = require('../../services/item.service');
var item_description_component_1 = require('../items/item-description.component');
var cart_display_component_1 = require('../cart/cart-display.component');
var ItemRouteComponent = (function () {
    function ItemRouteComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
    }
    ItemRouteComponent.prototype.routerOnActivate = function (curr) {
        var id = curr.getParam('id');
        console.log(id);
        this.currentItem = this.itemService.getItemByID(id);
    };
    ItemRouteComponent = __decorate([
        core_1.Component({
            directives: [item_description_component_1.ItemDescriptionComponent, cart_display_component_1.CartDisplayComponent],
            selector: 'item-route',
            templateUrl: 'app/templates/routes/item-route.template.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, router_1.Router])
    ], ItemRouteComponent);
    return ItemRouteComponent;
}());
exports.ItemRouteComponent = ItemRouteComponent;
//# sourceMappingURL=item-route.component.js.map