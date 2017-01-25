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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var users_component_1 = require('./components/users-component/users.component');
var user_component_1 = require('./components/user-component/user.component');
var user_service_1 = require('./services/user-service/user.service');
var userForm_component_1 = require('./components/user-form-component/userForm.component');
var prevent_unsaved_changes_guard_service_1 = require('./../../shared/prevent-unsaved-changes-guard.service');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            declarations: [
                users_component_1.UsersComponent, user_component_1.UserComponent, userForm_component_1.UserForm
            ],
            exports: [
                users_component_1.UsersComponent, user_component_1.UserComponent, userForm_component_1.UserForm
            ],
            providers: [
                user_service_1.UserService, prevent_unsaved_changes_guard_service_1.PreventUnsavedChanges
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map