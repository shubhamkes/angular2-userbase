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
var forms_1 = require('@angular/forms');
var user_1 = require('./../../user');
var router_1 = require('@angular/router');
var user_service_1 = require('./../../services/user-service/user.service');
var basicValidator_1 = require('./../../../../shared/basicValidator');
var UserForm = (function () {
    function UserForm(fb, _us, _router, _activateRoute) {
        this._us = _us;
        this._router = _router;
        this._activateRoute = _activateRoute;
        this.user = new user_1.User();
        this.title = 'Add User';
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', basicValidator_1.BasicValidator.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    UserForm.prototype.save = function () {
        var _this = this;
        console.log(this.user);
        var result = this._us.addUser(this.user);
        result.subscribe(function (x) {
            _this.form.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    UserForm.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._activateRoute.params
            .subscribe(function (params) {
            if (params['id'] && params['id'] != 'new')
                _this.user.id = params['id'];
        });
        if (this.user.id) {
            this.title = 'Edit User';
            this._us.getUser(this.user.id)
                .subscribe(function (userObj) {
                console.log(userObj);
                _this.user = userObj;
            }, function (response) {
                if (response.status == 404)
                    _this._router.navigate(['notFound']);
            });
        }
    };
    UserForm = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: 'app/modules/user-module/templates/userForm.template.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], UserForm);
    return UserForm;
}());
exports.UserForm = UserForm;
// import { Component, OnInit }                     from '@angular/core';
// import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
// import { Router, ActivatedRoute }                from '@angular/router';
// import { BasicValidator }                       from './../../../../shared/basicValidator';
// @Component({
//     templateUrl: 'app/modules/user-module/templates/userForm.template.html'
// })
// export class UserForm implements OnInit {
// 	form: FormGroup;
//     title: string;
// 	constructor(
//         fb: FormBuilder,
//         private _router: Router,
//         private _route: ActivatedRoute,
//     ) {
// 		this.form = fb.group({
// 			name: ['', Validators.required],
// 			email: ['', BasicValidator.email],
// 			phone: [],
// 			address: fb.group({
// 				street: [],
// 				suite: [],
// 				city: [],
// 				zipcode: []
// 			})
// 		});
// 	}
//     ngOnInit(){
//     }     
// } 
//# sourceMappingURL=userForm.component.js.map