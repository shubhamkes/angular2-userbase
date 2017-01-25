import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){
    }

    getPosts(){
        return this._http.get(this._url)
        .map(res => res.json());
    }

    getComments(postId) {
        var url = this._url + '/' + postId + '/comments';
        return this._http.get(url)
        .map(res => res.json());
    }
}