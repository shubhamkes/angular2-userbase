import {Component, OnInit} from '@angular/core';
import {UserService} from './../../services/user-service/user.service';

@Component({
    selector: 'user',
    templateUrl: 'app/modules/user-module/templates/users.template.html',
    styles: [`
        .container {
            position : relative;
        }
        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 1 !important;
        }
        .fadeIn{
            opacity: .7;
        }
    `],
    providers: [ UserService ]
})

export class UsersComponent implements OnInit{
    users: any[];
    loading = false;
    constructor(private _us: UserService){
    }


    ngOnInit(){
        this._us.getUsers()
        .subscribe(users => this.users = users);
        
    }

    deleteUser(user){
            this.loading = true;
            var userId = user.id;
            this._us.deleteUser(userId)
            .subscribe(x => {

                if(x){
                    alert('User has been deleted');
                }
                this.loading = false;
            })
        }
}
