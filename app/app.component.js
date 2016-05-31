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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shop_route_component_1 = require('./components/shop/shop-route.component');
var nav_component_1 = require('./components/navigation/nav.component');
var footer_component_1 = require('./components/footer/footer.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-app',
            directives: [footer_component_1.FooterComponent, nav_component_1.NavComponent, shop_route_component_1.ShopRouteComponent, router_1.ROUTER_DIRECTIVES],
            template: "\n  \t<navigation></navigation>\n  \t<div>\n  \t \t<a [routerLink]=\"['/shop']\">Art Shop</a>\n  \t\t<router-outlet></router-outlet>\n  \t</div>\n  \t<footer></footer>\n  "
        }),
        router_1.Routes([
            {
                path: '/shop',
                component: shop_route_component_1.ShopRouteComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map