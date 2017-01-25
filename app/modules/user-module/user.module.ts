import {NgModule} from '@angular/core';
import { RouterModule }        from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users-component/users.component';
import { UserComponent } from './components/user-component/user.component';
import { UserService } from './services/user-service/user.service';
import { UserForm } from './components/user-form-component/userForm.component';
import { PreventUnsavedChanges } from './../../shared/prevent-unsaved-changes-guard.service'

@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule
    ],
    declarations: [
        UsersComponent, UserComponent, UserForm
    ],
    exports: [
        UsersComponent, UserComponent, UserForm
    ],
    providers: [
        UserService, PreventUnsavedChanges
    ]
})


export class UserModule{

}

