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
var info_service_1 = require('../../services/info.service');
var AccordianComponent = (function () {
    function AccordianComponent(infoService) {
        this.infoService = infoService;
    }
    AccordianComponent.prototype.showInfo = function () {
        /* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
        var acc = document.getElementsByClassName("myAccordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            };
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AccordianComponent.prototype, "currInfo", void 0);
    AccordianComponent = __decorate([
        core_1.Component({
            selector: 'accordian',
            templateUrl: 'app/templates/accordian.template.html'
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService])
    ], AccordianComponent);
    return AccordianComponent;
}());
exports.AccordianComponent = AccordianComponent;
//# sourceMappingURL=accordian.component.js.map