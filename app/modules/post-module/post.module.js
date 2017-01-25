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
var common_1 = require('@angular/common');
var post_service_1 = require('./services/post.service');
var SharedModule_1 = require('./../../shared/SharedModule');
var posts_component_1 = require('./components/posts-component/posts.component');
var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, router_1.RouterModule, SharedModule_1.SharedModule
            ],
            exports: [
                posts_component_1.PostsComponent
            ],
            declarations: [
                posts_component_1.PostsComponent
            ],
            providers: [
                post_service_1.PostService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map