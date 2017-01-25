import {RouterModule} from '@angular/router';

import {UsersComponent} from './../components/users-component/users.component';
import {UserComponent} from './../components/user-component/user.component';
import { UserForm } from './../components/user-form-component/userForm.component';
import { PreventUnsavedChanges } from './../../../shared/prevent-unsaved-changes-guard.service'

export const UserRouter = RouterModule.forChild([
    {
        path: 'users/:id',
        component: UserForm,
        canDeactivate: [ PreventUnsavedChanges ]  
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/new',
        component: UserForm,
        canDeactivate: [ PreventUnsavedChanges ]
    }
])