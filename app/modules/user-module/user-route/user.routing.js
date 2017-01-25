"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./../components/users-component/users.component');
var userForm_component_1 = require('./../components/user-form-component/userForm.component');
var prevent_unsaved_changes_guard_service_1 = require('./../../../shared/prevent-unsaved-changes-guard.service');
exports.UserRouter = router_1.RouterModule.forChild([
    {
        path: 'users/:id',
        component: userForm_component_1.UserForm,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChanges]
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'users/new',
        component: userForm_component_1.UserForm,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChanges]
    }
]);
//# sourceMappingURL=user.routing.js.map