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
var ItemService = (function () {
    function ItemService() {
        this.inventory = [
            {
                images: [
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/figure_tutu-thumb.png',
                        lg: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                    },
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/wall-image-thumb.jpg',
                        lg: 'assets/images/1-collection/figure-tutu/wall-image.jpg',
                    }
                ],
                name: "Hello",
                id: 1239658,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis egestas aliquet. Quisque ut feugiat risus. Vestibulum dictum iaculis ipsum, eget aliquam neque. Nam id eros euismod, commodo ante quis, malesuada augue.Cras diam ex, molestie non vulputate in, pretium dapibus ante. Donec imperdiet porta massa ut condimentum. Integer libero ante, tincidunt sit amet fermentum in, consectetur ut nisl. Maecenas molestie blandit egestas. Donec malesuada odio nec felis malesuada porta.Cras vitae felis convallis, hendrerit erat eu, hendrerit diam.Donec blandit, ligula in gravida posuere, dui ipsum auctor tortor, tristique sodales enim urna ac purus.",
                size: {
                    sm: '8 x 10',
                    md: '11 x 14',
                    lg: '16 x 20'
                },
                price: {
                    paper: {
                        sm: 15,
                        md: 25,
                        lg: 35
                    },
                    canvas: {
                        sm: 23,
                        md: 32,
                        lg: 45,
                    }
                }
            },
            {
                // thumb1: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
                // thumb2: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
                // thumb3: 'assets/images/1-collection/figure-tutu/thumbnails/figure_tutu.png',
                // img1: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                // img2: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                // img3: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                images: [
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/figure_tutu-thumb.png',
                        lg: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                    },
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/wall-image-thumb.jpg',
                        lg: 'assets/images/1-collection/figure-tutu/wall-image.jpg',
                    }
                ],
                name: "Goodbye",
                id: 9347575,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis egestas aliquet. Quisque ut feugiat risus. Vestibulum dictum iaculis ipsum, eget aliquam neque. Nam id eros euismod, commodo ante quis, malesuada augue.Cras diam ex, molestie non vulputate in, pretium dapibus ante. Donec imperdiet porta massa ut condimentum. Integer libero ante, tincidunt sit amet fermentum in, consectetur ut nisl. Maecenas molestie blandit egestas. Donec malesuada odio nec felis malesuada porta.Cras vitae felis convallis, hendrerit erat eu, hendrerit diam.Donec blandit, ligula in gravida posuere, dui ipsum auctor tortor, tristique sodales enim urna ac purus.",
                size: {
                    sm: '8 x 10',
                    md: '11 x 14',
                    lg: '16 x 20'
                },
                price: {
                    paper: {
                        sm: 15,
                        md: 25,
                        lg: 35
                    },
                    canvas: {
                        sm: 23,
                        md: 32,
                        lg: 45,
                    }
                }
            }
        ];
    }
    ItemService.prototype.getItemByID = function (id) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (id == this.inventory[i].id) {
                return this.inventory[i];
            }
        }
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map