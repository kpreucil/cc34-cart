import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, ItemService, CartService]);