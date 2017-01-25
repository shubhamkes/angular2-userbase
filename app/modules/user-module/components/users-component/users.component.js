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
var user_service_1 = require('./../../services/user-service/user.service');
var UsersComponent = (function () {
    function UsersComponent(_us) {
        this._us = _us;
        this.loading = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.loading = true;
        var userId = user.id;
        this._us.deleteUser(userId)
            .subscribe(function (x) {
            if (x) {
                alert('User has been deleted');
            }
            _this.loading = false;
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/modules/user-module/templates/users.template.html',
            styles: ["\n        .container {\n            position : relative;\n        }\n        .loader {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            opacity: 1 !important;\n        }\n        .fadeIn{\n            opacity: .7;\n        }\n    "],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map