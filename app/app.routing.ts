import {RouterModule} from '@angular/router';

import {HomeComponent} from './components/home-component/home.component';
import {NotFound} from './components/not-found/not-found.component';

export const routing = RouterModule.forRoot([
	{
        path: '',
        component: HomeComponent
    },
    {
        path: 'notFound',
        component: NotFound
    }
    , {
        path: '**',
        redirectTo: 'notFound'
    }
]);