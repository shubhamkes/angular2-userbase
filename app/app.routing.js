"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home-component/home.component');
var not_found_component_1 = require('./components/not-found/not-found.component');
exports.routing = router_1.RouterModule.forRoot([
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'notFound',
        component: not_found_component_1.NotFound
    },
    {
        path: '**',
        redirectTo: 'notFound'
    }
]);
//# sourceMappingURL=app.routing.js.map