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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var user_module_1 = require('./modules/user-module/user.module');
var post_module_1 = require('./modules/post-module/post.module');
var user_routing_1 = require('./modules/user-module/user-route/user.routing');
var post_routing_1 = require('./modules/post-module/post-route/post.routing');
var SharedModule_1 = require('./shared/SharedModule');
var app_component_1 = require('./app.component');
var nav_component_1 = require('./components/nav-component/nav.component');
var home_component_1 = require('./components/home-component/home.component');
var not_found_component_1 = require('./components/not-found/not-found.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, user_module_1.UserModule, post_module_1.PostModule, user_routing_1.UserRouter, post_routing_1.PostRouter, app_routing_1.routing, SharedModule_1.SharedModule],
            declarations: [app_component_1.AppComponent, nav_component_1.NavBar, home_component_1.HomeComponent, not_found_component_1.NotFound],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map