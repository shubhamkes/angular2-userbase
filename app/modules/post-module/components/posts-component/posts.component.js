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
var post_service_1 = require('./../../services/post.service');
var PostsComponent = (function () {
    function PostsComponent(_ps) {
        this._ps = _ps;
        this.postsLoading = false;
        this.commentsLoading = false;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsLoading = true;
        this._ps.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
    };
    PostsComponent.prototype.selectPost = function (post) {
        var _this = this;
        this.selectedPost = post;
        this.commentsLoading = true;
        this._ps.getComments(post.id)
            .subscribe(function (comments) { return _this.selectedPost.comments = comments; }, null, function () { return _this.commentsLoading = false; });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/templates/post/post.template.html',
            styles: ["\n        .container {\n            position : relative;\n        }\n        .loader {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            opacity: 1 !important;\n        }\n        .fadeIn{\n            opacity: .7;\n        }\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .posts .media-object{ border-radius: 100%;}\n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map