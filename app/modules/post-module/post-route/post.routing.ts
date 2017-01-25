import { RouterModule } from '@angular/router';

import { PostsComponent } from './../components/posts-component/posts.component';

export const PostRouter = RouterModule.forChild([
    {
        path: 'posts',
        component: PostsComponent
    }
])