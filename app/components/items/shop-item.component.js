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
var item_service_1 = require('../../services/item.service');
var ShopItemComponent = (function () {
    function ShopItemComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
        this.currentItem = {};
    }
    ShopItemComponent.prototype.openProduct = function () {
        this.router.navigate(["/item", this.id]);
        var getItem = this.itemService.getItemByID(this.id);
        console.log('This is getItem', getItem);
        console.log('what type is currentItem?', typeof (this.currentItem));
        var currentItem = getItem;
        console.log('What is currentItem?', currentItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShopItemComponent.prototype, "thumb1", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ShopItemComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ShopItemComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ShopItemComponent.prototype, "price", void 0);
    ShopItemComponent = __decorate([
        core_1.Component({
            selector: 'shop-item',
            templateUrl: 'app/templates/shop-item.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, item_service_1.ItemService])
    ], ShopItemComponent);
    return ShopItemComponent;
}());
exports.ShopItemComponent = ShopItemComponent;
//# sourceMappingURL=shop-item.component.js.map