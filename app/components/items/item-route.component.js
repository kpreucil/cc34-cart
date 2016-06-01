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
var item_service_1 = require('../../services/item.service');
var item_description_component_1 = require('../items/item-description.component');
var ItemRouteComponent = (function () {
    function ItemRouteComponent(itemService) {
        this.itemService = itemService;
    }
    ItemRouteComponent = __decorate([
        core_1.Component({
            directives: [item_description_component_1.ItemDescriptionComponent],
            selector: 'item-route',
            templateUrl: 'app/templates/routes/item-route.template.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemRouteComponent);
    return ItemRouteComponent;
}());
exports.ItemRouteComponent = ItemRouteComponent;
//# sourceMappingURL=item-route.component.js.map