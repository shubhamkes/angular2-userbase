import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'navbar',
    templateUrl : 'app/templates/navbar/navbar.template.html'
})

export class NavBar{

    constructor(public router: Router){

    }
}