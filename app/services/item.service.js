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
                        thumb: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-1-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-1.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/unnatural-disaster/blue-oak-table1-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/blue-oak-table1.jpg',
                    }
                ],
                name: "Unnatural Disaster 1",
                id: 10928466,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-2-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-2.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/unnatural-disaster/blue-oak-table2-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/blue-oak-table2.jpg',
                    }
                ],
                name: "Unnatural Disaster 2",
                id: 99876530,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-3-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/Unnatural-Dissaster-3.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/unnatural-disaster/blue-oak-table3-thumb.jpg',
                        lg: 'assets/images/1-collection/unnatural-disaster/blue-oak-table3.jpg',
                    }
                ],
                name: "Unnatural Disaster 3",
                id: 97804763,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/figure_tutu-thumb.png',
                        lg: 'assets/images/1-collection/figure-tutu/figure_tutu_lg.png',
                    },
                    {
                        thumb: 'assets/images/1-collection/figure-tutu/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/figure-tutu/blue-oak-table.jpg',
                    }
                ],
                name: "Considering Pink or Blue",
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/figure-man/figure_man-thumb.jpg',
                        lg: 'assets/images/1-collection/figure-man/figure_man.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/figure-man/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/figure-man/blue-oak-table.jpg',
                    }
                ],
                name: "Man in Repose",
                id: 39018690,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/woman-in-hat-drawing/woman-in-hat-thumb.jpg',
                        lg: 'assets/images/1-collection/woman-in-hat-drawing/woman-in-hat.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/woman-in-hat-drawing/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/woman-in-hat-drawing/blue-oak-table.jpg',
                    }
                ],
                name: "Woman in Repose",
                id: 39640892,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/woman-in-hat-painting/_DSC7666-thumb.jpg',
                        lg: 'assets/images/1-collection/woman-in-hat-painting/_DSC7666.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/woman-in-hat-painting/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/woman-in-hat-painting/blue-oak-table.jpg',
                    }
                ],
                name: "Sunbathing",
                id: 10649208,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/purple-woman/_DSC7667-thumb.jpg',
                        lg: 'assets/images/1-collection/purple-woman/_DSC7667.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/purple-woman/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/purple-woman/blue-oak-table.jpg',
                    }
                ],
                name: "Lost",
                id: 18995744,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/monoprint1/monoprint1-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint1/monoprint1.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/monoprint1/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint1/blue-oak-table.jpg',
                    }
                ],
                name: "Monoprint 1",
                id: 33908765,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/monoprint4/monoprint4-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint4/monoprint4.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/monoprint4/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint4/blue-oak-table.jpg',
                    }
                ],
                name: "Monoprint 4",
                id: 22098447,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/monoprint-string/monoprint_string-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-string/monoprint_string.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/monoprint-string/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-string/blue-oak-table.jpg',
                    }
                ],
                name: "Monoprint 2",
                id: 33098568,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/monoprint-b&w-v/b&w-vertical-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-b&w-v/b&w-vertical.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/monoprint-b&w-v/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-b&w-v/blue-oak-table.jpg',
                    }
                ],
                name: "Monoprint 1",
                id: 11944098,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/monoprint-b&w-h/b&w-horizontal-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-b&w-h/b&w-horizontal.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/monoprint-b&w-h/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/monoprint-b&w-h/blue-oak-table.jpg',
                    }
                ],
                name: "Monoprint 1",
                id: 22966987,
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
                images: [
                    {
                        thumb: 'assets/images/1-collection/turbulance/monoprint3-thumb.jpg',
                        lg: 'assets/images/1-collection/turbulance/monoprint3.jpg',
                    },
                    {
                        thumb: 'assets/images/1-collection/turbulance/blue-oak-table-thumb.jpg',
                        lg: 'assets/images/1-collection/turbulance/blue-oak-table.jpg',
                    }
                ],
                name: "Turbulance",
                id: 89057648,
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