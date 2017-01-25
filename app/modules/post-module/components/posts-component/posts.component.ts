import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post } from './../../post';

@Component({
    selector: 'posts',
    templateUrl: 'app/templates/post/post.template.html',
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
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .posts .media-object{ border-radius: 100%;}
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
})

export class PostsComponent implements OnInit {
    posts: any[];
    selectedPost;
    comments;
    postsLoading = false;
    commentsLoading = false;
    constructor(private _ps: PostService) {
    }

    ngOnInit() {
        this.postsLoading = true;
        this._ps.getPosts()
            .subscribe(posts => this.posts = posts,
            null,
            () => { this.postsLoading = false; });
    }

    selectPost(post){
        this.selectedPost = post;
        this.commentsLoading = true;

        this._ps.getComments(post.id)
            .subscribe(comments => this.selectedPost.comments = comments,
            null,
            () => this.commentsLoading = false);
    }

}
