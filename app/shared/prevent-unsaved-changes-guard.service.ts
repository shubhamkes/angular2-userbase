import { CanDeactivate } from '@angular/router';
import { FormGroup } from '@angular/forms';

export interface formComponent{
    form : FormGroup;
}

export class PreventUnsavedChanges implements CanDeactivate<formComponent>{
    canDeactivate(component: formComponent){
        if(component.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');

        return true;
    }
}