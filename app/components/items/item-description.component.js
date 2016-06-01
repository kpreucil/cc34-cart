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
var ItemDescriptionComponent = (function () {
    function ItemDescriptionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "thumb1", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "thumb2", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "thumb3", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "img1", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "img2", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemDescriptionComponent.prototype, "img3", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemDescriptionComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ItemDescriptionComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ItemDescriptionComponent.prototype, "price", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemDescriptionComponent.prototype, "description", void 0);
    ItemDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'item-desc',
            templateUrl: 'app/templates/item-description.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ItemDescriptionComponent);
    return ItemDescriptionComponent;
}());
exports.ItemDescriptionComponent = ItemDescriptionComponent;
//# sourceMappingURL=item-description.component.js.map