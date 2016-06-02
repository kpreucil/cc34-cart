"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var item_service_1 = require('./services/item.service');
var cart_service_1 = require('./services/cart.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, item_service_1.ItemService, cart_service_1.CartService]);
//# sourceMappingURL=main.js.map