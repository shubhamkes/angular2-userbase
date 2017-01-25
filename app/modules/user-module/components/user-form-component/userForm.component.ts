import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user-service/user.service'
import { BasicValidator } from './../../../../shared/basicValidator'

@Component({
    selector : 'user-form',
    templateUrl : 'app/modules/user-module/templates/userForm.template.html',
	providers : [ UserService ]
})

export class UserForm implements OnInit{
    form: FormGroup;
    user = new User();
	title = 'Add User';

    constructor(fb: FormBuilder,
		private _us: UserService,
		private _router: Router,
		private _activateRoute: ActivatedRoute){
        this.form = fb.group({
			name: ['', Validators.required],
			email: ['',  BasicValidator.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
    }

	save(){
		console.log(this.user);

		var result = this._us.addUser(this.user)
		result.subscribe( x => {
			this.form.markAsPristine();
			this._router.navigate(['users'])
		});
	}

    ngOnInit(){
		var id = this._activateRoute.params
			.subscribe(params => {
				if(params['id'] && params['id'] != 'new')
					this.user.id = params['id']
			})

		if(this.user.id){
			this.title = 'Edit User'
			this._us.getUser(this.user.id)
			.subscribe(userObj => {
				console.log(userObj);
				this.user = userObj;
			}, response => {
				if(response.status == 404)
					this._router.navigate(['notFound']);
			})

		}
    }
}

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