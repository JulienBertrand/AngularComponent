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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InterpolateComponent = /** @class */ (function () {
    function InterpolateComponent() {
        this.nom = 'Jables';
        this.prenom = 'Radibovitchou';
        this.formation = new Formation('JAVA POEI', 'une super formation!');
    }
    InterpolateComponent.prototype.getFullName = function () {
        return this.nom + " " + this.prenom;
    };
    InterpolateComponent.prototype.ngOnInit = function () {
    };
    InterpolateComponent = __decorate([
        core_1.Component({
            selector: 'app-interpolate',
            templateUrl: './interpolate.component.html',
            styleUrls: ['./interpolate.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], InterpolateComponent);
    return InterpolateComponent;
}());
exports.InterpolateComponent = InterpolateComponent;
var Formation = /** @class */ (function () {
    function Formation(nom, description) {
        this.nom = nom;
        this.description = description;
    }
    Formation.prototype.ngOnInit = function () {
    };
    return Formation;
}());
exports.Formation = Formation;
//# sourceMappingURL=interpolate.component.js.map