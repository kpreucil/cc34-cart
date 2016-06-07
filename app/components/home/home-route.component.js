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
var testimonials_component_1 = require('../home/testimonials.component');
var portfolio_item_component_1 = require('../portfolio/portfolio-item.component');
var HomeRouteComponent = (function () {
    function HomeRouteComponent() {
    }
    HomeRouteComponent = __decorate([
        core_1.Component({
            directives: [testimonials_component_1.TestimonialsComponent, portfolio_item_component_1.PortfolioItemComponent],
            selector: '/home',
            templateUrl: 'app/templates/routes/home-route.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRouteComponent);
    return HomeRouteComponent;
}());
exports.HomeRouteComponent = HomeRouteComponent;
//# sourceMappingURL=home-route.component.js.map