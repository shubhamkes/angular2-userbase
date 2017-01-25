import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { routing } from './app.routing'
import { HttpModule } from '@angular/http';
import { UserModule } from './modules/user-module/user.module';
import { PostModule } from './modules/post-module/post.module';
import { UserRouter } from './modules/user-module/user-route/user.routing';
import { PostRouter } from './modules/post-module/post-route/post.routing';
import { SharedModule } from './shared/SharedModule'

import { AppComponent }   from './app.component';
import {NavBar} from './components/nav-component/nav.component';
import {HomeComponent} from './components/home-component/home.component';
import {NotFound} from './components/not-found/not-found.component'


@NgModule({
  imports:      [ BrowserModule, HttpModule, UserModule, PostModule, UserRouter, PostRouter, routing, SharedModule  ],
  declarations: [ AppComponent, NavBar, HomeComponent, NotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
