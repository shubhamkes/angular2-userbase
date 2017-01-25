import {Component, Input} from '@angular/core';

@Component({
    selector : 'spinner',
    template: `
    <i class="fa fa-refresh fa-spin fa-3x fa-fw" *ngIf="visible" aria-hidden="true"></i>
    `
})

export class SpinnerComponent{
    @Input() visible = true;
}