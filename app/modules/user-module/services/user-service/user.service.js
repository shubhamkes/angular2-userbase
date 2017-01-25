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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._url = "http://jsonplaceholder.typicode.com/users";
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (userId) {
        return this._http.get(this.createUrl(userId))
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.createUrl(userId))
            .map(function (res) {
            if (res.status == 200) {
                return true;
            }
        });
    };
    UserService.prototype.createUrl = function (params) {
        return this._url + '/' + params;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map