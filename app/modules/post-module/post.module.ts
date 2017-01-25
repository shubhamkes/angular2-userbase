import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { SharedModule } from './../../shared/SharedModule'
import { PostsComponent } from './components/posts-component/posts.component';


@NgModule({
    imports: [
        CommonModule, RouterModule, SharedModule
    ],
    exports: [
        PostsComponent
    ],
    declarations: [
        PostsComponent
    ],
    providers: [
        PostService
    ]
})

export class PostModule {

}